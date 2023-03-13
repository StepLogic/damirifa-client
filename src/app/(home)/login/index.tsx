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

export default function Login() {
  const router = useRouter();
  // const [captcha, setCaptcha] = useState<string>();
  const isProcess = useRef(false);
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState(false);
  const { isLoading } = useAppSelector((state) => state.loading);
  const { status, message, isLoggedIn, provider } = useAppSelector(
    (state) => state.auth
  );

  const LoginSchema = Yup.object().shape({
    user_id: Yup.string()
      .required("Email or Ghana Phone Number is required")
      .test(
        "verify-input",
        "Please enter a valid email or Ghana phone number",
        function (value) {
          return isPhone(String(value) || "") || isEmail(String(value) || "");
        }
      ),
    password: Yup.string().required("Password is required"),
    captcha: Yup.string().required("Captcha is required"),
  });

  const defaultValues: FieldValues = {
    user_id: "",
    password: "",
    captcha: "",
  };

  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: LoginInterface) => {
    isProcess.current = true;
    setErrorMessage(false);
    dispatch(requestLogin(data.user_id, data.password, data.captcha));
  };

  // const resetCaptcha = () => {
  //   setCaptcha("");
  //   setTimeout(() => {
  //     setCaptcha(
  //       "https://connect.damirifa.com/api/v1/user/captcha?namespace=login"
  //     );
  //   }, 1500);
  // };

  // useEffect(() => {
  //   dispatch(resetStatus());
  //   setCaptcha(
  //     "https://connect.damirifa.com/api/v1/user/captcha?namespace=login"
  //   );
  // }, []);

  useEffect(() => {
    if (status === 100) return;
    if (status === 200 && isLoggedIn) {
      setErrorMessage(false);
      reset();
      dispatch(resetStatus());
      setTimeout(() => router.push("/"), 1000);
      return;
    }

    if (isProcess.current && !isLoading) {
      isProcess.current = false;
      setErrorMessage(true);
      // if (message.indexOf("security") == -1) {
      //   resetCaptcha();
      // }
    }
  }, [isProcess.current, status, isLoading]);

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

  return (
    <>
      <MetaTags title={"Login"} />
      <div className="bg-black">
        <Poster src={"#"} title={"Login"} className={cn("mb-5", s.poster)} />
        <section className={s.section}>
          <div
            className={
              "flex flex-col lg:flex-row items-center lg:items-baseline "
            }
          >
            <div
              className={cn(
                "flex flex-col items-center lg:pr-4 lg:mt-10  mb-4 lg:mb-0 flex-auto"
              )}
            >
              <h3 className="text-grey-white text-center mb-3">
                You can login using
              </h3>
              <Button
                size="md"
                type={"button"}
                variant="primary"
                outline
                className="mb-4"
                disabled={isLoading}
                loading={isLoading}
                onClick={() => handleSocialLogin("google")}
              >
                <div className="flex flex-row justify-start items-center w-full">
                  <AiOutlineGoogle className="text-damirifa-red  lg:ml-10 lg:mr-3 ml-14 mr-2 button-text" />
                  <span className="text-damirifa-red button-text mr-auto">
                    Google
                  </span>
                </div>
              </Button>
              <Button
                size="md"
                type={"button"}
                variant="primary"
                outline
                disabled={isLoading}
                loading={isLoading}
                className="mb-4"
                onClick={() => handleSocialLogin("facebook")}
              >
                <div className="flex flex-row justify-start items-center w-full">
                  <FaFacebookF className="text-damirifa-red  lg:ml-10 lg:mr-3 ml-14 mr-2 button-text" />
                  <span className="text-damirifa-red button-text mr-auto">
                    Facebook
                  </span>
                </div>
              </Button>
              {/* <Button
            size="md"
            type={"button"}
            variant="primary"
            outline
            disabled={isLoading}
            loading={isLoading}
            className="mb-4"
            onClick={() => handleSocialLogin("twitter")}
          >
            <div className="flex flex-row justify-start items-center w-full">
              <FaTwitter className="text-damirifa-red  lg:ml-10 lg:mr-3 ml-14 mr-2 button-text" />
              <span className="text-damirifa-red button-text mr-auto">
                Twitter
              </span>
            </div>
          </Button> */}
              <div
                className="flex flex-row lg:hidden items-center w-full mt-2 mb-4 lg:mt-10 text-white justify-between"
                // style={{ paddingRight: 0 }}
              >
                <Divider
                  variant="secondary"
                  height="very-thin"
                  className="w-5/12"
                />
                <span>&nbsp;or&nbsp;</span>
                <Divider
                  variant="secondary"
                  height="very-thin"
                  className="w-5/12"
                />
              </div>
            </div>
            <div className={cn("w-full flex-auto px-3")}>
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <>
                  <div className={cn(s.fields, "px-3")}>
                    <section className={"px-3 w-full"}>
                      <TextWrapper
                        name={"user_id"}
                        type="text"
                        variant="primary"
                        label="Email or Phone Number"
                        required
                        className="text-white"
                        placeholder={" or Ghana Phone Number"}
                      />
                      <div
                        className={
                          "text-grey-white block text-sm self-start text-center xl:text-left mb-10 mt-2"
                        }
                        style={{ width: "fit-content" }}
                      >
                        {"Don't have an account ?"}&nbsp;&nbsp;
                        <Link href="/src/app/(home)/register" variant="primary">
                          Register here.
                        </Link>
                      </div>

                      <TextWrapper
                        name={"password"}
                        type="password"
                        label="Password"
                        required
                        className={"mb-2"}
                        variant="primary"
                        placeholder={"Password"}
                      />

                      <Link
                        href="/src/app/(home)/register"
                        className="text-sm mb-3"
                        variant="primary"
                      >
                        Forgot Password&nbsp;?
                      </Link>
                      {/* <div className="my-2 flex flex-row">
                       <div className={'mx-2 h-14 w-52'}>
                         <a
                             onClick={resetCaptcha}
                             className="text-sm mb-3 text-white"
                         >
                           Refresh Captcha
                         </a>

                         <img  src={captcha ? captcha : '/svgs/spinner.svg'}  className={'mt-1 h-14 w-full'}  />
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
                    </section>
                  </div>
                  <div className="flex flex-col items-center alt-register mx-auto lg:mt-7 lg:mb-7 mt-8 mb-2">
                    {errorMessage && (
                      <p
                        className={
                          "help text-red-600 flex flex-row items-start gap-2"
                        }
                      >
                        {message && (
                          <>
                            <FiAlertCircle className="text-3xl" />
                            &nbsp;There is an issue:&nbsp;{message}.
                          </>
                        )}
                      </p>
                    )}

                    {status === 200 && (
                      <p className={"help text-green-600"}>{message}</p>
                    )}
                    <Button
                      className={"mb-3 mt-4"}
                      pill
                      variant="primary"
                      size="md"
                      type={"submit"}
                      disabled={!isValid || isLoading}
                      label={"Log In"}
                      loading={isLoading}
                    />
                  </div>
                </>
              </FormProvider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
