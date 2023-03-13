import React from "react";
import {Button} from "@components/ui/common";

export type FormThreeProps = {};
export default function FormThree(props: any) {
    return (
        <section className={"px-3"}>
            <h2 className={"text-grey-white mb-5 mt-3 text-size-md"}>
                Damirifa may contact the funeral home or mortuary or family contact
                persons to validate information provided on this page.
            </h2>
            {/* <Formik initialValues={{}} onSubmit={() => {}}>
        {(formProps: any) => (
          <form onSubmit={formProps.handleSubmit}> */}
            <h1 className={"fs-5 form-section-label text-grey-white-3 mb-lg-5 mb-4 "}>
                Funeral Home or Mortuary Details
            </h1>
            <label htmlFor={"funeral-home-name"}>
                Funeral Home Name<span>*</span>
            </label>
            <input type={"text"} id={"funeral-home-name"}/>
            <label htmlFor={"funeral-home-location"}>
                Location<span>*</span>
            </label>
            <input type={"text"} id={"funeral-home-location"}/>
            <label htmlFor={"funeral-home-phone"}>
                Phone Number<span>*</span>
            </label>
            <input type={"tel"} id={"funeral-home-phone"}/>
            <h1
                className={
                    "fs-5 form-section-label text-grey-white-3 mt-5 mb-lg-5 mb-4 "
                }
            >
                Evidence Of Deceased’s Death
            </h1>
            <label>Upload Proof of Death (eg. Death certificate)</label>
            <label className={"deceased-file-button"} htmlFor={"deceased-evidence"}>
                <span>Upload File</span>
            </label>
            <input type={"file"} id={"deceased-evidence"} className={"d-none"}/>
            <h1
                className={
                    "fs-5 form-section-label text-grey-white-3 mt-5 mb-lg-5 mb-4 "
                }
            >
                Family Contact with Funeral Home or Mortuary
            </h1>
            <label htmlFor={"family-contact-name"}>
                Name<span>*</span>
            </label>
            <input type={"text"} id={"family-contact-name"}/>
            <label htmlFor={"family-contact-phone"}>
                Phone Number<span>*</span>
            </label>
            <input type={"tel"} id={"family-contact-phone"}/>
            <div
                className={
                    "d-flex flex-lg-row flex-column align-items-center justify-content-center mb-5"
                }
            >
                <Button
                    className={"me-lg-5 mb-3 mb-lg-0"}
                    // color={'#F8F8F8'}
                    variant="secondary"
                    size="md"
                    pill
                    onClick={() => props.previousStep()}
                >
                    <span className={"text-damirifa-red text-size-md"}>Back</span>
                </Button>
                <Button
                    className={""}
                    variant="primary"
                    size="md"
                    pill
                    onClick={() => props.setFormComplete(true)}
                >
                    <span className={"text-white text-size-md"}>Continue</span>
                </Button>
            </div>
        </section>
    );
}
