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
type Props = {
  className?: string;
  noImage?: boolean;
};

const CondolencesItem = (props: Props) => {
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
      <div className="flex flex-row">
        <div className={s.nameIcon}>K</div>
        <div className="flex flex-col items-start ml-[0.75rem]">
          <p className={s.nameAndTime}>
            {`${"Kerk Leo"}`}
            &nbsp;<span>&#183;</span> &nbsp;
            <b>{`${36} mins ago`}</b>
          </p>
          <p className={s.email}>eolk@mail.com</p>
          <p className={s.message}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div
            className={cn("flex flex-row items-center gap-8 mb-5", s.replyBar)}
          >
            <button
              data-disabled={`${isReplying || isReplied}`}
              disabled={isReplying || isReplied}
              onClick={() => {
                handleIsReplying();
              }}
            >
              {isReplied ? "REPLIED" : "REPLY"}
            </button>
            <OptionsButton />
          </div>
          {ReplyView()}
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
                className={"font-[500] w-[64px] mt-2"}
                bgColor={"#EDCFD0"}
                textColor={"#BA181B"}
              >
                obituary
              </Badge>
              <Button
                label="All Condolences"
                variant="outline"
                color="secondary"
                className="mt-auto mb-2"
                onClick={() => navigator.setRoute(ViewTree.ALL_CONDOLENCES)}
              />
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default CondolencesItem;
