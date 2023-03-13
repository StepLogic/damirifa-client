"use client"
import React, { useState } from "react";
import s from "./index.module.css";
import cn from "classnames";
import { v4 as uuid } from "uuid";
import { Button, Select, Textfield } from "@components/ui/dashboard";
import { AiOutlinePlus } from "react-icons/ai";
import ItemSelect from "./select";


import { TipText } from "@components/TipText";
import AddButton from "@components/AddButton";
import {BiDelete, BiNoteEdit} from "@components/icons";
// import AddButton from "@components/AddButton";

interface Props {
  inputLabel?: string;
  selectOptions?: Array<string>;
  selectLabel?: string;
  listLabel?: string;
  searchPlaceholder?: string;
  className?: string;
}

interface Input {
  text: string;
  select: string;
}

export function ListingArea(props: any) {
  const { listLabel, onAddButtonClick } = props;

  return (
    <div className={s.listArea}>
      <div className="flex flex-row w-full items-center mt-2">
        <p className={s.listHeading}>{listLabel}</p>
        <AddButton
          onClick={() => onAddButtonClick()}
          label={"Add"}
          className={"lg:!hidden ml-auto"}
        />
      </div>

      <ul className={s.list}>
        <li key={uuid()} className={s.item}>
          <p>Joahua Makiba Jnr</p>
          <Button
            // showTooltip="Edit Relative"
            variant="icon"
            className="!p-0 !bg-none !text-[#585858] mx-3"
            // onClick={() => modal.openModal(<CreateTribute />, "Create Tribute")}
          >
            <BiNoteEdit className={"text-base"} />
          </Button>
          <Button
            // showTooltip="Delete Relative"
            variant="icon"
            className="!p-0 !bg-none !text-[#585858] "
          >
            <BiDelete />
          </Button>
          <ItemSelect className={s.select} />
        </li>
      </ul>
    </div>
  );
}
export function ChiefMourners(props: any) {
  const { listLabel } = props;
  const modal = useModalContext();
  return (
    <div className={"w-full grid grid-cols-1 gap-4"}>
      <Textfield />
      <Select />
      <AddButton
        // variant="outline"
        label="Add"
        onClick={() => modal.closeModal()}
        className={"col-span-2"}
      />
    </div>
  );
}
export function Relatives(props: any) {
  const { listLabel } = props;
  const modal = useModalContext();
  return (
    <div className={"flex-col w-full flex  gap-8"}>
      <Textfield placeholder="Relative name (comma separated)" />
      <Select placeholder="Relation" />
      <AddButton
        // variant="outline"
        label="Add"
        onClick={() => modal.closeModal()}
        className={"col-span-2 ml-auto"}
      />
    </div>
  );
}

const MultiInputList: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState<Input[]>([]);
  const [currentInput, setCurrentInput] = useState<string>("");
  const [selection, setCurrentSelection] = useState<string>("");
  const [errorText, setErrorText] = useState(false);
  const [errorSelect, setErrorSelect] = useState(false);
  const handleTextInput = (value: string) => {
    setCurrentInput(value);
  };
  const handleSelection = (value: string) => {
    console.log("notebook.context", value);
    setCurrentSelection(value);
  };
  const addItem = () => {
    if (selection !== "") {
      setErrorSelect(false);
      if (currentInput?.includes(",")) {
        currentInput.split(",").map((value) =>
          setSelected((current) => {
            const copy = [...current];
            if (copy.find((item) => item.text === value)) {
              setErrorText(true);
              return copy;
            } else {
              setErrorText(false);
            }
            copy.push({ text: value, select: selection });
            return copy;
          })
        );
      } else {
        setSelected((current) => {
          const copy = [...current];
          if (copy.find((item) => item.text === currentInput)) {
            setErrorText(true);
            return copy;
          } else {
            setErrorText(false);
          }
          copy.push({ text: currentInput, select: selection });
          console.log("forms.copy", copy);
          return copy;
        });
      }
    } else {
      setErrorSelect(true);
    }
  };
  const updateItemSelect = (text: string, select: string) =>
    setSelected((current) => {
      const copy = [...current];
      const index = copy.findIndex((input) => input.text === text);
      copy[index].select = select;
      return copy;
    });
  {
  }
  const {
    inputLabel = "Enter Value",
    selectOptions = [],
    selectLabel = "Relation",
    listLabel = "List",
    searchPlaceholder = "Search..",
    className,
    ...rest
  } = props;
  return (
    <div className={cn(s.root, "w-full !h-[3.8rem]", className)}>
      <div className="flex flex-row items-center gap-4">
        <Textfield
          color="secondary"
          onChange={(e) => setCurrentInput(e.target.value)}
          placeholder={inputLabel}
          className={"!h-[3.68rem]"}
          required
          error={errorText}
        />
        <Select
          onChange={handleSelection}
          className={"!w-full !h-[4rem"}
          // className={"col-span-3"}
          placeholder={selectLabel}
          options={selectOptions}
          error={errorSelect}
          required
        />
        <Button
          variant="outline"
          onClick={() => addItem()}
          className={"col-span-2 !h-[3.68rem]"}
          color="dark"
          square
        >
          <AiOutlinePlus className={s.icon} />
        </Button>
      </div>
    </div>
  );
};

export default MultiInputList;
