import React from "react";
import s from "./index.module.css";
import cn from "classnames";
import {LineSvg, LineSvg2, LineSvg3} from "@components/icons";
import {Divider} from "@components/ui/common";

interface Props {
}

const StepsToPost: React.FC = (props: Props) => {
    return (
        <section className="bg-black pt-[84px]  ">
            <h1
                className={
                    "text-center fs-1 w-full text-white mb-4 2xl:mb-4 section-heading capitalize"
                }
            >
                Post Your Announcement
                <br/> in 3 simple steps
            </h1>
            <Divider className={"divider mx-auto mb-6"}/>
            <ol className={cn(s.root, "")}>
                <li className={s.item}>
                    <div className={s.StepAndLine}>
                        <span className={s.bubble}>1</span>
                        <LineSvg
                            classNameLG={cn(s.lineMobileSvg, "flex  lg:hidden ml-3")}
                            classNameSM={cn(
                                s.lineSvg,
                                "hidden  lg:flex mx-auto lg:-mt-4 mb-auto lg:ml-2"
                            )}
                        />
                    </div>
                    <div className={s.text}>
                        <h3 className={s.heading}>Populate</h3>
                        <p className={s.paragraph}>
                            Enter information in simple forms. Create a funeral fund. Your
                            announcement never expires.
                        </p>
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.StepAndLine}>
                        <span className={s.bubble}>2</span>
                        <LineSvg2
                            classNameLG={cn(s.lineMobileSvg, "flex  lg:hidden mr-3")}
                            classNameSM={cn(s.lineSvg, "hidden  lg:flex  lg:mt-8 lg:ml-2")}
                        />
                    </div>
                    <div className={s.text}>
                        <h3 className={s.heading}>Preview</h3>
                        <p className={s.paragraph}>
                            View changes as they are made. Make as many changes as needed. No
                            advanced IT skills needed.
                        </p>
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.StepAndLine}>
                        <span className={s.bubble}>3</span>
                        <LineSvg3
                            classNameLG={cn(
                                s.lineSvg,
                                "hidden  lg:block mx-auto lg:mx-0 lg:mb-auto"
                            )}
                        />
                    </div>
                    <div className={s.text}>
                        <h3 className={s.heading}>Post</h3>
                        <p className={s.paragraph}>
                            Publish your announcement online. Bring friends and family across
                            Ghana and the globe together.
                        </p>
                    </div>
                </li>
            </ol>
        </section>
    );
};

export default StepsToPost;
