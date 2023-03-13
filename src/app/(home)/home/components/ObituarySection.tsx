import React from "react";
import RecentObituaryCard from "@components/cards/landing-page-cards/recent-obituary-card";
import {Slider} from "@components/carousel";
import {Button, Divider} from "@components/ui/common";
import {SplideSlide} from "@splidejs/react-splide";
import {v4 as uuidv4} from "uuid";
import {useRecentObituaries} from "@root/src/utils/services/hooks/homepage";
// import {useRecentObituaries} from "@root/src/services/hooks/homepage";

interface Props {
}

const Obituary: React.FC<Props> = (props) => {
    const {obituaries, isLoading, isError} = useRecentObituaries();
    return (
        <section className={"bg-black"}>
            <div className={"flex flex-col"}>
                <div
                    className="w-full  flex flex-col justify-center items-center"
                    style={{aspectRatio: "10/1.4"}}
                >
                    <h1
                        className={
                            "text-white section-heading mt-4 py-4 lg:py-0 text-center mb-1 2xl:my-4"
                        }
                    >
                        Recent Obituaries
                    </h1>
                    <Divider className={"divider mx-auto mb-4"}/>
                    <Button
                        variant="primary"
                        outline
                        size="md"
                        pill
                        label="View Sample"
                        className="my-4"
                    />
                </div>
                <div className={"slider-section w-full mt-4 pb-1 lg:pr-0 "}>
                    <div className={"mt-7 xl:mx-auto 2xl:w-90 mb-20"}>
                        <Slider multi>
                            {isLoading ? (
                                <>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                </>
                            ) : obituaries?.data.obituary &&
                            obituaries.data.obituary.products &&
                            obituaries.data.obituary.products.royal.length ? (
                                obituaries.data.obituary.products.royal.map(
                                    (item: any, i: number) => (
                                        <SplideSlide key={uuidv4()}>
                                            <RecentObituaryCard data={item}/>
                                        </SplideSlide>
                                    )
                                )
                            ) : (
                                <SplideSlide key={uuidv4()}>
                                    <h5
                                        className={
                                            "text-white text-center lg:text-center text-2xl mt-3 lg:mt-3 mb-2"
                                        }
                                    >
                                        No recent royal obituaries
                                    </h5>
                                </SplideSlide>
                            )}
                        </Slider>
                    </div>
                    {/* <Divider className={'divider-white-thin w-100'} /> */}
                    <div className={"mt-7 xl:mx-auto 2xl:w-90 mb-20"}>
                        <Slider multi>
                            {isLoading ? (
                                <>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                </>
                            ) : obituaries?.data.obituary &&
                            obituaries.data.obituary.products &&
                            obituaries.data.obituary.products.premium.length ? (
                                obituaries.data.obituary.products.premium.map(
                                    (item: any, i: number) => (
                                        <SplideSlide key={uuidv4()}>
                                            <RecentObituaryCard data={item}/>
                                        </SplideSlide>
                                    )
                                )
                            ) : (
                                <SplideSlide key={uuidv4()}>
                                    <h5
                                        className={
                                            "text-white text-center lg:text-center text-2xl mt-3 lg:mt-3 mb-2"
                                        }
                                    >
                                        No recent premium obituaries
                                    </h5>
                                </SplideSlide>
                            )}
                        </Slider>
                    </div>
                    {/* <Divider className={'divider-white-thin w-100'} /> */}
                    <div className={"mt-7 xl:mx-auto 2xl:w-90 mb-20"}>
                        <Slider multi>
                            {isLoading ? (
                                <>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                    <SplideSlide key={uuidv4()}>
                                        <RecentObituaryCard isPlaceholder/>
                                    </SplideSlide>
                                </>
                            ) : obituaries?.data.obituary &&
                            obituaries.data.obituary.products &&
                            obituaries.data.obituary.products.standard.length ? (
                                obituaries.data.obituary.products.standard.map(
                                    (item: any, i: number) => (
                                        <SplideSlide key={uuidv4()}>
                                            <RecentObituaryCard data={item}/>
                                        </SplideSlide>
                                    )
                                )
                            ) : (
                                <SplideSlide key={uuidv4()}>
                                    <h5
                                        className={
                                            "text-white text-center lg:text-center text-2xl mt-3 lg:mt-3 mb-2"
                                        }
                                    >
                                        No recent standard obituaries
                                    </h5>
                                </SplideSlide>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Obituary;
