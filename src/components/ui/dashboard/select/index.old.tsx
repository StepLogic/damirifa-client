import React, {startTransition, useState,} from "react";
import {Button, Textfield} from "@components/ui/dashboard";

import {AiOutlineSearch} from "react-icons/ai";
import s from "./index.module.css";
import cn from "classnames";
import {v4 as uuid} from "uuid";
import Dropdown from "@components/ui/common/dropdown";

interface _Props {
    className?: string;
    options?: Array<string>;
    componentOptions?: Array<React.ReactNode>;
    onSearch?: Function;
    placeholder?: string;
    onChange?: Function;
    color?: string;
    variant?: "default" | "search";
    showDelete?: boolean;
    searchFieldPlaceholder?: string;
    x?: "left" | "left-half" | "right" | "right-half" | "center";
    onDelete?: Function;
    error?: boolean;
}

const Select: React.FC<_Props> = (props) => {
    const {
        className,
        options = ["test", "test", "test", "test", "test"],
        componentOptions,
        onSearch,
        placeholder,
        color = "secondary",
        variant = "search",
        onChange,
        error = false,
        onDelete,
        showDelete = true,
        searchFieldPlaceholder = "Search...",
        x = "center",
        ...rest
    } = props;
    // The forwardRef is important!!
    // Dropdown needs access to the DOM node in order to position the Menu
    const [value, setValue] = useState<string>("");
    const [searchQuery, setSearch] = useState<string>("");
    const updateValue = (v: any) => {
        startTransition(() => {
            setValue(v);
            onChange && onChange(v);
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
        <Dropdown
            className={cn(s.root, className)}
            show={open}
            toggle={() => setOpen(!open)}
        >
            <Dropdown.Toggle className={s.input}>
                {/* <Textfield
          placeholder={placeholder}
          variant={variant}
          color={"secondary"}
          {...rest}
          value={searchQuery}
          className={cn(s.input)}
          onChange={(event: any) => {
            setSearch(event.target.value);
          }}
          onFocus={() => {
            setOpen(true);
          }}
          onBlur={() => {
            setOpen(false);
          }}
        /> */}
                <Button
                    label={value === "" ? placeholder : value}
                    variant="outline"
                    color="secondary"
                    data-expand={`${open}`}
                    {...rest}
                    className={cn(s.input, {[s.error]: error})}
                />
            </Dropdown.Toggle>

            <Dropdown.Menu className={s.dropdown} x={x} size="lg" variant="default">
                {variant == "search" ? (
                    <div className={s.searchField}>
                        <AiOutlineSearch/>
                        <Textfield
                            variant="default"
                            placeholder={searchFieldPlaceholder}
                            className={s.textfield}
                        />
                    </div>
                ) : (
                    <></>
                )}

                {onSearch
                    ? componentOptions
                        ? componentOptions
                        : options.map((option: any) => (
                            <Dropdown.Item
                                key={uuid()}
                                onClick={() => {
                                    updateValue(option);
                                }}
                                className={s.item}
                            >
                                <span>{option}</span>
                            </Dropdown.Item>
                        ))
                    : componentOptions
                        ? componentOptions
                        : filterOptions().map((option: any) => (
                            <Dropdown.Item
                                key={uuid()}
                                onClick={() => {
                                    updateValue(option);
                                }}
                                className={s.item}
                            >
                                <span>{option}</span>
                            </Dropdown.Item>
                        ))}

                <div className={s.divider}/>
                {showDelete ? (
                    <Button
                        label={"Remove"}
                        variant={"default"}
                        className={cn(s.item, s.button)}
                    />
                ) : (
                    <></>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default Select;
