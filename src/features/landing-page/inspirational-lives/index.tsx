import React from "react";
import {Divider} from "@components/ui/common";
import InspirationalLivesCard from "@components/cards/inspirational-lives-card";
import s from "./index.module.css";
import cn from "classnames";

type Props = { className?: string; paragraph: string };
// const Container = styled.div.attrs((props) => ({
//   className: props.className,
// }))`

//   //& .button-text{
//   //  font-size: ;
//   //}
// `
export default function InspirationalLives({className}: Props) {
    return (
        <div className={s.background}>
            <div className={className}>
                <div className="container mx-auto">
                    <div
                        className={
                            "w-full md:px-5 lg:px-5 xl:grid xl:grid-cols-3 xl:gap-20 2xl:gap-32"
                        }
                    >
                        <div
                            className={
                                "flex flex-col items-start lg:col-span-1 md:col-span-3 pt-5 px-4 lg:px-0"
                            }
                        >
                            <h2
                                className={cn(
                                    "text-white lg:mx-0 mx-auto fs-2  section-heading mt-10 mb-4",
                                    s.sectionHeading
                                )}
                            >
                                Inspirational Lives
                            </h2>
                            <Divider className={"divider mr-auto ml-auto lg:ml-0 mb-10"}/>
                            <p className={cn("mt-3 mx-auto  lg:mx-0", s.highlightText)}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, vel
                                volutpat dictumst dapibus. Molestie ullamcorper neque, neque,
                                praesent facilisis gravida. Pellentesque mollis commodo tellus
                                egestas a, nisi. Pretium vestibulum scelerisque ut eget faucibus
                                vitae vitae vestibulum. Imperdiet lobortis nulla eget viverra.
                                Egestas penatibus auctor et, morbi volutpat, pharetra. Risus
                                risus diam blandit blandit ac enim metus quis. Habitant pharetra
                                ac neque neque tellus vulputate mauris quisque eu.
                            </p>
                        </div>
                        <div className="col-span-2">
                            <div
                                className={cn(
                                    "xl:grid xl:grid-cols-2 xl:col-span-3 xl:gap-8 flex flex-col items-center mt-5",
                                    s.xl
                                )}
                            >
                                <InspirationalLivesCard className={"mb-4 lg:mb-0"}/>
                                <InspirationalLivesCard className={"mb-4 lg:mb-0"}/>
                                <InspirationalLivesCard className={"mb-4 lg:mb-0"}/>
                                <InspirationalLivesCard className={"mb-4 lg:mb-0"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
