import React from "react";
import { Button, Image } from "@components/ui/common";
import s from "./index.module.css";
import cn from "classnames";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FormPreviewPlaceholder } from "@lib/Constants";

type Props = {
  onCondolencesClick?: Function;
  data: any;
};
const ObituaryPremium = (props: Props) => {
  const { onCondolencesClick, data } = props;
  const getYearOfDate = (date: string) => {
    return date.split("/").at(-1);
  };
  return (
    <div className={s.root}>
      <Image
        src={data?.image ? data?.image : FormPreviewPlaceholder.image}
        alt="banner picture"
        className={s.image}
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <div id="main-hero" className={s.textBody}>
        <div className={"container"}>
          <div className="xl:w-7/12 mr-auto lg:ml-10">
            <h1
              className={
                "lg:text-5xl text-3xl  text-white font-semibold lg:w-9/10"
              }
            >
              {`${
                data?.prefix
              } ${`${data?.prefix} ${data?.first_name} ${data?.last_name} ${data?.suffix}`} "${
                data?.alias
              }"`}
            </h1>
            <h4
              className={
                "lg:text-2xl md:text-xl text-lg  text-white font-semibold  "
              }
            >
              {`${data?.notable_position}`}
            </h4>
            <h4
              className={
                "lg:text-2xl  md:text-xl text-lg  my-2 text-white font-semibold  "
              }
            >
              {`${getYearOfDate(
                data?.date_of_birth
                  ? data?.date_of_birth
                  : FormPreviewPlaceholder.dateOfBirth
              )} - ${getYearOfDate(
                data?.date_of_death
                  ? data?.date_of_death
                  : FormPreviewPlaceholder.dateOfDeath
              )}`}
            </h4>
            <h2 className="lg:text-2xl  md:text-xl text-xl my-6 text-grey-white-2">
              {data?.quote ? data.quote : FormPreviewPlaceholder.quote}
            </h2>

            <div className="flex flex-row gap-2 xl:gap-10">
              <Button
                pill
                size="sm"
                variant="primary"
                className={cn("flex-1", s.button)}
              >
                <AiOutlineShareAlt className="mr-3" />
                <span> Share</span>
              </Button>
              <Button
                pill
                size="md"
                variant="primary"
                className={cn("flex-1", s.condolenscencesButton)}
                label="Send Condolence"
                onClick={() => {
                  onCondolencesClick && onCondolencesClick();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObituaryPremium;
