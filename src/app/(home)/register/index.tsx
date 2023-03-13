import FormProvider from "@components/forms/form-provider";
import CheckboxWrapper from "@components/integrations-only/CheckboxWrapper";
import TextWrapper from "@components/integrations-only/TextWrapper";
import { Button, Collapse, Divider, Link } from "@common-ui/index";
import { StepperRef } from "@common-ui/step-wizard";
import Poster from "@features/common/poster";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "@lib/hooks/appHooks";
import { RegisterRequestState } from "@lib/interface/auth";
import {
  hasLetter,
  hasNumber,
  hasSpecialCharacter,
  isEmail,
  isPassword,
  isPhone,
  MetaTags,
} from "@lib/Utils";
import {
  requestOTP,
  requestRegister,
  requestSocialLogin,
  resetStatus,
} from "@store/actions/authActions";
import { disableLoader, enableLoader } from "@store/actions/commonActions";
import cn from "classnames";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaCheckCircle, FaFacebookF, FaTimesCircle } from "react-icons/fa";
import * as Yup from "yup";
import s from "./index.module.css";
import CountrySelectorWrapper from "@components/integrations-only/CountrySelectorWrapper";
import { FiAlertCircle } from "react-icons/fi";
import { signInWithFacebook, signInWithGoogle } from "@services/firebase";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

export default function Register() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isProcess = useRef(false);
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState(false);
  const [contact, setContact] = useState("");
  const [firstName, setFirstName] = useState("");
  const [regMode, setRegMode] = useState("email");

  const [otpVerified, setOTPVerified] = useState(false);
  const [sendOTPReq, setSendOTPReq] = useState(false);
  const [disableContinue, setDisableContinue] = useState(true);
  const [hasL, setHasL] = useState(false);
  const [hasN, setHasN] = useState(false);
  const [hasS, setHasS] = useState(false);
  const [isValid, setIsVal] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const { isLoading } = useAppSelector((state) => state.loading);
  const { status, message, provider, isLoggedIn } = useAppSelector(
    (state) => state.auth
  );

  const RegisterSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    other_names: Yup.string().required("Last Name is required"),
    country_code: Yup.string().required("Select a country"),
    contact: Yup.string().test(
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
      .oneOf(
        [Yup.ref("password"), null],
        "Confirm Password does not match Password"
      ),
    agree: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
  });

  const defaultValues: FieldValues = {
    first_name: "",
    other_names: "",
    contact: "",
    password: "",
    confirm_password: "",
    country_code: "",
    code: "",
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
    formState: { isValid: passedErrors },
  } = methods;

  const onSubmit = useCallback(
    (data: RegisterRequestState) => {
      isProcess.current = true;
      setErrorMessage(false);
      if (otpVerified) {
        dispatch(requestRegister(data));
      } else {
        alert("Please verify your email/phone before proceeding");
      }
    },
    [dispatch, otpVerified]
  );

  const handleOTP = (data: RegisterRequestState) => {
    isProcess.current = true;
    setErrorMessage(false);
    setSendOTPReq(true);
    dispatch(requestOTP(data));
  };

  useEffect(() => {
    const subscription = watch((value) => {
      if (
        value.first_name.length >= 2 &&
        value.other_names.length >= 2 &&
        value.country_code !== ""
      )
        setDisableContinue(false);
      setContact(value.contact);
      setFirstName(value.first_name);

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
    if (isLoggedIn) {
      router.push("/dashboard").then((_r) => "");
    }
  }, [isLoggedIn]);

  const handleSocialLogin = async (provider: string) => {
    dispatch(enableLoader());

    if (provider === "facebook") {
      try {
        const result = await signInWithFacebook();

        const credential = FacebookAuthProvider.credentialFromResult(result);

        if (credential) {
          dispatch(
            requestSocialLogin({
              access_token: credential.accessToken || "",
              provider,
              data: {
                id: result.user?.uid || "",
                name: result.user?.displayName || "",
                email: result.user?.email || "",
              },
            })
          );
        } else {
          console.error("Invalid facebook access token. Retry");
          dispatch(disableLoader());
        }
      } catch (error) {
        // @ts-ignore
        const errorMessage = error.message;
        console.error(errorMessage || "An error occurred. Retry");
        dispatch(disableLoader());
      }
    } else if (provider === "google") {
      try {
        const result = await signInWithGoogle();

        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          dispatch(
            requestSocialLogin({
              access_token: credential.idToken || "",
              provider,
              data: {
                id: result.user?.uid || "",
                name: result.user?.displayName || "",
                email: result.user?.email || "",
              },
            })
          );
        } else {
          console.error("Invalid google access token. Retry");
          dispatch(disableLoader());
        }
      } catch (error) {
        // @ts-ignore
        const errorMessage = error.message;
        dispatch(disableLoader());
        console.error(errorMessage || "An error occurred. Retry");
      }
    }
  };

  useEffect(() => {
    if (status === 100) return;
    if (status === 201) {
      setErrorMessage(false);
      reset();
      dispatch(resetStatus());
      setTimeout(() => router.push("/login"), 1000);
      return;
    }
    if (status === 200) {
      setErrorMessage(false);
      setOTPVerified(true);
      setTimeout(() => dispatch(resetStatus()), 3000);
      return;
    }

    if (isProcess.current && !isLoading) {
      isProcess.current = false;
      setErrorMessage(true);
    }
  }, [status, isLoading, reset, router]);

  useEffect(() => {
    dispatch(resetStatus());
  }, []);

  return (
    <>
      <MetaTags title={"Register"} />
      <div className="bg-black">
        <Poster
          src={"#"}
          title={open ? "Create Account" : "Welcome"}
          className={cn("poster mb-5", s.poster)}
        />

        <section className={cn(s.section, "lg:px-9 px-6 mt-10")}>
          <FormProvider
            methods={methods}
            onSubmit={handleSubmit(otpVerified ? onSubmit : handleOTP)}
          >
            <fieldset
              className={cn("flex flex-col items-center", s.fieldsetRoot)}
            >
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
              <CountrySelectorWrapper className="mb-10" name={"country_code"} />
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

              <Collapse collapseBehavior={"hidden"} isOpen={open}>
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
                  firstName={firstName}
                  otpVerified={otpVerified}
                  sendOTPReq={sendOTPReq}
                  handleOTP={handleOTP}
                />
              </Collapse>
              <span className="text-grey-white d-block text-center mt-3 mb-2">
                {"Already have an account?"}&nbsp;
                <Link variant="primary" className="text-white" href={"/login"}>
                  Log in
                </Link>
              </span>
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
                onClick={() => handleSocialLogin("google")}
                size="md"
                type="button"
                variant="primary"
                outline
                className="mb-4"
              >
                <div className="flex flex-row justify-start items-center w-100">
                  <AiOutlineGoogle className="text-damirifa-red ml-1 mr-3 button-text" />
                  <span className="text-damirifa-red button-text">Google</span>
                </div>
              </Button>
              <Button
                variant="primary"
                size="md"
                className="mb-4"
                disabled={isLoading}
                type="button"
                loading={isLoading}
                onClick={() => handleSocialLogin("facebook")}
                outline
              >
                <div className="flex flex-row justify-start items-center w-100">
                  <FaFacebookF className="text-damirifa-red ml-4 mr-3 button-text" />
                  <span className="text-damirifa-red button-text">
                    Facebook
                  </span>
                </div>
              </Button>
            </fieldset>
          </FormProvider>
        </section>
      </div>
    </>
  );
}

function AuthView(props: any) {
  const stepperRef = useRef<StepperRef>(null);
  const { isLoading } = useAppSelector((state) => state.loading);
  // const [currentStep, setCurrentStep] = useState(1);
  const [label, setLabel] = useState("Verify");
  const { otpVerified, sendOTPReq } = props;
  // const [captcha, setCaptcha] = useState<string>();

  // const resetCaptcha = () => {
  //   setCaptcha("");
  //   setTimeout(() => {
  //     setCaptcha(
  //       "https://connect.damirifa.com/api/v1/user/captcha?namespace=register"
  //     );
  //   }, 1500);
  // };

  // useEffect(() => {
  //   setCaptcha(
  //     "https://connect.damirifa.com/api/v1/user/captcha?namespace=register"
  //   );
  // }, []);

  useEffect(() => {
    if (isEmail(props.contact)) {
      setLabel("Verify Email Address");
    } else if (isPhone(props.contact)) {
      setLabel("Verify Phone Number");
    } else {
      setLabel("Verify");
    }
    return () => {};
  }, [props.contact]);

  useEffect(() => {
    if (otpVerified) {
      setLabel("Complete Registration");
    } else {
      setLabel("Verify");
    }

    return () => {};
  }, [otpVerified]);

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <TextWrapper
        name="contact"
        type="text"
        className="mb-10"
        label="Email or Phone Number (e.g 0244-XXX-XXX)"
        placeholder={"Email or GH Phone Number e.g 0244-xxx-xxx"}
        required
        disabled={otpVerified}
      />

      <TextWrapper
        type="password"
        required
        label="Password"
        className="mb-4"
        name={"password"}
      />
      <div className="text-grey-white-2 self-start mb-10">
        <p className="mt-4 flex">
          Minimum of 8 characters
          <span className={"ml-2"}>
            {props.isVal ? (
              <FaCheckCircle className={"text-green-600 mt-1"} />
            ) : (
              <FaTimesCircle className={"text-red-600"} />
            )}
          </span>
        </p>

        <p className="my-1 flex">
          at least one number{" "}
          <span className={"ml-2"}>
            {props.hasN ? (
              <FaCheckCircle className={"text-green-600"} />
            ) : (
              <FaTimesCircle className={"text-red-600 mt-1"} />
            )}
          </span>
        </p>

        <p className="my-1 flex">
          at least one letter
          <span className={"ml-2"}>
            {props.hasL ? (
              <FaCheckCircle className={"text-green-600"} />
            ) : (
              <FaTimesCircle className={"text-red-600 mt-1"} />
            )}
          </span>
        </p>
        <p className="my-1 flex">
          at least one special character (e.g. #, @)
          <span className={"ml-2"}>
            {props.hasS ? (
              <FaCheckCircle className={"text-green-600"} />
            ) : (
              <FaTimesCircle className={"text-red-600 mt-1"} />
            )}{" "}
          </span>
        </p>
      </div>
      <br />
      <TextWrapper
        disableCopyAndPaste
        required
        label="Confirm Password"
        type="password"
        className="mb-10"
        name={"confirm_password"}
      />
      {sendOTPReq && (
        <>
          <div className="w-full mb-10">
            <p className={"font-bold mt-10 text-white"}>Enter Code</p>
            <TextWrapper
              type="text"
              maxLength={6}
              label={`A Verification Code has been sent to your ${
                isEmail(props.contact) ? "email address" : "phone number:"
              }`}
              className="mb-5"
              name={"code"}
            />
            <p
              className={
                "flex flex-row w-full justify-between items-center text-white "
              }
            >
              {isEmail(props.contact) &&
                "Tip: Check your Spam Folder if you can't find the email "}
              <Link
                href="@root/src/app/(home)/register/index#!"
                className="!underline"
                onClick={() =>
                  props.handleOTP({
                    contact: props.contact,
                    first_name: props.firstName,
                  })
                }
              >
                {label.includes("Email") &&
                  "Tip: Check your Spam Folder if you can't find the email. "}
                Resend Code
              </Link>
            </p>
          </div>

          {/* <div className="my-2 w-full flex flex-row">
            <div className={"mx-2 h-14 w-52"}>
              <a onClick={resetCaptcha} className="text-sm mb-3 text-white">
                Refresh Captcha
              </a>

              <img
                src={captcha ? captcha : "/svgs/spinner.svg"}
                className={"mt-1 h-14 w-full"}
              />
            </div>
            <TextWrapper
              name={"captcha"}
              type="number"
              label="Captcha Response"
              required
              className={"mb-2"}
              variant="primary"
              placeholder={"e.g 8"}
            />
          </div> */}
        </>
      )}
      <div className="flex flex-row items-center my-3">
        <CheckboxWrapper
          variant="primary"
          type={"checkbox"}
          className="mr-2"
          name={"agree"}
          registerOnlyLabel={true}
        />
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
        <p
          className={
            "help !text-xl text-red-600 flex flex-row items-start gap-2 my-5"
          }
        >
          {props.message && (
            <>
              <FiAlertCircle className="text-3xl" />
              &nbsp;There is an issue:&nbsp;{props.message}.
            </>
          )}
        </p>
        // <p className={"help text-center text-red-600"}>{props.message}</p>
      )}
      {props.status === 201 ||
        (props.status === 200 && (
          <p className={"help text-center text-green-600"}>{props.message}</p>
        ))}

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

// export async function getServerSideProps({ req, res }: NextPageContext) {
//   const isLoggedIn = getCookies({ req, res }); // - server si
//   return checkLoggedIn("/dashboard", isLoggedIn);
// }
