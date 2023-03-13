import React, {startTransition, useState,} from "react";
import TextField, {TextFieldProps} from "../textfield";
import Dropdown from "../dropdown";
import {AiFillCaretDown} from "react-icons/ai";
import s from "./index.module.css";
import cn from "classnames";
import {v4 as uuid} from "uuid";

interface _Props extends TextFieldProps {
    className?: string;
    options: Array<string>;
    placeholder?: string;
}

const Select: React.FC<_Props> = (props) => {
    const {className, options, placeholder, variant, ...rest} = props;
    // The forwardRef is important!!
    // Dropdown needs access to the DOM node in order to position the Menu
    const [value, setValue] = useState<string>();
    const [searchQuery, setSearch] = useState<string>("");
    const updateValue = (v: any) => {
        startTransition(() => {
            setValue(v);
            setOpen(false);
        });
    };
    const [open, setOpen] = useState(false);
    const filterOptions = () => {
        let results = options.filter((item: string) =>
            item.toLowerCase().includes(searchQuery.toLowerCase())
        );
        // console.log('Results', results, 'Search Query', searchQuery)
        return results;
    };
    return (
        <Dropdown show={searchQuery !== "" || open} toggle={() => {
        }}>
            <Dropdown.Toggle>
                <div
                    className={cn(
                        "flex flex-row items-center w-full px-4",
                        className,
                        s.field,
                        {
                            [s.secondary]: variant === "secondary",
                        }
                    )}
                    onFocus={() => {
                        setOpen(true);
                    }}
                    onBlur={() => {
                        setOpen(false);
                    }}
                >
                    <TextField
                        placeholder={placeholder}
                        variant={variant}
                        {...rest}
                        value={searchQuery}
                        className={cn(s.input)}
                        onChange={(event: any) => {
                            setSearch(event.target.value);
                        }}
                    />
                    <AiFillCaretDown
                        data-rotate={`${searchQuery !== "" || open}`}
                        className={cn(s.icon)}
                        onClick={() => {
                            setOpen((prev) => !prev);
                        }}
                    />
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className={s.dropdown} size="lg" variant="search">
                {filterOptions().map((option: any, index: number) => (
                    <Dropdown.Item
                        key={uuid()}
                        onClick={() => {
                            updateValue(option);
                        }}
                        className="flex flex-row items-center hover:cursor-pointer"
                    >
                        <span>{option}</span>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default Select;
