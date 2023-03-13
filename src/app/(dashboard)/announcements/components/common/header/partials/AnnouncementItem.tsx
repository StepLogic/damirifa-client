import React from "react";
import s from "./index.module.css";
import {Image} from "@components/ui/common";

interface Props {
}

const AnnouncementItem: React.FC<Props> = (props) => {
    return (
        <div className={s.root}>
            <Image src={"/constants/image-announcement.jpg"} className={s.image}/>
            <div className="flex flex-col">
                <div role="text" className={s.title}>
                    Mariam Makiba
                </div>
                <div className="flex flex-row items-center gap-[0.4063rem]">
                    <div role="text" className={s.badge}>
                        Obituary
                    </div>
                    <div role="text" className={s.time}>
                        3 weeks
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementItem;
