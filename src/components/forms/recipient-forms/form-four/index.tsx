import React, {useContext} from "react";
// import styled from 'styled-components'
import {Button} from "@components/ui";
import PerfectScrollbar from "react-perfect-scrollbar";
import InputSearchDropdown from "../../../ui/input-search-dropdown";
import {ModalContext} from "../../../ui/modal";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {BsInfoCircleFill} from "react-icons/bs";

export type FormFourProps = {};

const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
        Enter any extra information
    </Tooltip>
);
export default function FormFour(props: any) {
    const option = ["Value", "Value", "Value", "Value"];
    const {setTitle, toggleModal, title} = useContext(ModalContext);
    setTitle("Recipient’s Account Information (Outside Ghana)");

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
                    <span className={"text-damirifa-red text-upper"}>Please note:</span>
                    &nbsp; Damirifa does not send funds to accounts outside Ghana. The
                    receipient will need to have an account with a third party mobile
                    wallet vendor.
                </h3>
                <form>
                    <label>
                        recipient financial service provider&nbsp;<span>*</span>
                    </label>
                    <InputSearchDropdown
                        className={"mt-2"}
                        placeholder={"Choose an options"}
                        options={option}
                    />
                    <h3 className={"text-mute mt-2 mb-5"}>
                        Donation made to the recipient will be deposited into this account.
                    </h3>
                    <label htmlFor={"wallet-link"} className={"mt-3"}>
                        Paste Link to Mobile Wallet&nbsp;<span>*</span>
                    </label>
                    <input
                        type={"tel"}
                        id={"wallet-link"}
                        className={"text-input mt-2"}
                    />

                    <label
                        className={"my-4 d-block mx-auto"}
                        style={{width: "fit-content"}}
                    >
                        OR
                    </label>

                    <label className={"mb-2"}>QR Code</label>
                    <label className={"file-button"} htmlFor={"qr-code-recipient"}>
            <span style={{borderBottom: "none", paddingBottom: "0"}}>
              Upload QR Code
            </span>
                    </label>
                    <input type={"file"} id={"qr-code-recipient"} className={"d-none"}/>
                    <label className={"mt-4 mb-2"}>
                        Additional Information
                        <OverlayTrigger
                            placement="right"
                            delay={{show: 50, hide: 100}}
                            overlay={renderTooltip}
                        >
                            <BsInfoCircleFill className={"text-damirifa-red fs-6 ms-2"}/>
                        </OverlayTrigger>
                    </label>
                    <textarea></textarea>
                </form>
                <div className={"d-flex flex-xl-row flex-column mx-auto mt-5"}>
                    <Button
                        className={"mx-auto mt-5 mt-xl-0 mb-xl-0 mb-2 "}
                        color={"var(--damirifa-red)"}
                        radius={20}
                        width={200}
                        height={45}
                        outline
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
            </section>
        </PerfectScrollbar>
    );
}
