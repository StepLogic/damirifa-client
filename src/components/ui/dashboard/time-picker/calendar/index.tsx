import React, {
  forwardRef,
  JSXElementConstructor,
  useEffect,
  useReducer,
  useState,
} from "react";
import s from "./index.module.css";
import cn from "classnames";
import { uuid } from "@lib/Utils";
import {
  date,
  daysLabel,
  generateDaysForMonth,
  monthsLabel,
} from "./constants";
import { ClickOutside } from "@components/ui/common";
import { BiArrowCircle } from "@components/icons";
import { Button } from "@components/ui/dashboard";
let constant = 200;
const initial = {
  yearsForPage: date.getPreviousYears(-constant),
  daysForMonth: generateDaysForMonth(date.getUTCMonth, date.getUTCFullYear),
  selectMonth: date.getUTCMonth(),
  selectDay: date.getUTCDate(),
  selectYear: date.getFullYear(),
  day: date.getDay(),
  currentView: "years",
  isVisible: false,
};

function reducer(state, action) {
  let date = new Date(state.selectYear, state.selectMonth, action.payload);
  let arr = new Date(
    state.yearsForPage.at(-1) ? state.yearsForPage.at(-1) : state.selectYear,
    state.selectMonth,
    0
  );
  switch (action.type) {
    case "set_year":
      return {
        ...state,
        currentView: "days",
        daysForMonth: generateDaysForMonth(action.payload, state.selectYear),
        selectYear: action.payload,
      };
    case "set_month":
      return {
        ...state,
        currentView: "days",
        daysForMonth: generateDaysForMonth(action.payload, state.selectYear),
        selectMonth: action.payload,
      };
    case "set_day":
      return { ...state, selectDay: action.payload, day: date.getDay() };
    case "next_years":
      return {
        ...state,
        yearsForPage: arr.getNextYears(constant),
      };
    case "previous_years":
      return { ...state, yearsForPage: arr.getPreviousYears(-constant) };
    case "next_month":
      return {
        ...state,
        daysForMonth: generateDaysForMonth(
          state.selectMonth + 1,
          state.selectYear
        ),
        selectMonth: state.selectMonth + 1,
      };
    case "previous_month":
      return {
        ...state,
        daysForMonth: generateDaysForMonth(
          state.selectMonth - 1,
          state.selectYear
        ),
        selectMonth: state.selectMonth - 1,
      };
    case "set_years_view":
      return {
        ...state,
        yearsForPage: arr.getNextYears(constant),
        currentView: "years",
      };
    case "set_months_view":
      return { ...state, currentView: "months" };
    case "generate_days":
      console.log(generateDaysForMonth(state.selectMonth, state.selectYear));
      return {
        ...state,
        daysForMonth: generateDaysForMonth(state.selectMonth, state.selectYear),
      };
    case "toggle":
      return { ...state, isVisible: !state.isVisible };
    default:
      throw new Error();
  }
}
type Props = {
  className?: string;
  onRequestClose: Function;
  isOpen: boolean;
  handleChange: (value: Date) => void;
};
const Calendar: React.FC<Props> = (props) => {
  const { className, isOpen, onRequestClose, handleChange } = props;
  console.log("class", className);
  const id = uuid();
  const [state, dispatch] = useReducer(reducer, initial);
  useEffect(() => {
    dispatch({ type: "generate_days" });
  }, []);
  // useEffect(() => {
  //   console.log(state);
  //   handleChange(
  //     new Date(state.selectYear, state.selectMonth, state.selectDay)
  //   );
  // }, [state.selectDay, state.selectMonth, state.selectYear]);
  return (
    <ClickOutside active={isOpen} onClick={() => onRequestClose()}>
      <div data-visible={`${isOpen}`} className={cn(s.calender, className)}>
        <header className={s.header}>
          <p
            onClick={() => {
              dispatch({ type: "set_years_view" });
            }}
          >
            {state.selectYear}
          </p>
          <h4>{`${daysLabel[state.day]
            .split("")
            .splice(0, 3)
            .join("")},  ${monthsLabel[state.selectMonth]
            .split("")
            .splice(0, 3)
            .join("")} ${state.selectDay} `}</h4>
        </header>

        {state.currentView === "days" && (
          <div className={s.controller}>
            <Button
              variant="icon"
              disabled={state.selectMonth === 0}
              onClick={() => {
                dispatch({ type: "previous_month" });
              }}
            >
              <BiArrowCircle className={"rotate-180"} />
            </Button>
            <div className={s.text}>
              <p
                onClick={() => {
                  dispatch({ type: "set_months_view" });
                }}
              >
                {monthsLabel[state.selectMonth].split("").splice(0, 3).join("")}
              </p>
              &nbsp;
              <p
                onClick={() => {
                  dispatch({ type: "set_years_view" });
                }}
              >
                {state.selectYear}
              </p>
            </div>
            <Button
              variant="icon"
              disabled={state.selectMonth === 11}
              onClick={() => {
                dispatch({ type: "next_month" });
              }}
            >
              <BiArrowCircle />
            </Button>
          </div>
        )}
        {state.currentView === "days" && (
          <div className={cn(s["content-days"], "scrollbar")}>
            {daysLabel.map((day) => (
              <div
                key={uuid()}
                role="button"
                className={s["days-label"]}
                // onClick={() => {
                //   handleChange
                // }}
              >
                {day.charAt(0)}
              </div>
            ))}
            {state.daysForMonth.map((r) => (
              <div
                role="button"
                key={uuid()}
                className={s["days-value"]}
                data-selected={`${r === state.selectDay}`}
                onClick={() => {
                  dispatch({ type: "set_day", payload: r });
                }}
              >
                {r}
              </div>
            ))}
          </div>
        )}
        {state.currentView === "months" && (
          <div className={cn(s["content-months"], "scrollbar")}>
            {monthsLabel.map((year, i) => (
              <button
                key={uuid()}
                role="button"
                className={s.value}
                onClick={() => {
                  dispatch({ type: "set_month", payload: i });
                }}
              >
                {year}
              </button>
            ))}
          </div>
        )}
        {state.currentView === "years" && (
          <div className={cn(s["content-years"], "scrollbar")}>
            {state.yearsForPage.map((year) => (
              <button
                role="button"
                key={uuid()}
                className={s["days-value"]}
                data-selected={`${year === state.selectYear}`}
                onClick={() => {
                  dispatch({ type: "set_year", payload: year });
                }}
              >
                {year}
              </button>
            ))}
          </div>
        )}
        <div className="flex flex-row items-center justify-end gap-4 pb-2 pr-2">
          <button
            className="text-[#ba181b]"
            onClick={() => {
              handleChange(
                new Date(state.selectYear, state.selectMonth, state.selectDay)
              );
              onRequestClose();
            }}
          >
            Ok
          </button>
          <button
            onClick={() => {
              onRequestClose();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </ClickOutside>
  );
};

export default Calendar;
