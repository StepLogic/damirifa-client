import React, { Suspense } from "react";
import { Divider, LoadingDots } from "@components/ui/common";
import dynamic from "next/dynamic";
import cn from "classnames";
import s from "./index.module.css";
import ErrorBoundary from "@lib/error-boundaries/component-boundary";
import {useLivingWaters} from "@root/src/utils/services/hooks/homepage";
import TextPlaceholder from "@common-ui/placeholder/Placeholder ";
import Placeholder from "@common-ui/placeholder/Placeholder ";


export type Props = { className?: string; src: string };

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => <LoadingDots />,
});
export default function LivingWaters({ className, src }: Props) {
  const { data, isLoading, isError } = useLivingWaters();
  // const data={}
  return (
    <section className={cn(className, s.root)}>
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className={"flex flex-col pt-3 pr-5 lg:w-2/4 ml-auto"}>
          <h1
            className={cn(
              "text-white mx-auto lg:mx-0 mb-2 mt-5",
              s.sectionHeading
            )}
          >
            Dawn
          </h1>
          <Divider className={"divider mr-auto ml-auto lg:ml-0"} />
          {isLoading ? (
            <>
              <TextPlaceholder
                className={"text-white h-4 text-center section-heading mx-auto"}
              />
              <Placeholder
                className={
                  "h-2 w-[12.375rem] mr-auto ml-auto mt-4 mb-16 w-30 lg:ml-0"
                }
              />
            </>
          ) : data && !Array.isArray(data) ? (
            <p
              className={cn(
                "mt-5 text-base text-center lg:text-left mx-auto lg:mr-auto lg:ml-0 leading-5 w-11/12 lg:w-8/12 mb-10 lg:mb-0",
                s.paragraph
              )}
            >
              {data?.message}
            </p>
          ) : (
            <p
              className={cn(
                "mt-5 text-base text-center lg:text-left mx-auto lg:mr-auto lg:ml-0 leading-5 w-11/12 lg:w-8/12 mb-10 lg:mb-0",
                s.paragraph
              )}
            >
              No motivation today. check in later
            </p>
          )}
        </div>
        <div className={"flex flex-col justify-center items-center "}>
          {isLoading ? (
            <>
              <Placeholder
                className={
                  "h-2 w-[12.375rem] mr-auto ml-auto mt-4 mb-16 w-30 lg:ml-0"
                }
              />
              <Placeholder
                className={
                  "h-2 w-[12.375rem] mr-auto ml-auto mt-4 mb-16 w-30 lg:ml-0"
                }
              />
            </>
          ) : (
            data &&
            !Array.isArray(data) && (
              <Suspense fallback={<></>}>
                {/*@ts-ignore*/}
                <ErrorBoundary>
                  <div className={cn(s.playerWrapper)}>
                    <ReactPlayer
                      light={true}
                      className="react-player"
                      url={`https://www.youtube.com/watch?v=${data.video_id}`}
                      width="100%"
                      height="100%"
                      // wrapper={(props: any) => <div className="">{...props}</div>}
                      controls={false}
                    />
                  </div>
                </ErrorBoundary>
              </Suspense>
            )
          )}
        </div>
      </div>
    </section>
  );
}
