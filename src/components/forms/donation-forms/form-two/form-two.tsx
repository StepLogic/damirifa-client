import React from "react";
import {Button} from "@components/ui/common";

export type FormTwoProps = {};
export default function FormTwo(props: any) {
    return (
        <section className={"px-3"}>
            <h2 className={"mb-2 ms-lg-1 ps-lg-1"}>Kwadwo J Kobi Donation Fund</h2>
            <h3 className={"mb-2 mt-3 ms-lg-1 ps-lg-1"}>Introduction</h3>
            <div className={"text-area"}>
                <textarea></textarea>
                <span className={"word-count text-grey-white pb-3"}>350</span>
            </div>
            <Button
                className={"mx-auto mt-lg-5 mb-lg-5 mt-5 mb-5"}
                // color={'var(--damirifa-red)'}
                variant="primary"
                size="md"
                pill
                onClick={() => props.nextStep()}
            >
                <span className={"text-white text-size-md"}>Continue</span>
            </Button>
        </section>
    );
}
