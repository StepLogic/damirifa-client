import React from "react";
import cn from "classnames";
import s from "./index.module.css";
import {Button, Image} from "@components/ui/common";
import Qoute2 from "@root/public/svgs/quote-2.svg";
import TributeItem from "./item";

interface TributesProps {
    className?: string;
}

const Tributes: React.FC<TributesProps> = (props) => {
    const {className} = props;
    return (
        <div className={cn("grid lg:grid-cols-2 grid-cols-1", s.root, className)}>
            <div className={cn("", s.tribute)}>
                <h3 className={s.heading}>Tribute by</h3>
                <div className={s.headingBlock}>
                    <Image
                        className={s.image}
                        circle
                        src="/constants/konadu-rr.webp"
                        alt={"icon"}
                        objectFit={"cover"}
                        objectPosition={"center"}
                        loading="lazy"
                    />
                    <div className="flex flex-col">
                        <h3 className={""}>{"Mrs. Agyemang Rawlings"}</h3>
                        <p>{"Widow"}</p>
                    </div>
                </div>
                <div className={s.p2}>
                    <Image
                        src={Qoute2}
                        width={40}
                        alt={"icon"}
                        height={40}
                        className={cn(s.icon, " left-0", s.zUp)}
                    />
                    <div>
                        <p className={s.paragraph}>{tributeParagraph} </p>
                    </div>
                </div>
            </div>
            <div className={cn(s.tributeList)}>
                <h2>Tributes</h2>
                <div className={cn("relative", s.list)}>
                    <ul className={cn("block pr-2", s.list)}>
                        <TributeItem/>
                        <TributeItem/>
                        <TributeItem/>
                        <TributeItem/>
                        <TributeItem/>
                        <TributeItem/>
                        <TributeItem/>
                    </ul>

                    <div className={s.fadedBottom}/>
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
        </div>
    );
};

export default Tributes;
const tributeParagraph = ` malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
vitae, ultricies eget, tempor Pellentesque habitant morbi
tristique senectus et netus et malesuada fames ac turpis egestas.
Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
ultricies mi vitae est. Mauris placerat eleifend leo. malesuada
fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
ultricies eget, tempor Pellentesque habitant morbi tristique
senectus et netus et malesuada fames ac turpis egestas. Vestibulum
tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
vitae est. Mauris placerat eleifend leo. malesuada fames ac turpis
egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
tempor Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
placerat eleifend leo. malesuada fames ac turpis egestas.
Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
placerat eleifend leo. malesuada fames ac turpis egestas.
Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
placerat eleifend leo. malesuada fames ac turpis egestas.
Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
placerat eleifend leo. malesuada fames ac turpis egestas.
Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
placerat eleifend leo. malesuada fames ac turpis egestas.
Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
placerat eleifend leo. malesuada fames ac turpis egestas.
Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
placerat eleifend leo.`;
