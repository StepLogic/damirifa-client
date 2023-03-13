/**
 *Project:damirifa
 *File:countries-selector
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import cn from "classnames";
import { getCookie, setCookies } from "cookies-next";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import RSelect, { components, CSSObjectWithLabel } from "react-select";

import { fetchCountries } from "../../utils/services/auth";
import s from "./index.module.css";
import { filterData } from "./utils";

type SelectProps = {
  className?: string;
  value: any;
  onChange: any;
  inputRef: any;
  name: string;
};

const CountriesSelector: React.FC<SelectProps> = (props) => {
  const { className } = props;
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const list = localStorage.getItem("country-list");
    try {
      //@ts-ignore
      let _ = JSON.parse(list);
      setData(_.countries);
      setIsLoading(false);
    } catch (err) {
      fetchCountries()
        .then((r) => {
          let value = filterData(r.data);
          localStorage.setItem(
            "country-list",
            JSON.stringify({ countries: value })
          );
          setData(value);
          setIsLoading(false);
        })
        .catch((err) => console.log("select.countries", err));
    }
    return () => {};
  }, []);

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <label className="text-[#ffffffad] self-center mb-[0.5rem]">
        Country &nbsp;
        <span className="!text-[#830009]">*</span>
      </label>
      <RSelect
        placeholder={"Select Country"}
        styles={customStyles}
        ref={props.inputRef}
        name={props.name}
        className={className}
        options={data}
        // defaultValue={{value: "GH", label: "Ghana (GH)"}}
        isLoading={isLoading}
        value={data && data.find((_: any) => _.value === props.value)}
        onChange={(value: any) => props.onChange(value.value)}
        components={{
          DropdownIndicator: ({ children, ...props }) => <></>,
          Control: ({ children, ...props }) => (
            <Control {...props}>{children}</Control>
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
    </div>
  );
};

export default CountriesSelector;

function Menu(props: any) {
  const { renderMenu, ...rest } = props;
  return (
    <>
      <components.Menu className={cn(s.dropdown, "scrollbar")} {...rest}>
        {props.children}
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

function Control(props: any) {
  const { children, rootClassName } = props;
  return (
    <components.Control className={cn(s.fieldset, rootClassName)} {...props}>
      {children}
      <BsChevronDown
        color="black"
        className={cn("absolute right-2", { "rotate-180 ": props.menuIsOpen })}
      />
    </components.Control>
  );
}

const customStyles = {
  control: () =>
    ({
      width: "100%",
    } as CSSObjectWithLabel),
  indicatorSeparator: () =>
    ({
      display: "none",
    } as CSSObjectWithLabel),
  option: (provided: any, state: any) =>
    ({
      ...provided,
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "140%",
      letterSpacing: "0.0041em",
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
    } as CSSObjectWithLabel),

  input: () =>
    ({
      position: "absolute",
      paddingLeft: 8,
    } as CSSObjectWithLabel),
  singleValue: () => ({
    width: "100%",
    height: "3.125rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: 8,
  }),
  valueContainer: () =>
    ({
      width: "100%",
      height: "3.125rem",
      position: "relative",
      display: "flex",
      alignItems: "center",
    } as CSSObjectWithLabel),
  menu: () =>
    ({
      position: "absolute",
      width: "100%",
      boxShadow: "1px 1px 24px rgba(0, 0, 0, 0.05)",
      borderRadius: "4px",
      zIndex: 10,
    } as CSSObjectWithLabel),
};
