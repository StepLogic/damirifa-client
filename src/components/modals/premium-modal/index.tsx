import {Button} from "@components/ui/common";
import React, {useEffect} from "react";
import {AiOutlineClose} from "react-icons/ai";
import s from "./index.module.css";
import cn from "classnames";
import Modal from "react-modal";

type Props = {
    children?: React.ReactNode;
    isOpen?: boolean;
    onRequestClose: Function;
    title: string;
    noHeader?: boolean;
};
// eslint-disable-next-line react/display-name
const PremiumModal = (props: Props) => {
    Modal.setAppElement("#__next");
    const {children, isOpen, onRequestClose, noHeader = false, title} = props;
    useEffect(() => {
        isOpen
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <Modal
            isOpen={isOpen || false}
            onRequestClose={() => onRequestClose()}
            className={s.root}
            overlayClassName={"premiumModalOverlay"}
        >
            <Button
                icon
                className={cn(s.controlButton, s.closeButton, s.button)}
                onClick={() => onRequestClose()}
            >
                <AiOutlineClose className={"text-white"}/>
            </Button>
            <div className={s.content}>{children}</div>
        </Modal>
    );
};
export default PremiumModal;
