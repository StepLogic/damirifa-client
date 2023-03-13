import React, {useState} from "react";
import {AiOutlineClose, AiOutlineSearch} from "react-icons/ai";

import s from "./index.module.css";
import cn from "classnames";
import {Button} from "@components/ui/common";

export type SearchBarProps = { className?: string };

function SearchBar(props: any) {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <aside
                data-expand={`${expand}`}
                className={cn("flex flex-row items-center px-3 w-full", s.root)}
            >
                <Button
                    icon
                    data-expand={`${expand}`}
                    className={cn("search-button mr-3", s.button, s.searchButton)}
                    onClick={() => {
                        setExpand(false);
                    }}
                >
                    <AiOutlineClose/>
                </Button>
                <input
                    data-expand={`${expand}`}
                    type="text"
                    placeholder="Who may we help you find?"
                    className={cn("mr-3 flex-auto", s.input)}
                />
                <Button
                    icon
                    data-expand={`${expand}`}
                    className={cn("search-button mr-2", s.button, s.searchButton)}
                >
                    <AiOutlineSearch/>
                </Button>
            </aside>

            <>
                <Button
                    icon
                    className={cn("mr-2 sm:mr-0 sm:ml-2 transition-all", s.searchButton, {
                        "opacity-0": expand,
                    })}
                    onClick={() => {
                        setExpand(true);
                    }}
                >
                    <AiOutlineSearch/>
                </Button>
            </>
        </>
    );
}

export default SearchBar;
