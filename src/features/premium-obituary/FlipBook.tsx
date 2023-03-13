import React, {useEffect, useState} from "react";
import cn from "classnames";

interface Props {
    fileUrl?: string;
}

interface PageProps {
    pageNumber: number;
}

interface FlipProps {
}

export type Ref = HTMLDivElement;

const FlipBook: React.FC<Props> = (props) => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages: nextNumPages}: any) {
        setNumPages(nextNumPages);
    }

    useEffect(() => {
        if (window) {
            window.sessionStorage.setItem("flipbook-url", "/pdfs/sample.pdf");
        }
    }, []);

    return (
        <>
            <iframe
                loading="lazy"
                name="pdf-render"
                src="/extern/flipbook/index.html"
                className={cn("mx-auto mt-auto w-11/12 h-[90%] lg:mb-auto")}
            />
        </>
    );
};
export default FlipBook;
