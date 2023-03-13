import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import RSelect, { components } from "react-select";

import s from "./index.module.css";

type Props = {
  className?: string;
};

const ItemSelect: React.FC<Props> = (props) => {
  const { className, ...rest } = props;

  const rootClassName = cn(s.root, className);

  const [value, setValue] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
  }, []);
  return (
    <RSelect
      controlShouldRenderValue={true}
      placeholder="Chocolate"
      styles={customStyles}
      className={className}
      options={[
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ]}
      components={{
        DropdownIndicator: ({ children, ...props }) => (
          <components.DropdownIndicator {...props}>
            <BsChevronDown className={cn({ "rotate-180": props.isFocused })} />
          </components.DropdownIndicator>
        ),
        Control: ({ children, ...props }) => (
          <Control rootClassName={rootClassName} {...props}>
            {children}
          </Control>
        ),
        Menu: ({ children, ...props }) => <Menu {...props}>{children}</Menu>,
        MenuList: ({ children, ...props }) => (
          <MenuList {...props}>{children}</MenuList>
        ),
        Option: ({ children, ...props }) => (
          <Option {...props}>{children}</Option>
        ),
      }}
    />
  );
};
export default ItemSelect;
const MenuList = (props: any) => {
  const { ...rest } = props;
  return (
    <>
      <components.MenuList
        className={cn(props.className, "scrollbar")}
        {...rest}
      >
        {props.children}
      </components.MenuList>
    </>
  );
};

function Menu(props: any) {
  const { renderMenu, ...rest } = props;
  return (
    <>
      <components.Menu className={s.dropdown} {...rest}>
        {props.children}
        <button
          onClick={() => rest.setValue("")}
          className={cn(
            "flex flex-row items relative py-2 pl-3 text-[#FF0005]"
          )}
        >
          Remove
        </button>
      </components.Menu>
    </>
  );
}

const Option = (props: any) => {
  const { renderOption, ...rest } = props;
  return (
    <>
      <components.Option
        className={cn(s.dropdownItem, { [s.selected]: rest.isSelected })}
        {...rest}
      >
        {props.children}
      </components.Option>
    </>
  );
};

function Control(props: any) {
  const { children, rootClassName } = props;
  return (
    <components.Control className={cn(s.fieldset, rootClassName)} {...props}>
      {children}
    </components.Control>
  );
}

const customStyles = {
  control: () => ({
    width: "100%",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  option: (provided: any, state: any) => ({
    ...provided,

    color: state.isSelected ? "white" : "#3C3C3C",
    background: state.isSelected ? "#BA181B" : "none",
    fontWeight: "400",
    fontSize: "11px",
    lineHeight: "140%",
    letterSpacing: "0.0041em",
  }),

  input: () => ({}),
  singleValue: () => ({
    width: "100%",
    height: "27px",
    display: "flex",
    alignItems: "center",
    paddingLeft: 8,
  }),
  valueContainer: () => ({
    width: "100%",
    height: "3.5rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
  }),
  menu: () => ({
    position: "absolute",
    width: "100%",
    background: "#FFFFFF",
    boxShadow: "1px 1px 24px rgba(0, 0, 0, 0.05)",
    borderRadius: "4px",
    zIndex: 10,
  }),
};
