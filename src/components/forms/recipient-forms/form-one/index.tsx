// import { H2, H3 } from '../../../headings'
import React, {useContext} from "react";
// import styled from 'styled-components'
import {Button} from "@components/ui";
import InputSearchDropdown from "../../../ui/input-search-dropdown";
import {ModalContext} from "../../../ui/modal";
import PerfectScrollbar from "react-perfect-scrollbar";
import {AiOutlineUserAdd} from "react-icons/ai";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

import {RecipientFormContext} from "../recipient-form-wizard";

const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
        Add A New Family Member
    </Tooltip>
);
export default function FormOne(props: any) {
    const {setIsOutsideGhana, isOutsideGhana} =
        useContext(RecipientFormContext);
    const option = ["Value", "Value", "Value", "Value"];
    const {setTitle, toggleModal, title} = useContext(ModalContext);
    setTitle("Select Recipient");

    return (
        <PerfectScrollbar
            options={{suppressScrollX: true, wheelPropagation: false}}
        >
            <section>
                <label className={"mb-2"}>
                    Select Recipient&nbsp;<span>*</span>
                </label>
                <InputSearchDropdown
                    className={"dropdown"}
                    placeholder={"Select Family"}
                    options={option}
                />
                <div
                    className={
                        "d-flex flex-row align-items-center justify-content-between w-100"
                    }
                >
                    <label className={"mb-2 mt-4"}>
                        Name of Recipient&nbsp;<span>*</span>
                    </label>
                    <OverlayTrigger
                        placement="right"
                        delay={{show: 50, hide: 100}}
                        overlay={renderTooltip}
                    >
                        <Button icon>
                            <AiOutlineUserAdd className={"fs-6 text-damirifa-red"}/>
                        </Button>
                    </OverlayTrigger>
                </div>

                <InputSearchDropdown
                    className={"dropdown"}
                    placeholder={"Select Family"}
                    options={option}
                />

                <div className={"d-flex flex-row align-items-start mt-5"}>
                    <input type={"checkbox"} className={"me-2"}/>
                    <span className={"term"}>
            Funds donated to this recipient will be sent to a mobile money or
            bank account established in Ghana.
          </span>
                </div>
                <div className={"d-flex flex-row align-items-start mt-5"}>
                    <input
                        type={"checkbox"}
                        className={"me-2"}
                        checked={isOutsideGhana}
                        onChange={(e) => {
                            setIsOutsideGhana(Boolean(e.target.checked));
                        }}
                    />
                    <span className={"term"}>
            Funds donated to this recipient will be sent to a mobile money or
            bank account outside Ghana.
            <br/>
            <br/>
            <b className={"text-damirifa-red"}>Please note:</b> Damirifa does
            not transfer funds to accounts outside Ghana. We make it easy for
            donors to identify third party provider mobile account.
          </span>
                </div>
                <div className={"d-flex flex-xl-row flex-column mx-auto mt-5"}>
                    <Button
                        className={"mx-auto mt-5 mt-xl-0 mb-xl-0 mb-2 "}
                        color={"var(--damirifa-red)"}
                        radius={20}
                        width={200}
                        height={45}
                        outline
                        onClick={() => toggleModal()}
                    >
                        <span className={"text-damirifa-red text-size-md"}>Cancel</span>
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
