import React from "react";
import {Button} from "@components/ui/common";
import {donationTerms} from "@lib/Constants";

export default function FormOne(props: any) {
    return (
        <section className={"px-3"}>
            <div className={"d-flex flex-row align-items-center mb-5"}>
                <input type={"checkbox"} className={"me-2 me-lg-3"}/>
                <h2 className={"text-grey-white-2 fs-5 ps-lg-3 mb-0 fw-lighter"}>
                    The family would like to receive funeral donations. By selecting this
                    box, you agree to the following terms & conditions:
                </h2>
            </div>
            <div className={"d-flex flex-column mt-5 ps-lg-5"}>
                <h2 className={"text-uppercase text-grey-white-2 fw-600 fs-5 mb-5"}>
                    The recipient of funeral funds solicited through Damirifa.com must be:
                </h2>
                {donationTerms.map((term: string, index) => (
                    <div className={"list-item mb-4"} key={`_donation-terms-${index}`}>
                        <div className={"marker me-3"}/>
                        <h3 className={"text-grey-white fs-6"}>{term}.</h3>
                    </div>
                ))}
            </div>
            <Button
                className={"mx-auto mt-5 mb-5"}
                variant="primary"
                size="md"
                pill
                onClick={() => props.nextStep()}
                label={"I Accept"}
            />
            {/* <span className={'text-white text-size-md'}>I Accept</span> */}
            {/* </Button> */}
        </section>
    );
}
