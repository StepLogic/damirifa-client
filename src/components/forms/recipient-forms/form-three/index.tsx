import React, {useContext} from "react";
// import styled from 'styled-components'
// import { Formik } from 'formik'
import {Button} from "@components/ui";
import PerfectScrollbar from "react-perfect-scrollbar";
import {ModalContext} from "../../../ui/modal";

export type FormThreeProps = {};

export default function FormThree(props: any) {
    const {setTitle, toggleModal, title} = useContext(ModalContext);

    setTitle("Recipient’s Account Information (in Ghana)");

    return (
        <PerfectScrollbar
            options={{suppressScrollX: true, wheelPropagation: false}}
        >
            <section className={"px-3"}>
                <h2 className={"text-center mx-auto text-black"}>Angel Mensah</h2>
                <h3
                    className={"text-center text-damirifa-red text-capitalize mx-auto "}
                >
                    recipient
                </h3>
                <h3 className={"text-center  text-mute  mb-5 mt-4"}>
                    Your information will&nbsp;
                    <span className={"text-damirifa-red text-upper"}>Not</span>
                    &nbsp; be disclosed to the public
                </h3>

                <form onSubmit={formProps.handleSubmit}>
                    <label htmlFor={"recipient-phone-number"}>
                        Recipient’s Phone Number<span>*</span>
                    </label>
                    <input
                        type={"tel"}
                        id={"recipient-phone-number"}
                        className={"text-input"}
                    />
                    <label htmlFor={"recipient-email"} className={"mt-4"}>
                        Recipient’s Email
                    </label>
                    <input type={"email"} id={"email"} className={"text-input mt-2"}/>
                    <label htmlFor={"recipient-home"} className={"mt-4"}>
                        Recipient’s Home Location&nbsp;<span>*</span>
                    </label>
                    <input
                        type={"text"}
                        id={"recipient-home"}
                        className={"text-input mt-2"}
                    />
                    <label htmlFor={"recipient-digital"} className={"mt-4"}>
                        Recipient’s Digital Address
                    </label>
                    <input
                        type={"text"}
                        id={"recipient-digital"}
                        className={"text-input mt-2"}
                    />
                    <div className={"d-flex flex-xl-row flex-column mx-auto mt-5"}>
                        <Button
                            className={"mx-auto mt-5 mt-xl-0 mb-xl-0 mb-2 "}
                            color={"var(--damirifa-red)"}
                            radius={20}
                            width={200}
                            outline
                            height={45}
                            onClick={() => props.previousStep()}
                        >
                            <span className={"text-damirifa-red text-size-md"}>Back</span>
                        </Button>
                        <Button
                            className={"mx-auto mt-2 mt-xl-0 mb-5 ms-xl-4"}
                            color={"var(--damirifa-red)"}
                            radius={20}
                            width={200}
                            height={45}
                            onClick={() => props.nextStep()}
                        >
                            <span className={"text-white text-size-md"}>Continue</span>
                        </Button>
                    </div>
                </form>
                {/* )}
        </Formik> */}
            </section>
        </PerfectScrollbar>
    );
}
