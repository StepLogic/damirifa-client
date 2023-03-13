import React from "react";
import { Button, Divider } from "@components/ui/common";
import cn from "classnames";
import s from "./index.module.css";
import Link from "next/link";
import ImagePlaceholder from "@common-ui/placeholder/ImagePlaceholder";
import TextPlaceholder from "@common-ui/placeholder/Placeholder ";
import Placeholder from "@common-ui/placeholder/Placeholder ";
import {useSpecialAnnouncement} from "@root/src/utils/services/hooks/homepage";


interface Props {
  className?: string;
}

export default function SpecialAnnouncement(props: Props) {
  const { className } = props;
  const { special, isLoading, isError } = useSpecialAnnouncement();

  return (
    <div className={cn(className, s.root)}>
      <div className="container mx-auto px-3 lg:px-0">
        <div
          className={
            "flex flex-col items-center jusitify-center lg:grid grid-cols-2 gap-6"
          }
        >
          <div
            className={"flex flex-col justify-center xl:items-end items-center"}
          >
            <div className="block lg:hidden">
              {isLoading || isError ? (
                <>
                  <TextPlaceholder
                    className={
                      "text-white h-4 text-center section-heading mx-auto"
                    }
                  />
                  <Placeholder
                    className={
                      "h-2 w-[12.375rem] mr-auto ml-auto mt-4 mb-16 w-30 lg:ml-0"
                    }
                  />
                </>
              ) : (
                <>
                  <h1
                    className={"text-white text-center section-heading mx-auto"}
                  >
                    Special Announcement
                  </h1>
                  <Divider
                    className={
                      "divider mr-auto ml-auto mt-4 mb-16 w-30 lg:ml-0"
                    }
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex lg:mr-4 w-full flex-col md:w-9/12">
            <div className="hidden lg:flex flex-col justify-start">
              {isLoading || isError ? (
                <>
                  <TextPlaceholder
                    className={
                      "text-white  h-24 text-center lg:text-left  mt-5 mt-lg-0 fs-1 mb-2 lg:mx-0 mx-auto section-heading"
                    }
                  />
                  <Placeholder className={"w-1/4 h-4 mx-auto lg:ml-0 mb-8"} />
                </>
              ) : (
                <>
                  <h2
                    className={
                      "text-white text-center lg:text-left  mt-5 mt-lg-0 fs-1 mb-2 lg:mx-0 mx-auto section-heading"
                    }
                  >
                    Special <br className="hidden lg:block" /> Announcement
                  </h2>
                  <Divider
                    variant="primary"
                    height="thick"
                    className={"w-1/4 mx-auto lg:ml-0 mb-8"}
                  />
                </>
              )}
            </div>
            {isLoading || isError ? (
              <>
                <TextPlaceholder
                  className={
                    "self-center flex w-full lg:self-left h-8 mt-3 lg:mt-3 mb-2"
                  }
                />
                <TextPlaceholder
                  className={
                    "self-center flex w-full lg:self-left h-5 mt-3 lg:mt-3 mb-2"
                  }
                />
                <TextPlaceholder
                  className={
                    "w-full h-20 mt-3 lg:flex px-0  mx-auto lg:mx-0 mb-6"
                  }
                />
                <Placeholder
                  className={
                    "mt-4 h-[2.8125rem]  rounded-[100rem] w-[12.5rem] lg:mx-0 mx-auto"
                  }
                />
              </>
            ) : special && !Array.isArray(special.data) ? (
              <>
                <h3
                  className={
                    "text-white text-center lg:text-left text-3xl mt-3 lg:mt-3 mb-2"
                  }
                >
                  {special.data.name}
                </h3>
                <h4
                  className={
                    "text-grey-white-2  text-center text-lg lg:text-left"
                  }
                >
                  {`${special.data.age} years`}&nbsp;&nbsp;
                  {`(${special.data.date_of_birth} - ${special.data.date_of_death})`}
                </h4>
                <p
                  className={
                    "mt-3 text-grey-white px-0 w-75 lg:w-100 lg:w-11/12 mx-auto lg:mx-0 mb-6"
                  }
                >
                  {special.data.description}
                </p>
                {special.data.button_link !== "" && (
                  <Link href={special.data.button_link}>
                    <Button
                      variant="primary"
                      outline
                      pill
                      size="md"
                      className={"mt-4 lg:mx-0 mx-auto"}
                      label={special.data.button_text}
                    />
                  </Link>
                )}
              </>
            ) : (
              <h5
                className={
                  "text-white text-center lg:text-left text-1xl mt-3 lg:mt-3 mb-2"
                }
              >
                No special announcement available
              </h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
