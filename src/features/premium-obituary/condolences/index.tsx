/**
 * It renders a list of condolensces and a form to add a new condolensce
 * @returns A function
 */
import {CondolenscesMini as CondolencesMini} from "@components/carousel";
import React from "react";
import s from "./index.module.css";
import cn from "classnames";
import CondolencesForm from "@components/forms/condolences";
import CondolencesItem from "./item";
import {Button} from "@components/ui/common";

interface Props {
    className?: string;
    // ref?: React.RefObject<HTMLDivElement>;
}

const Condolences: React.FC<Props> = (props) => {
    const {className} = props;
    return (
        <div className={cn("flex flex-col", s.root, className)}>
            <div className="grid xl:grid-cols-2  p-5 grid-cols-1 gap-x-12">
                <div className={cn("flex flex-col")}>
                    <CondolencesMini/>
                    <h2 className="mt-8 mb-2 text-2xl">Condolences</h2>
                    <div className="relative">
                        <div className={s.list}>
                            <ul className="flex flex-col gap-10 px-3">
                                <CondolencesItem src={""}/>
                                <CondolencesItem/>
                                <CondolencesItem src={""}/>
                                <CondolencesItem/>
                                <CondolencesItem src={""}/>
                            </ul>
                            {/* <div className={s.fadedBottom} /> */}
                        </div>
                    </div>
                    <Button
                        pill
                        outline
                        size="md"
                        variant="primary"
                        className={cn(s.condolenscencesButton, "mx-auto mt-8 mb-8 xl:mb-0")}
                        label="View All"
                    />
                </div>
                <div>
                    <CondolencesForm/>
                </div>
            </div>
        </div>
    );
};

export default Condolences;
