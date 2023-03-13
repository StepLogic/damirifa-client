import {Divider, Image} from "@components/ui/common";
import cn from "classnames";
import s from "./index.module.css";
import {FeaturedAnnouncements} from "@lib/interface/homepage/featured";
import {isValueUndefined} from "@lib/Utils";
import ImagePlaceholder from "@common-ui/placeholder/ImagePlaceholder";
import TextPlaceholder from "@common-ui/placeholder/Placeholder ";
import Placeholder from "@common-ui/placeholder/Placeholder ";

interface Props {
    className?: string;
    isPlaceholder?: boolean;
    data?: FeaturedAnnouncements;
}

export default function FeaturedAnnouncementCard(props: Props) {
    const {className, data, isPlaceholder = false} = props;
    console.log("feature.card", data);
    return (
        <article
            className={cn(className, s.root, {["animate-pulse"]: isPlaceholder})}
        >
            {isValueUndefined(data) || isPlaceholder ? (
                <>
                    <ImagePlaceholder className={s.imageWrapper}/>
                </>
            ) : (
                <Image
                    loading="lazy"
                    src={data?.image.path || ""}
                    alt={data?.name || ""}
                    objectFit="cover"
                    className={s.imageWrapper}
                    quality={60}
                />
            )}
            {isValueUndefined(data) || isPlaceholder ? (
                <>
                    <TextPlaceholder className="mt-3 w-[8.125rem] self-center h-[1.5625rem] mb-[5px]"/>
                </>
            ) : (
                <span
                    className={
                        "text-center text-xl font-semibold text-white mt-3 mb-[5px]"
                    }
                >
          {data?.name}
        </span>
            )}
            {isValueUndefined(data) || isPlaceholder ? (
                <>
                    <TextPlaceholder className="mt-3 w-[8.5rem] self-center h-[1.1875rem] mb-[5px]"/>
                    <TextPlaceholder className="w-[15.3125rem] self-center h-[0.0625rem] mb-6"/>
                </>
            ) : (
                <>
          <span className={"text-center text-grey-white mb-[20px]"}>
            {`${data?.age}`}&nbsp;years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`(${data?.date_of_birth}-${data?.date_of_death})`}
          </span>
                    <Divider className={"divider-white-thin mb-6"}/>
                </>
            )}

            {isValueUndefined(data) || isPlaceholder ? (
                <>
                    <div className={s.textBox}>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                    </div>
                </>
            ) : (
                <div className={s.textBox}>
          <span className="text-size-md fw-bold text-grey-white-2">
            Funeral Date:
          </span>

                    <span className="text-size-md  fw-bold text-grey-white">
            {data?.funeral_date}
          </span>
                    <h6 className="text-size-md  fw-bold text-grey-white-2">Location:</h6>
                    <h6 className="text-size-md fw-bold  text-grey-white">
                        {data?.location}
                    </h6>
                    <h6 className="text-size-md  fw-bold text-grey-white-2">Time:</h6>
                    <h6 className="text-size-md fw-bold  text-grey-white">
                        {data?.link}
                    </h6>
                </div>
            )}
        </article>
    );
}
