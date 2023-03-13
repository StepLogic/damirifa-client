import React, {
  forwardRef,
  JSXElementConstructor,
  useRef,
  useState,
} from "react";
import s from "./index.module.css";
import cn from "classnames";
import RDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { uuid } from "@lib/Utils";

Date.prototype.formatOne = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [
    (mm > 9 ? "" : "0") + mm,
    "/",
    (dd > 9 ? "" : "0") + dd,
    "/",
    this.getFullYear(),
  ].join("");
};

interface Props {
  className?: string;
  color?: "primary" | "secondary" | "dark";
  variant?: "outline" | "default";
  Component?: string | JSXElementConstructor<any>;
  disabled?: boolean;
  name?: string;
  icon?: React.ReactNode;
  disableCopyAndPaste?: boolean;
  register?: any;
  placeholder?: string;
  type?: "email" | "text" | "tel" | "currency" | "password";
  label?: String;
  required?: boolean;
  confirmed?: boolean;
  showTooltip?: boolean;
  onTooltipClick?: Function;
  error?: boolean;
}
import { useEffect, useReducer } from "react";
import Calendar from "./calendar";
import { ClickOutside } from "@components/ui/common";
Date.prototype.formatOne = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  return [
    (mm > 9 ? "" : "0") + mm,
    "/",
    (dd > 9 ? "" : "0") + dd,
    "/",
    this.getFullYear(),
  ].join("");
};
const DatePicker: React.FC<Props> = (props) => {
  const {
    className,
    variant = "outline",
    color = "secondary",
    disabled = false,
    error = false,
    placeholder,
    icon,
    label,
    Component = "input",
    name = "default",
    disableCopyAndPaste = false,
    required = false,
    register,
    type,
    confirmed,
    showTooltip = false,
    onTooltipClick,
    ...rest
  } = props;
  const rootClassName = cn(
    s.root,
    {
      [s.secondary]: color === "secondary",
      [s.dark]: color === "dark",
      [s.outline]: variant === "outline",
      [s.default]: variant === "default",
      [s.disabled]: disabled,
      [s.tel]: type === "tel",
      [s.error]: error,
      [s.iconContainer]: icon,
    },
    className
  );
  const id = uuid();
  const [date, setDate] = useState<Date>();
  const [showDate, setShowDate] = useState(false);
  const dateTimeRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {};
  return (
    <fieldset role={"button"} className={cn(s.fieldset, rootClassName)}>
      {icon && <div className={cn(s.icon)}>{icon}</div>}
      {placeholder && (
        <label
          tabIndex={-1}
          htmlFor={id}
          data-filled={`${date !== undefined}`}
          className={s.label}
          // onClick={() => document.getElementById(id)?.focus()}
          onClick={(_) => dateTimeRef.current?.showPicker()}
        >
          <label htmlFor={id}>{placeholder}</label>
          {required ? <span>*</span> : <></>}
        </label>
      )}
      {date !== undefined && (
        <label
          onClick={(_) => dateTimeRef.current?.showPicker()}
          tabIndex={-1}
          htmlFor={id}
          className={s.value}
        >
          <label htmlFor={id}>{date.formatOne()}</label>&nbsp;
        </label>
      )}
      {placeholder && (
        <legend
          data-filled={`${date !== undefined}`}
          id={"label"}
          tabIndex={-1}
          className={s.legend}
        >
          <span>{placeholder}</span>&nbsp;{required ? <span>*</span> : <></>}
        </legend>
      )}

      {/* <Calendar
        handleChange={(value) => setDate(value)}
        isOpen={showDate}
        onRequestClose={() => setShowDate(false)}
        className={s.calendar}
      /> */}

      <input
        id={id}
        ref={dateTimeRef}
        onChange={(event) => setDate(new Date(event.target.value))}
        type="date"
        className="relative "
      />
    </fieldset>
  );
};

export default DatePicker;
