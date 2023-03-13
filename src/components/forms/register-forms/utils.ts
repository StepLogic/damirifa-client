import {FormikErrors} from "formik";
import React, {ChangeEvent, ChangeEventHandler} from "react";
import * as Yup from "yup";

type FieldValues = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    otp: string;
    confirm_email: string;
    agreeToTerms: false;
    password: string;
    confirm_password: string;
};
export type Context = {
    values: FieldValues;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    setFieldValue: Function;
    errors: FormikErrors<FieldValues>;
    isLoading: boolean;
};
export const defaultValues: FieldValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    confirm_email: "",
    otp: "",
    agreeToTerms: false,
    password: "",
    confirm_password: "",
};

export const FormContext = React.createContext<Context>({
    values: defaultValues,
    handleChange: (event: ChangeEvent) => {
    },
    setFieldValue: (key: string, value: any) => {
    },
    errors: defaultValues,
    isLoading: false,
});
export const schema = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email"),
    phone: Yup.string(),
    otp: Yup.string(),
    confirm_email: Yup.string()
        .email("Invalid email")
        .test("emails do not match", function (confirm_email) {
            const {email} = this.parent;
            return confirm_email?.match(email)
                ? true
                : this.createError({message: "Emails do not match"});
        }),
    agreeToTerms: Yup.bool()
        .required("The terms and conditions must be accepted.")
        .oneOf([false], "The terms and conditions must be accepted."),
    password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .matches(/[a-zA-Z]/, "Password must contain a latin letter.")
        .matches(/[0-9]/, "Password must contain a number"),
});
export const checkNullOrUndefinedValue = (value: any) => {
    if (typeof value === "undefined" || value === null || value === "") {
        console.log("checkNull", value);
        return true;
    }
    return false;
};
