import {Button, Link} from "@common-ui/index";
import {footer} from "@lib/Constants";
import {FooterLinks, LinksProp, NavBarLinks as Links,} from "@lib/NavConstants";
import cn from "classnames";
import {HiOutlineMail, HiOutlinePhone} from "react-icons/hi";
import {RiWhatsappLine} from "react-icons/ri";

import s from "./index.module.css";

export type Props = {};

export default function Footer({}: Props) {
    const alternateFooterStyle = false;

    return (
        <footer className="relative z-[999]">
            <div className={"justify-center self-center flex flex-col"}>
                {alternateFooterStyle ? (
                    <></>
                ) : (
                    <>
                        <div className={cn("hidden md:flex ", s.footerTopBar)}>
                            <div
                                className={cn(
                                    "hidden md:flex md:flex-row my-auto flex-col items-center  container mx-auto"
                                )}
                            >
                                <div className="flex md:flex-row flex-col items-center">
                                    {Links.map((link: any, i: number) => (
                                        <Link
                                            href={link.href}
                                            key={i + link}
                                            variant="primary"
                                            className={cn(
                                                "text-white text-capitalize my-3 lg:text-xl text-sm mr-6",
                                                s.link
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="ml-auto flex flex-row items-center">
                                    <Link
                                        href={"/login"}
                                        className={
                                            "text-white lg:text-xl text-sm  lg:my-0 my-3 md:ms-auto mr-6"
                                        }
                                        variant="primary"
                                    >
                                        Log&nbsp;in
                                    </Link>
                                    <Button
                                        className={cn("my-lg-0 my-3 text-h-md-30px", s.button)}
                                        variant="secondary"
                                        size="md"
                                        pill
                                        label="Get Started"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <div className=" bg-black">
                    <div className="container mx-auto">
                        <div
                            className={cn(
                                "w-full px-0 grid  xl:grid-cols-12 xl:gap-10 grid-cols-1",
                                s.row
                            )}
                        >
                            <div className={"p-0  col-span-4"}>
                                <div className={"flex flex-row flex-wrap items-center"}>
                                    <svg height={71} width={262} className={"mb-3"}>
                                        <image height={71} width={262} xlinkHref={"/logo.svg"}/>
                                    </svg>
                                </div>
                                <p className={s.p}>{footer}</p>
                            </div>
                            <div className={"lg:col-span-2 col-span-3"}>
                                <div className={"flex flex-col justify-start pb-4 col-span-1"}>
                                    <h2 className={s.heading}>Links</h2>
                                    {FooterLinks.map((link: LinksProp, index) => (
                                        <Link
                                            key={link.name + " " + index}
                                            href={link.href}
                                            variant="primary"
                                            className={s.link}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className={" lg:col-span-3 col-span-3"}>
                                <div className={"flex flex-col justify-start pb-5"}>
                                    <h2 className={s.heading}>Contact Us</h2>
                                    <div className={s.contactInformation}>
                                        <HiOutlineMail/>
                                        <span className={"text-lowercase"}>
                      damirifa@xenesi.com
                    </span>
                                    </div>
                                    <div className={s.contactInformation}>
                                        <HiOutlinePhone/>
                                        <span>+233 550 435 456</span>
                                    </div>
                                    <div className={s.contactInformation}>
                                        <RiWhatsappLine/>
                                        <span>+233 550 435 456</span>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-span-3 flex flex-col  pb-5"}>
                                <h2 className={s.heading}>Connect with us</h2>
                                <div className={"flex flex-row items-center "}>
                                    <a href={"#"} rel={"noreferrer"} target={"_blank"}>
                                        <Button icon className={"mr-2"}>
                                            <svg height={35} width={35} className={"mb-3"}>
                                                <image
                                                    height={35}
                                                    width={30}
                                                    xlinkHref={"/svgs/facebook.svg"}
                                                />
                                            </svg>
                                        </Button>
                                    </a>
                                    <a href={"#"} rel={"noreferrer"} target={"_blank"}>
                                        <Button icon className={"mr-2"}>
                                            <svg height={35} width={35} className={"mb-3"}>
                                                <image
                                                    height={35}
                                                    width={35}
                                                    xlinkHref={"/svgs/twitter.svg"}
                                                />
                                            </svg>
                                        </Button>
                                    </a>
                                    <a href={"#"} rel={"noreferrer"} target={"_blank"}>
                                        <Button icon className={"mr-2"}>
                                            <svg height={35} width={35} className={"mb-3"}>
                                                <image
                                                    height={35}
                                                    width={35}
                                                    xlinkHref={"/svgs/instagram.svg"}
                                                />
                                            </svg>
                                        </Button>
                                    </a>
                                    <a href={"#"} rel={"noreferrer"} target={"_blank"}>
                                        <Button icon className={"mr-2"}>
                                            <svg
                                                width="35"
                                                height="35"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={"mb-3 text-damirifa-red"}
                                            >
                                                <image
                                                    width="35"
                                                    height="35"
                                                    xlinkHref={"/svgs/youtube.svg"}
                                                />
                                            </svg>
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-center bg-black text-grey-white">
                    &copy;&nbsp;2022&nbsp;Xenesi&nbsp;Company&nbsp;Ltd.&nbsp;
                </div>
            </div>
        </footer>
    );
}
