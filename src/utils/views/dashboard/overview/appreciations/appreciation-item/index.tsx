/**
 *Project:damirifa
 *File:condolences-item
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React, { useState } from "react";
import s from "./index.module.css";
import cn from "classnames";
import OptionsButtonTwo from "@components/OptionsButtonTwo";
import { Image } from "@components/ui/common";
import OptionsButton from "@components/OptionsButton";
import { Textfield, Button } from "@components/ui/dashboard";
import { useCSR } from "@components/navigator";
// import useState from "react";
import { ViewTree } from "../../../../../../components/navigator/constants";
import Badge from "@components/Badge";
import { BiExternalLink } from "@components/icons";
type Props = {
  className?: string;
  noImage?: boolean;
};

const AppreciationItem = (props: Props) => {
  const { className, noImage = false } = props;
  const [isReplying, setIsReplying] = useState(false);
  const [isReplied, setIsReplied] = useState(false);
  const navigator = useCSR();
  const handleIsReplying = () => {
    setIsReplying((r) => !r);
  };
  const handleReplied = () => {
    setIsReplied(true);
  };
  const ReplyView = () => {
    if (isReplied)
      return (
        <div className="flex-row flex  gap-4">
          <div className={s.nameIcon}>JB</div>
          <div className="grid grid-cols-1">
            <div className="flex flex-row items-center gap-[1.375rem]">
              <p className={s.nameAndTime}>
                {`${"Kerk Leo"}`}
                &nbsp;<span>&#183;</span> &nbsp;
                <b>{`${36} mins ago`}</b>
              </p>
              <OptionsButton dropdownClassName="!ml-0" />
            </div>
            <div className={s.message}>Thank you so much 😇</div>
          </div>
        </div>
      );
    if (isReplying)
      return (
        <div className={"flex flex-row gap-4"}>
          <div className={s.nameIcon}>JB</div>
          <div className="grid grid-cols-1">
            <Textfield className="!min-w-[383px]" placeholder="Your Reply" />
            <div className="flex flex-row items-center gap-3 mt-4 justify-end">
              <button
                onClick={() => {
                  handleIsReplying();
                }}
                className={s.replyButton}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleReplied();
                }}
                className={s.replyButton}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      );
    return (
      <div className="flex flex-row items-center gap-2">
        <div
          className={cn("flex flex-row items-center gap-8", s.sampleMessage)}
        >
          <div className={s.messageThumbnail}>Thanks Soo Much</div>
          <div className={s.messageThumbnail}></div>
        </div>
        <div
          className={cn("flex flex-row items-center gap-8", s.sampleMessage)}
        >
          <div className={s.messageThumbnail}>Thank you so much 😇</div>
          <div className={s.messageThumbnail}></div>
        </div>
      </div>
    );
  };
  return (
    <li className={cn(s.root, className)}>
      <div className="flex-row flex  gap-4 items-start">
        <div className={s.nameIcon}>JB</div>
        <div className="grid grid-cols-1">
          <div className="flex flex-row items-center gap-[1.375rem]">
            <p className={s.nameAndTime}>
              {`${"Kerk Leo"}`}
              &nbsp;<span>&#183;</span> &nbsp;
              <b>{`${36} mins ago`}</b>
            </p>
            <OptionsButton dropdownClassName="!ml-0" />
          </div>
          <div className={cn(s.message, { ["w-[236px]"]: !noImage })}>
            THello Dear Amma Nimo, Thank you so much for your kindness. We are
            very appreciative of your support! 😇
          </div>
        </div>
      </div>
      <div>
        {!noImage && (
          <div className="flex flex-row gap-[35px]">
            <Image
              src={"/constants/image-announcement.jpg"}
              alt={"announcement image"}
              className={s.image}
            />
            <div className="flex flex-col">
              <p className={s.heading}>Mariam Makiba</p>
              <Badge
                className={"font-[500] w-[61px] !text-[10px]"}
                bgColor={"#EDCFD0"}
                textColor={"#BA181B"}
              >
                obituary
              </Badge>
              <Button
                variant="icon"
                color="secondary"
                className="mt-auto !text-[#065FD4] !text-[10px] !px-0"
                onClick={() => navigator.setRoute(ViewTree.ALL_APPRECIATIONS)}
              >
                All Appreciations&nbsp;
                <BiExternalLink color={"#065FD4"} className={""} width={10} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};
export default AppreciationItem;
