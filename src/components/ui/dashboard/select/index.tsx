"use client"
import cn from "classnames";
import React, {
  JSXElementConstructor,
  useEffect,
  useRef,
  useState,
} from "react";
import { BsCaretDownFill } from "react-icons/bs";
import RSelect, { components } from "react-select";

import s from "./index.module.css";

type Props = {
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
  defaultValue?: any;
  error?: boolean;
  options?: Array<any>;
  onChange?: (value: any) => void;
  renderMenu?: (props: any) => any;
  renderOption?: (props: any) => any;
  renderControl?: (props: any) => any;
};

const Select: React.FC<Props> = (props) => {
  const {
    className,
    variant = "outline",
    color = "secondary",
    disabled = false,
    error = false,
    placeholder,
    icon,
    label,
    options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ],
    onChange,
    renderMenu,
    renderOption,
    renderControl,
    defaultValue,
    Component = "input",
    name = "default",
    disableCopyAndPaste = false,
    required = false,
    register,
    type,

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
    },
    className
  );
  const labelClassName = cn(s.label);
  let otherProps = { ...rest };
  //  update props with null copy and paste functions
  const [value, setValue] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
  }, []);
  return (
    <RSelect
      placeholder=""
      onChange={(value) => {
        onChange && onChange(value);
      }}
      styles={customStyles}
      closeMenuOnScroll={true}
      defaultValue={defaultValue}
      className={className}
      options={options}
      components={{
        DropdownIndicator: ({ children, ...props }) => (
          <components.DropdownIndicator {...props}>
            <BsCaretDownFill />
          </components.DropdownIndicator>
        ),
        Control: ({ children, ...props }) => (
          <Control
            placeholder={placeholder}
            icon={icon}
            rootClassName={rootClassName}
            value={value}
            required={required}
            renderControl={renderControl}
            {...props}
          >
            {children}
          </Control>
        ),
        Menu: ({ children, ...props }) => (
          <Menu renderMenu={renderMenu} {...props}>
            {children}
          </Menu>
        ),

        MenuList: ({ children, ...props }) => (
          <MenuList {...props}>{children}</MenuList>
        ),

        Option: ({ children, ...props }) => (
          <Option renderOption={renderOption} {...props}>
            {children}
          </Option>
        ),
      }}
    />
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
export default Select;

function Menu(props: any) {
  const { renderMenu, ...rest } = props;
  return (
    <>
      <components.Menu {...rest}>
        <div className={s.dropdown}>
          {renderMenu ? renderMenu(rest) : props.children}
        </div>
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
        {renderOption ? renderOption(props) : <> {props.children}</>}
      </components.Option>
    </>
  );
};

function Control(props: any) {
  const {
    children,
    required,
    rootClassName,
    placeholder,
    icon,
    renderControl,
    hasValue,
    ...rest
  } = props;
  return (
    <components.Control className="w-full" {...props}>
      {renderControl ? (
        renderControl(props)
      ) : (
        <fieldset className={cn(s.fieldset, rootClassName)}>
          {children}
          <div className="absolute w-full h-full flex items-center">
            {placeholder && (
              <label
                tabIndex={-1}
                data-filled={`${hasValue}`}
                className={s.label}
              >
                {icon ? icon : <></>}
                <span>{placeholder}</span>
                {required ? <span>*</span> : <></>}
              </label>
            )}
          </div>
          {placeholder && (
            <legend
              id={"label"}
              tabIndex={-1}
              data-filled={`${hasValue}`}
              className={s.legend}
            >
              {icon ? icon : <></>}
              <span>{placeholder}</span>&nbsp;
              {required ? <span>*</span> : <></>}
            </legend>
          )}
        </fieldset>
      )}
    </components.Control>
  );
}

const customStyles = {
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: "100%",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  option: (provided: any, state: any) => ({
    ...provided,

    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "140%",
    letterSpacing: "0.0041em",
    borderRadius: "3px",
  }),
  input: () => ({
    position: "absolute",
    width: "100%",
    height: "3.5rem",
    top: 0,
    display: "flex",
    alignItems: "center",
    paddingLeft: 8,
  }),
  singleValue: () => ({
    width: "100%",
    height: "3.5rem",
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
