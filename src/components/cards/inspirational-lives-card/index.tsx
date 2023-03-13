import {Divider, Image} from "@components/ui/common";

import cn from "classnames";
import s from "./index.module.css";

export type InspirationalLivesCardProps = { className?: string };

export default function InspirationalLivesCard({
                                                   className,
                                               }: InspirationalLivesCardProps) {
    return (
        <div className={cn(className, s.root)}>
            <Image
                src={"/constants/kwame-nkrumah.png"}
                loading="lazy"
                objectFit={"cover"}
                circle
                border
                width={178}
                height={178}
                alt="inspirational picture"
                quality={60}
                className={cn(s.imageWrapper)}
            />
            <span
                className={"text-center font-semibold text-xl mt-28 text-white mb-2"}
            >{`Miriam Makiba`}</span>
            <span
                className={"text-center text-grey-white"}
                style={{marginBottom: "20px"}}
            >
        {`${25}`}&nbsp;years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`(${1985}-${2021})`}
      </span>
            <Divider className={"divider-white-thin mb-3"}/>
            <p className={cn(s.p, "mb-4")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A ultricies
                quam ultrices eget amet, lacus, consectetur nulla. Ut ultricies platea
                pellentesque senectus.
            </p>
        </div>
    );
}
