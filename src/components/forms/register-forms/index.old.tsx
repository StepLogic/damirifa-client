import CheckboxWrapper from "@components/integrations-only/CheckboxWrapper";
import TextWrapper from "@components/integrations-only/TextWrapper";
import {Button, Collapse, Divider, Link} from "@components/ui/common";
import {StepperRef} from "@components/ui/common/step-wizard";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAppDispatch, useAppSelector} from "@lib/hooks/appHooks";
import {RegisterRequestState} from "@lib/interface/auth";
import {hasLetter, hasNumber, hasSpecialCharacter, isEmail, isPassword, isPhone,} from "@lib/Utils";
import {requestRegister, requestSocialLogin, setProvider,} from "@store/actions/authActions";
import {enableLoader} from "@store/actions/commonActions";
import cn from "classnames";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import {FieldValues, useForm} from "react-hook-form";
import {AiOutlineGoogle} from "react-icons/ai";
import {FaCheckCircle, FaFacebookF, FaTimesCircle,} from "react-icons/fa";
import * as Yup from "yup";

import FormProvider from "../form-provider";
import s from "./index.module.css";

export default function RegisterForm() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const isProcess = useRef(false);
    const dispatch = useAppDispatch();

    const [errorMessage, setErrorMessage] = useState(false);
    const [contact, setContact] = useState("");
    const [regMode, setRegMode] = useState("email");

    const [otpVerified, setOTPVerified] = useState(false);
    const [disableContinue, setDisableContinue] = useState(true);
    const [hasL, setHasL] = useState(false);
    const [hasN, setHasN] = useState(false);
    const [hasS, setHasS] = useState(false);
    const [isValid, setIsVal] = useState(false);
    const [isAgree, setIsAgree] = useState(false);
    const {isLoading} = useAppSelector((state) => state.loading);
    const {status, message, provider} = useAppSelector((state) => state.auth);

    const {data: session} = useSession();

    // Refactored TextField to be default text input

    const RegisterSchema = Yup.object().shape(
        {
            first_name: Yup.string().required("First Name is required"),
            other_names: Yup.string().required("Last Name is required"),
            contact: Yup.string()
                .test(
                    "verify-input",
                    "Please enter a valid email or Ghana phone number",
                    function (value) {
                        return isPhone(String(value) || "") || isEmail(String(value) || "");
                    }
                ),
            password: Yup.string()
                .required("Password is required")
                .test(
                    "passwords-match",
                    "Password does not meet requirements",
                    function (value) {
                        return isPassword(value || "");
                    }
                ),

            confirm_password: Yup.string()
                .required("Confirm Password is required")
                .oneOf([Yup.ref("password"), null], "Confirm Password does not match Password"),
            agree: Yup.bool().oneOf(
                [true],
                "You must accept the terms and conditions"
            ),
        }
    );

    const defaultValues: FieldValues = {
        first_name: "",
        other_names: "",
        contact: "",
        password: "",
        confirm_password: "",
        agree: false,
    };

    const methods = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(RegisterSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
        watch,
        trigger,
        formState: {isValid: passedErrors},
    } = methods;

    const onSubmit = (data: RegisterRequestState) => {
        isProcess.current = true;
        setErrorMessage(false);
        dispatch(requestRegister(data));
    };

    useEffect(() => {
        const subscription = watch((value) => {
            if (value.first_name.length >= 2 && value.other_names.length >= 2)
                setDisableContinue(false);
            setContact(value.contact);

            if (value.password.length < 8) {
                setIsVal(false);
            } else {
                setIsVal(true);
            }

            if (value.password.length > 0) {
                trigger("confirm_password").then((_r) => "");
            }

            if (!hasLetter(value.password)) {
                setHasL(false);
            } else {
                setHasL(true);
            }
            if (!hasNumber(value.password)) {
                setHasN(false);
            } else {
                setHasN(true);
            }
            if (!hasSpecialCharacter(value.password)) {
                setHasS(false);
            } else {
                setHasS(true);
            }

            if (!value.agree) {
                setIsAgree(false);
            } else {
                setIsAgree(true);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    useEffect(() => {
        if (session && session.user && provider) {
            if (provider !== "") {
                const sessionUser = session.user as any;
                dispatch(
                    requestSocialLogin({
                        access_token: sessionUser.accessToken || "",
                        provider,
                        data: {
                            id: sessionUser.id || "",
                            name: sessionUser.name || "",
                            email: sessionUser.email || "",
                        },
                    })
                );
            } else {
                alert("Invalid provider. Retry");
            }
        }
    }, [session]);

    useEffect(() => {
        if (status === 201) {
            setErrorMessage(false);
            reset();
            setTimeout(() => router.push("/login"), 1000);
            return;
        }

        if (isProcess.current && !isLoading) {
            isProcess.current = false;
            setErrorMessage(true);
        }
    }, [isProcess.current, status, isLoading]);
    const handleSocialLogin = async (provider: string) => {
        dispatch(enableLoader());
        dispatch(setProvider(provider));
        await signIn(provider);
    };
    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={cn("flex flex-col items-center", s.root)}>
                <TextWrapper
                    name={"first_name"}
                    variant="primary"
                    type="text"
                    className="mb-10"
                    label={"First Name"}
                    required
                />
                <TextWrapper
                    name={"other_names"}
                    variant="primary"
                    label={"Last Name"}
                    required
                    type="text"
                    className="mb-10"
                />

                {open ? (
                    <></>
                ) : (
                    <Button
                        className={cn("mx-auto lg:mt-4 lg:mb-3 mt-3 mb-2", {
                            disableContinue: "is-loading",
                        })}
                        pill
                        variant="primary"
                        size="lg"
                        type={"button"}
                        disabled={disableContinue}
                        onClick={() => {
                            setOpen(!open);
                        }}
                        label="Continue"
                    />
                )}

                <Collapse isOpen={open}>
                    <AuthView
                        hasL={hasL}
                        hasN={hasN}
                        hasS={hasS}
                        isVal={isValid}
                        regMode={regMode}
                        setMode={setRegMode}
                        agree={isAgree}
                        disableRegister={!passedErrors}
                        isLoading={isLoading}
                        errorMessage={errorMessage}
                        status={status}
                        message={message}
                        contact={contact}
                        otpVerified={otpVerified}
                        setOTPVerified={setOTPVerified}
                    />
                </Collapse>
                <div className="flex flex-row  items-center mt-10 mb-4 w-full justify-center text-white">
                    <Divider
                        variant="secondary"
                        height="very-thin"
                        className="w-2/6 mr-2"
                    />
                    &nbsp;or&nbsp;
                    <Divider
                        variant="secondary"
                        height="very-thin"
                        className="w-2/6 ml-2"
                    />
                </div>

                <h3 className="fs-6 text-grey-white text-center mb-3">
                    You can login using
                </h3>
                <Button
                    disabled={isLoading}
                    loading={isLoading}
                    onClick={() => {
                        alert("Coming soon");
                    }}
                    size="md"
                    variant="primary"
                    outline
                    className="mb-4"
                >
                    <div className="flex flex-row justify-start items-center w-100">
                        <AiOutlineGoogle className="text-damirifa-red ml-1 mr-3 button-text"/>
                        <span className="text-damirifa-red button-text">Google</span>
                    </div>
                </Button>
                <Button
                    variant="primary"
                    size="md"
                    className="mb-4"
                    disabled={isLoading}
                    loading={isLoading}
                    onClick={() => alert("Coming soon")}
                    outline
                >
                    <div className="flex flex-row justify-start items-center w-100">
                        <FaFacebookF className="text-damirifa-red ml-4 mr-3 button-text"/>
                        <span className="text-damirifa-red button-text">Facebook</span>
                    </div>
                </Button>
            </fieldset>
        </FormProvider>
    );
}

function AuthView(props: any) {
    const stepperRef = useRef<StepperRef>(null);
    const {isLoading} = useAppSelector((state) => state.loading);
    const [currentStep, setCurrentStep] = useState(1);
    const [label, setLabel] = useState("Verify");


    useEffect(() => {
        if (isEmail(props.contact)) {
            setLabel("Verify Email Address");
        } else if (isPhone(props.contact)) {
            setLabel("Verify Phone Number");
        } else {
            setLabel("Verify");
        }
        return () => {
        };
    }, [props.contact]);


    return (
        <div className={"flex flex-col items-center justify-center"}>
            <TextWrapper
                name="contact"
                type="email"
                className="mb-10"
                label="Email or Ghana Mobile Phone Number (e.g 0244-xxx-xxx)"
                placeholder={"Email or Ghana Mobile Phone Number e.g 0244-xxx-xxx"}
                required
            />

            {/* <StepWizard ref={stepperRef} noScrollUp={true}>
          <EmailForm  />
          <MobileForm
            number={props.contact}
            message={props.message}
            errorMessage={props.errorMessage}
            status={props.status}
            otpVerified={props.otpVerified}
            isPhone={isPhone}
          />
          <OTPForm
            number={props.contact}
            message={props.message}
            errorMessage={props.errorMessage}
            status={props.status}
            setOTPVerified={props.setOTPVerified}
          />
        </StepWizard> */}
            {props.regMode === "mobile" && !props.otpVerified ? (
                ""
            ) : (
                <>
                    <TextWrapper
                        type="password"
                        required
                        label="Password"
                        className="mb-10"
                        name={"password"}
                    />

                    <br/>
                    <TextWrapper
                        disableCopyAndPaste
                        required
                        label="Confirm Password"
                        type="password"
                        name={"confirm_password"}
                    />
                    <div className="text-grey-white-2">
                        <p className="mt-4 flex">
                            Minimum of 8 characters{" "}
                            <span className={"ml-2"}>
                {props.isVal ? (
                    <FaCheckCircle className={"text-green-600 mt-1"}/>
                ) : (
                    <FaTimesCircle className={"text-red-600"}/>
                )}
              </span>
                        </p>

                        <p className="my-1 flex">
                            at least one number{" "}
                            <span className={"ml-2"}>
                {props.hasN ? (
                    <FaCheckCircle className={"text-green-600"}/>
                ) : (
                    <FaTimesCircle className={"text-red-600 mt-1"}/>
                )}{" "}
              </span>{" "}
                        </p>

                        <p className="my-1 flex">
                            at least one letter
                            <span className={"ml-2"}>
                {" "}
                                {props.hasL ? (
                                    <FaCheckCircle className={"text-green-600"}/>
                                ) : (
                                    <FaTimesCircle className={"text-red-600 mt-1"}/>
                                )}{" "}
              </span>
                        </p>
                        <p className="my-1 flex">
                            at least one special character
                            <span className={"ml-2"}>
                <small>
                  allowed characters (<code className={"text-yellow-600"}>@$!%*?&</code>)
                </small>
              </span>
                            <span className={"ml-2"}>
                {" "}
                                {props.hasS ? (
                                    <FaCheckCircle className={"text-green-600"}/>
                                ) : (
                                    <FaTimesCircle className={"text-red-600 mt-1"}/>
                                )}{" "}
              </span>

                        </p>
                    </div>
                </>
            )}
            <div className="flex flex-row items-center my-3">
                <CheckboxWrapper
                    variant="primary"
                    type={"checkbox"}
                    className="mr-2"
                    name={"agree"}
                />
                <label className="block ">
                    I agree to the&nbsp;
                    <Link href="src/components/forms/register-forms#!" className="!underline">
                        Terms and Conditions
                    </Link>
                </label>
            </div>

            <Button
                className={"mx-auto lg:mt-4 lg:mb-3 mt-5 mb-2"}
                variant="primary"
                disabled={props.disableRegister}
                loading={isLoading}
                pill
                size="lg"
                type={"submit"}
                label={label}
            />
            {props.errorMessage && (
                <p className={"help text-center text-red-600"}>{props.message}</p>
            )}
            {props.status === 201 && (
                <p className={"help text-center text-green-600"}>{props.message}</p>
            )}

            <span className="text-grey-white d-block text-center mt-3 mb-2">
        {"Already have an account?"}&nbsp;
                <Link variant="primary" className="text-white" href={"/login"}>
          Log in
        </Link>
      </span>

            {/* <Button
        variant="primary"
        size="md"
        className="mb-4"
        disabled={isLoading}
        loading={isLoading}
        onClick={() => handleSocialLogin("twitter")}
        outline
      >
        <div className="flex flex-row justify-start items-center w-100">
          <FaTwitter className="text-damirifa-red ml-4 mr-3 button-text" />
          <span className="text-damirifa-red button-text">Twitter</span>
        </div>
      </Button> */}
        </div>
    );
}
