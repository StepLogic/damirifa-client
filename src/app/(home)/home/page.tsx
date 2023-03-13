"use client";
import type { NextPage } from "next";
import { Button, Divider, LoadingDots } from "@common-ui/index";
import { MetaTags } from "@lib/Utils";
import LifeBlogCards from "@components/cards/landing-page-cards/life-blog-card";
import StepsToPost from "@root/src/app/(home)/home/steps-to-post";
import {
  InspirationalLives,
  LivingWaters,
  SpecialAnnouncement,
} from "@features/landing-page";

import Obituary from "@features/landing-page/ObituarySection";
import SocialMediaBar from "@features/common/socal-media-bar";
import PackageCard from "@components/cards/landing-page-cards/package-card";
import HeroSection from "./components/HeroSection";
import FeatureAnnouncements from "./components/FeatureAnnouncementsSection";
import DeathNotices from "./components/DeathNoticesSection";

const Home: NextPage = () => {
  return (
    <>
      <div className={"debug-cs"}>
        <MetaTags title={"Home"} />
        <HeroSection />

        {/* </div> */}
        <StepsToPost />
        <div className={"debug-cs flex flex-col relative"}>
          {/* <div className="relative"> */}
          <div className="sticky z-[998] !h-0 top-0 left-0">
            <SocialMediaBar />
          </div>
          <SpecialAnnouncement />
          <FeatureAnnouncements />

          <DeathNotices />

          <Obituary />

          <section className={"bg-black pt-10 pb-10"}>
            <div className={"flex flex-col"}>
              <h2
                className={
                  "text-white text-center mb-4 section-heading 2xl:mb-4"
                }
              >
                Free Notices
              </h2>
              <Divider className={"divider mx-auto mb-4"} />
              <div
                className={
                  "flex flex-col xl:flex-row justify-center gap-12 items-center mt-5 pt-4 px-5"
                }
              >
                <PackageCard label="Death Notice" className={"mb-5 xl:mb-0"} />
                <PackageCard label={"One Week"} className={"mb-5 xl:mb-0"} />
              </div>
            </div>
          </section>

          {/*Daily Devotional*/}
          <section className={"daily-devotional"}>
            <LivingWaters src={"#"} />
          </section>
          {/*Life Blog*/}
          <section className={"bg-black pt-10 pb-5"}>
            <div className={"flex flex-col"}>
              <h1
                className={
                  "text-white section-heading text-center mt-5 mb-4 2xl:my-4"
                }
              >
                Life
              </h1>
              <Divider className={"divider mx-auto w-2/3-px mb-4"} />
              <div
                className={
                  "flex flex-col xl:flex-row justify-center items-center mt-5 pt-4 gap-12 mb-5 pb-3 px-5"
                }
              >
                <LifeBlogCards className={"mb-5 xl:mb-0"} />
                <LifeBlogCards className={"mb-5 xl:mb-0"} />
                <LifeBlogCards className={"mb-5 xl:mb-0"} />
              </div>
              <Button
                size="md"
                pill
                variant="primary"
                className={"mt-2 mb-10 mx-auto"}
                outline
                label={"View all blogs"}
              />
            </div>
          </section>
          {/*Inspirational Lives*/}
          <section className={"inspirational-lives-section"}>
            <InspirationalLives paragraph={""} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
