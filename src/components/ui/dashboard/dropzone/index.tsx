import React, {useCallback} from "react";
import s from "./index.module.css";
import cn from "classnames";
import {useDropzone} from "react-dropzone";
import {BiJpgPng} from "@components/icons";

interface Props {
    className?: string;
    variant?: "icon" | "default";
    renderParagraph?: Function;
    renderChildren?: Function;
}

const Dropzone: React.FC<Props> = (props) => {
    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
    const {className, children, variant = "icon", renderParagraph} = props;
    return (
        <div className={cn(s.root, className)}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {children ? (
                    children
                ) : variant === "icon" ? (
                    <>
                        <BiJpgPng className={s.icons}/>
                        {renderParagraph ? (
                            renderParagraph()
                        ) : (
                            <p className={s.paragraph}>
                                Drag the banner image here or&nbsp;
                                <i className={s.alternate}>browse</i>&nbsp;for the image to
                                upload
                            </p>
                        )}
                    </>
                ) : (
                    <p className={s.paragraph}>
                        Drag the banner image here or&nbsp;
                        <i className={s.alternate}>browse</i>&nbsp;for the image to upload
                    </p>
                )}
            </div>
        </div>
    );
};

export default Dropzone;
