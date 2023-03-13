import {useEffect, useMemo, useRef, useState} from "react";
import cn from "classnames";
import {LinksProp, NavBarLinks as Links, SubMenu} from "@lib/NavConstants";
import {FaUserCircle} from "react-icons/fa";
import {AiOutlineCaretDown, AiOutlineClose} from "react-icons/ai";
import {v4 as uuidv4} from "uuid";
import {IoMdShare} from "react-icons/io";
import {VscThreeBars} from "react-icons/vsc";
import {Button, ClickOutside, Collapse, Link, Scrollbar,} from "@common-ui/index";
import s from "./index.module.css";

export type MobileMenuProps = { className?: string };

function MoreMenu(props: any) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Collapse isOpen={open}>
                <ul className="w-full bg-slate-50">{props.subMenuMemo}</ul>
            </Collapse>
            <button
                className={cn("pl-3", s.item, s.moreButton)}
                aria-role="toggle"
                onClick={() => {
                    if (props.menuRef.current !== null) {
                        if (open) {
                            props.menuRef.current.scrollTop = 0;
                        } else {
                            props.menuRef.current.scrollBottom = 0;
                        }
                    }
                    setOpen(!open);
                }}
            >
                {open ? (
                    <>
                        <span>Less</span>
                    </>
                ) : (
                    <>
                        <span>More</span>
                    </>
                )}
                <AiOutlineCaretDown className="ml-2" data-expand={`${open}`}/>
            </button>
        </>
    );
}

export default function MobileMenu({className}: MobileMenuProps) {
    const menuRef = useRef(null);
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
    useEffect(() => {
        if (contentRef.current != null && open) {
            contentRef.current?.focus();
        }
    }, []);
    const linksMemo = useMemo(() => {
        return Links.map((link: LinksProp, index: number) => (
            <div
                onClick={() => {
                    setOpen(false);
                }}
                className={cn(s.item, "flex-col flex justify-center")}
                key={uuidv4()}
            >
                <Link href={link.href}>
                    <a className={"text-start  text-capitalize text-black my-2 pl-3"}>
                        {link.name}
                    </a>
                </Link>
            </div>
        ));
    }, [Links]);

    const subMenuMemo = useMemo(() => {
        return SubMenu.map((menu: LinksProp, index: number) => (
            <li className={s.item} key={uuidv4()}>
                <Link
                    href={menu.href}
                    className="flex flex-row items-center"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    {menu.name === "Share" ? (
                        <IoMdShare className=" ml-5 mr-2 text-damirifa-red"/>
                    ) : null}
                    <a className={"text-start text-black my-2 pl-5"}>{menu.name}</a>
                </Link>
            </li>
        ));
    }, []);

    return (
        <ClickOutside
            active={open}
            onClick={() => {
                setOpen(false);
            }}
        >
            <div>
                <Button
                    onClick={() => {
                        setOpen(!open);
                    }}
                    icon
                >
                    <VscThreeBars className="text-white" style={{fontSize: "2.2rem"}}/>
                </Button>

                {open ? (
                    <aside className={cn(s.root, {[s.open]: open})}>
                        <Scrollbar
                            containerRef={(e) => {
                                menuRef.current = e;
                            }}
                            options={{suppressScrollX: true, wheelPropagation: false}}
                        >
                            <div className={s.content} ref={contentRef}>
                                <div
                                    className={cn(
                                        "flex flex-row items-center justify-end pl-auto pr-10",
                                        s.item
                                    )}
                                >
                                    <AiOutlineClose onClick={() => setOpen(!open)}/>
                                </div>
                                <div
                                    className={cn(
                                        "flex flex-row items-center justify-start pl-3",
                                        s.item
                                    )}
                                >
                                    <FaUserCircle className="text-damirifa-red ml-3 mr-2"/>
                                    <Link
                                        onClick={() => setOpen(false)}
                                        href="/src/app/login"
                                        passHref
                                        className={"font-semibold"}
                                    >
                                        Log In
                                    </Link>
                                </div>
                                <div
                                    className={cn(
                                        "bg-primary flex-col flex justify-center",
                                        s.getStarted,
                                        s.item
                                    )}
                                >
                                    <Link
                                        href="/src/app/login"
                                        variant="primary"
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "ml-3 font-semibold my-auto text-white align-middle"
                                        )}
                                    >
                                        Get Started
                                    </Link>
                                </div>
                                {/* <div className={cn("flex-col flex justify-center", s.item)}>
                  <Link
                    href="/register"
                    variant="secondary"
                    className={cn("ml-3 font-semibold my-auto  align-middle")}
                  >
                    Register
                  </Link>
                </div> */}
                                {linksMemo}
                                <MoreMenu menuRef={menuRef} subMenuMemo={subMenuMemo}/>
                            </div>
                        </Scrollbar>
                    </aside>
                ) : (
                    <></>
                )}
            </div>
        </ClickOutside>
    );
}
