import React from "react";

import FeaturedAnnouncementCard from "@components/cards/landing-page-cards/featured-announcement-card";
import {Divider} from "@components/ui/common";
import {FeaturedAnnouncements} from "@lib/interface/homepage/featured";
import {v4 as uuidv4} from "uuid";
import {useFeaturedAnnouncement} from "@root/src/utils/services/hooks/homepage";

interface Props {
}

const FeatureAnnouncements: React.FC<Props> = (props) => {
    const {isLoading, featured, isError} = useFeaturedAnnouncement();

    return (
        <section className={"bg-black pt-10 px-4 h-auto sm:px-0"}>
            <h1
                className={
                    "text-center fs-1 text-white mt-10 mb-4 2xl:mb-4 section-heading"
                }
            >
                Featured Announcements
            </h1>
            <Divider className={"divider mx-auto mb-16"}/>
            <div
                className={
                    "flex flex-col xl:flex-row justify-center items-center lg:gap-18 2xl:gap-20 pb-20"
                }
            >
                {isLoading
                    ? [1, 2, 3].map(() => (
                        <>
                            <FeaturedAnnouncementCard
                                key={uuidv4()}
                                isPlaceholder={true}
                                className={"mb-5 xl:mb-0  mx-0 md:mx-4 lg:mx-5"}
                            />
                        </>
                    ))
                    : featured?.data.length > 0 &&
                    featured?.data.map((feature: FeaturedAnnouncements) => (
                        <FeaturedAnnouncementCard
                            key={feature.id}
                            data={feature}
                            isPlaceholder={false}
                            className={"mb-5 xl:mb-0  mx-0 md:mx-4 lg:mx-5"}
                        />
                    ))}
                {!isError && featured?.data && featured.data.length === 0 && <h5
                    className={
                        "text-white text-center lg:text-left text-1xl mt-3 lg:mt-3 mb-2"
                    }
                >
                    No featured Announcements
                </h5>}
            </div>
        </section>
    );
};
export default FeatureAnnouncements;
