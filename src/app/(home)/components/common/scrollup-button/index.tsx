import {Button} from "@common-ui/index";
import {useEffect, useState} from "react";
import {BsChevronUp} from "react-icons/bs";
import throttle from "lodash.throttle";

type Props = {
    className?: string;
};

export function ScrollUpButton({className}: Props) {
    const [showButton, setShowButton] = useState(false);
    // const [hasScrolled, setHasScrolled] = useState(false);
    useEffect(() => {
        const detectScroll = throttle(() => {
            if (window.pageYOffset > 2000) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }, 200);
        window.addEventListener("scroll", detectScroll);
        return () => {
            window.removeEventListener("scroll", detectScroll);
        };
    }, []);
    const scrollToTop = throttle(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // for smoothly scrolling
        });
    }, 200);
    return (
        <>
            {showButton ? (
                <Button
                    className={className}
                    onClick={() => {
                        scrollToTop();
                    }}
                >
                    <BsChevronUp/>
                </Button>
            ) : (
                <></>
            )}
        </>
    );
}
