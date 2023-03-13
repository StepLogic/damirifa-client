import React from "react";
import cn from "classnames";
import s from "./index.module.css";
import {Button, Image, Select, TextArea, TextField,} from "@components/ui/common";
import Dropzone from "react-dropzone";
import {RiSendPlaneFill} from "react-icons/ri";

const CondolencesForm = () => {
    return (
        <div className={s.root}>
            <h2 className="text-2xl text-white font-bold my-4">
                Book of Condolence&nbsp; &nbsp;
                {/* <i className={s.altText}>all fields mark * is required</i> */}
            </h2>
            <div className="flex-col flex gap-10 mb-8">
                <TextArea
                    variant="secondary"
                    placeholder={"Message*"}
                    className={cn(s.input, s.textArea)}
                />

                <TextField
                    variant="secondary"
                    placeholder={"Full Name*"}
                    className={s.input}
                />
                <div className="grid grid-cols-2 gap-4 gap-y-10">
                    <Select
                        variant="secondary"
                        options={[]}
                        placeholder={"Relationship To Deceased*"}
                        className={cn(s.inputDropdown, "w-full")}
                    />
                    <TextField
                        variant="secondary"
                        placeholder={"Your Title"}
                        className={s.input}
                    />
                </div>
                <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <div {...getRootProps()} className={s.container}>
                            <input {...getInputProps()} className={"fileuploader-input"}/>

                            <div className={s.innerContainer}>
                                <Image
                                    src="/assets/img/fileuploader-dragdrop-icon.png"
                                    alt="icon"
                                    className={cn(s.icon)}
                                    objectFit="contain"
                                    objectPosition="center"
                                />
                                <h3 className={s.textPrompt}>
                  <span className="">
                    Drag and Drop a Picture With Deceased
                  </span>
                                </h3>
                                <p className={cn("my-2", s.or)}>or</p>
                                <button className={s.button}>
                                    <span>Browse Files</span>
                                </button>
                            </div>
                        </div>
                    )}
                </Dropzone>
            </div>
            <Button
                pill
                variant="primary"
                size="md"
                className={cn("mx-auto", s.sendButton)}
            >
                <RiSendPlaneFill/>
                <span className="uppercase mx-2">submit</span>
            </Button>
        </div>
    );
};

export default CondolencesForm;
