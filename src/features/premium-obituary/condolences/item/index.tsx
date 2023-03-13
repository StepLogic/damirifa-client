import {Image} from "@components/ui/common";
import cn from "classnames";
import i from "./index.module.css";

type Props = {
    src?: string;
};
const CondolencesItem = (props: Props) => {
    const {src} = props;
    const paragraph = `Lorem ipsum dolor sit amet, has vero libris melius ea, omnis velit
            comprehensam duo an, meis ornatus eam ad. Ius ut labores scaevola.`;
    return (
        <li className={cn(i.condolencesItem, "")}>
            <div className={"flex flex-col"}>
                <div className={cn(i.condolencesItemHeading, "relative")}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={i.icon}>
                        <text
                            kerning="auto"
                            fontFamily="Playfair Display"
                            fill="rgb(0, 0, 0)"
                            fontSize="160px"
                            x="0px"
                            y="118.063px"
                        >
                            <tspan
                                fontSize="160px"
                                fontFamily="Playfair Display"
                                fill="#e5e5e5"
                            >
                                “
                            </tspan>
                        </text>
                    </svg>
                    <div className={i.textbox}>
                        <h5 className={i.name}>
                            Solomon Ayeh &nbsp;<b className={i.relation}>(Friend)</b>
                        </h5>
                        <h6 className={i.relation}>Vice Chancellor</h6>
                    </div>
                    <span className={i.days}>3 days ago</span>
                </div>
                <div className="flex flex-row">
                    <p className="text-left">{paragraph.slice(0, 180)}...</p>
                    {typeof src !== "undefined" ? (
                        <Image
                            src="/constants/jerry-1.jpg"
                            className={cn(i.image, "my-auto rounded-sm")}
                            width={120}
                            height={100}
                            rounded
                            alt="icon"
                            loading="lazy"
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </li>
    );
};
export default CondolencesItem;
