import { isEmail, MetaTags } from "@lib/Utils";
import React, { useEffect, useState, useRef } from "react";
import s from "./index.module.css";
import cn from "classnames";
import { Button, Link, Divider } from "@common-ui/index";
import { AiFillEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FieldValues, useForm } from "react-hook-form";
import * as Yup from "yup";

import {
  requestLogin,
  requestSocialLogin,
  resetStatus,
} from "@store/actions/authActions";
import { Login as LoginInterface } from "@lib/interface/auth";
import FormProvider from "@components/forms/form-provider";
import { useAppDispatch, useAppSelector } from "@lib/hooks/appHooks";
import TextWrapper from "@components/integrations-only/TextWrapper";
import { disableLoader, enableLoader } from "@store/actions/commonActions";
import { isPhone } from "@lib/Utils";

import Poster from "@features/common/poster";
import { FiAlertCircle } from "react-icons/fi";
import { signInWithFacebook, signInWithGoogle } from "@services/firebase";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { postSupport } from "@services/contactUs";
import axios from "axios";
import { Field, Form, Formik, useFormik } from "formik";
import TextField from "@common-ui/textfield";
import ErrorWrapper from "@components/integrations-only/ErrorWrapper";
export default function ContactUs() {
  const router = useRouter();

  const schema = Yup.object().shape({
    phone: Yup.string().test(
      "Please enter a valid phone number",
      function (value) {
        console.log("value", value);

        if (value === null || value === "" || typeof value === "undefined")
          return false;
        return isPhone(String(value) || "");
      }
    ),

    email: Yup.string().email().required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .test(
        "Please the message must be greater than 10 characters",
        function (value) {
          return (
            (value && value.split("") && value?.split("")?.length > 10) || false
          );
        }
      ),
    name: Yup.string().required("Name is required"),
    subject: Yup.string().required("Subject is required"),
    // file:Yup.test("Please")
  });

  const defaultValues: FieldValues = {
    email: "",
    name: "",
    phone: "",
    subject: "",
    message: "",
    file: null,
  };

  // const methods = useForm({
  //   mode: "onChange",
  //   reValidateMode: "onChange",
  //   resolver: yupResolver(LoginSchema),
  //   defaultValues,
  // });

  // const {
  //   reset,
  //   handleSubmit,
  //   getValues,
  //   formState: { isValid },
  // } = methods;

  // const formik = useFormik({
  //   initialValues: defaultValues,
  //   validationSchema: schema,
  //   validateOnMount: false,
  //   validateOnChange: true,
  //   onSubmit: (values: any) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  const onSubmit = (data: any) => {
    postSupport(axios.CancelToken.source().token, data)
      .then((r) => {
        console.log("r", r);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <MetaTags title={"Contact Us"} />
      <div className="bg-black">
        <Poster
          src={"assets/background/contactUs.jpg"}
          title={"Contact Us"}
          className={cn("mb-5", s.poster)}
        />
        <section className={s.section}>
          <div
            className={
              "flex flex-col lg:flex-row items-center lg:items-baseline "
            }
          >
            <div className={cn("w-full flex-auto px-3")}>
              <Formik
                initialValues={defaultValues}
                validationSchema={schema}
                onSubmit={(values) => {
                  postSupport(axios.CancelToken.source().token, values)
                    .then((r) => {
                      console.log("error", r);
                    })
                    .catch((err) => console.log(err));
                }}
                render={({ values, errors, touched, setFieldValue }) => (
                  <Form>
                    {console.log("error", errors)}
                    <div className={cn("px-3")}>
                      <section className={"px-3 w-full flex flex-col gap-4"}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <InputField
                            id="name"
                            name="name"
                            type="text"
                            label="Name"
                          />

                          <InputField
                            id="email"
                            name="email"
                            type="text"
                            label="Email"
                          />
                          <InputField
                            id="phone"
                            name="phone"
                            type="text"
                            label="Phone"
                          />

                          <div className={cn("flex flex-col w-full")}>
                            {/* @ts-ignore */}
                            <label className="flex flex-row items-center">
                              <input
                                onChange={(event) => {
                                  setFieldValue(
                                    "file",
                                    event.target &&
                                      event.target.files &&
                                      event.target.files[0]
                                  );
                                }}
                                max={1}
                                accept="application/pdf, image/jpeg ,image/png"
                                type={"file"}
                              />
                              <span className="w-full text-white">
                                {values.file != null
                                  ? values.file.name
                                  : "Kindly upload image or pdf"}
                              </span>
                            </label>
                          </div>
                        </div>

                        <InputField
                          id="subject"
                          name="subject"
                          type="text"
                          label="Subject"
                        />
                        <InputArea id="message" name="message" type="text" />
                      </section>
                    </div>
                    <div className="flex flex-col items-center alt-register mx-auto lg:mt-7 lg:mb-7 mt-8 mb-2">
                      <Button
                        className={"mb-3 mt-4"}
                        pill
                        variant="primary"
                        size="md"
                        type={"submit"}
                        disabled={Object.keys(errors).length > 0}
                        label={"Submit"}
                      />
                    </div>
                  </Form>
                )}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
function InputField(props: any) {
  const {
    className,
    name,
    validateOnChange = false,
    children,
    Component,
    ...rest
  } = props;

  // validateField
  return (
    <Field
      name={name}
      {...rest}
      render={({ field, form: { touched, errors, validateField } }: any) => {
        const error =
          (validateOnChange || touched[name]) &&
          typeof errors[name] === "string"
            ? errors[name]
            : null;

        const onChange = validateOnChange
          ? (e: any) => {
              if (validateOnChange) {
                validateField(field.name);
              }
              return field.onChange(e);
            }
          : field.onChange;

        return (
          <div className={"flex flex-col w-full"}>
            {Component ? (
              <Component {...field} {...rest} onChange={onChange} />
            ) : (
              <TextField {...field} {...rest} onChange={onChange} />
            )}

            <ErrorWrapper state={Boolean(error)} message={error as string} />
          </div>
        );
      }}
    />
  );
}
function InputArea(props: any) {
  const {
    className,
    name,
    validateOnChange = false,
    children,
    Component,
    ...rest
  } = props;

  // validateField
  return (
    <Field
      name={name}
      {...rest}
      render={({ field, form: { touched, errors, validateField } }: any) => {
        const error =
          (validateOnChange || touched[name]) &&
          typeof errors[name] === "string"
            ? errors[name]
            : null;

        const onChange = validateOnChange
          ? (e: any) => {
              if (validateOnChange) {
                validateField(field.name);
              }
              return field.onChange(e);
            }
          : field.onChange;
        console.log("error", error);

        return (
          <div className={"flex flex-col w-full"}>
            <textarea
              placeholder="Enter comments or feedback here"
              className="rounded-[5px] lg:h-[15vh] p-4"
              {...field}
              {...rest}
              onChange={onChange}
            />

            <ErrorWrapper state={Boolean(error)} message={error as string} />
          </div>
        );
      }}
    />
  );
}
