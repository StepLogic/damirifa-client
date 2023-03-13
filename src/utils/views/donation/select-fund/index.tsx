import React from "react";
// import styled from 'styled-components'
// import dynamic from 'next/dynamic'
// import Poster from '@components/poster'
// import Divider from '@components/ui/divider/divider'
// import {
//   Container as RootContainer,
//   Collapse,
//   Dropdown,
//   Accordion,
// } from 'react-bootstrap'
import {Button} from "@components/ui";
// import PackageCard from '@components/cards/pricing-page-cards/package-card'
// import {
//   AiOutlineCheck,
//   AiFillCaretDown,
//   AiOutlineArrowLeft,
//   AiOutlineArrowRight,
//   AiOutlinePlus,
//   AiOutlineMinus,
// } from 'react-icons/ai'
// import SinglePageCarousel from '../../components/carousel/single-page-carousel'
// import PricingPageDisplayBanner from '@components/carousel/slides/pricing'
// import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
// import TestimonialCards from '@components/cards/pricing-page-cards/testimonial-card'
// export type OneWeekLandingPageProps = {}
// import ResponsiveImage from '@components/ui/image'
// import { useMediaQuery } from 'react-responsive'
import s from "./index.module.css";
import cn from "classnames";
import InputSearchDropdown from "@components/ui/input-search-dropdown";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   p {
//     font-weight: 500;
//     font-size: 1.0625rem;
//     line-height: 1.5rem;
//     /* or 141% */
//     text-align: center;
//     color: rgba(0, 0, 0, 0.9);
//   }
// `

const SelectFund = (props: any) => {
    const option = [
        "Jane Doe (Widower)",
        "Angel Mensah (Child)",
        "Martin Anson (Parent)",
    ];
    return (
        <section className="flex flex-col w-full">
            <p className={cn("mt-4 mb-5", s.p)}>
                As we grieve the loss of our beloved, we have set up a funeral fund for
                those wanting to make donations to the family. All proceeds are sent
                directly to the recipient you select and will go towards the funeral and
                supporting the family. We invite you to share this page to help further
                this fund. We greatly appreciate any contributions.
            </p>
            <label className="text-damirifa-light grey  mb-2 w-full text-start">
                Select recipient
            </label>
            <InputSearchDropdown
                options={option}
                variant="secondary"
                placeholder="Select recipient"
            />
            <Button
                className="mx-auto mt-16 mb-5"
                variant="primary"
                size="md"
                pill
                onClick={() => props.nextStep()}
                label={"Proceed To Donate"}
            >
                <span className="text-capitalize">proceed&nbsp;to&nbsp;donate</span>
            </Button>
        </section>
    );
};

export default SelectFund;
