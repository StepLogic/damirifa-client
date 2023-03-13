import { NextSeo } from "next-seo";
import { seoDescription, seoSiteUrl, seoTitleTemplate } from "./DefaultValues";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { v4 as uuid4 } from "uuid";
export const uuid = () => {
  return uuid4();
};
export const queryString = (params: any) => {
  return Object.keys(params)
    .map((key) => {
      return `${key}=${params[key]}`;
    })
    .join("&");
};
export const isEmail = (emailAddress: string) =>
  !!emailAddress.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

export const isPhone = (phoneNumber: string | undefined) =>
  !!phoneNumber &&
  !!phoneNumber.match(/^(024|054|055|026|059|057|056|020|050|027)\d{7}$/);

// validate a password. should be at least 6 characters long and contain at least one number, one letter and one special character
export const isPassword = (password: string) =>
  !!password.match(/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/);

// check if password has at least one number
export const hasNumber = (password: string) => !!password.match(/^(?=.*\d)/);

// check if password has at least one letter
export const hasLetter = (password: string) =>
  !!password.match(/^(?=.*[A-Za-z])/);

// check if password has at least one special character
export const hasSpecialCharacter = (password: string) =>
  !!password.match(/^(?=.*[@$!%*?&])/);

export const checkLoggedIn = (redirectTo: string, isLoggedIn?: any) => {
  if (typeof isLoggedIn !== "undefined" || isLoggedIn !== null) {
    if (Boolean(isLoggedIn)) {
      return {
        redirect: {
          permanent: false,
          destination: redirectTo,
        },
        props: {},
      };
    } else {
      return {
        props: {}, // will be passed to the page component as props
      };
    }
  } else {
    return {
      props: {}, // will be passed to the page component as props
    };
  }
};
export const stringToBoolean = (string: any) => {
  switch (string.toString().toLowerCase().trim()) {
    case "true":
    case true:
    case "1":
      return true;

    case "false":
    case false:
    case "0":
      return false;

    default:
      return Boolean(string);
  }
};
export const isValueUndefined = (object: unknown) => {
  return typeof object === "undefined";
};
export const MetaTags = ({ title }: any) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        titleTemplate={seoTitleTemplate}
        title={title}
        description={seoDescription}
        canonical={`${seoSiteUrl}/${router.pathname}`}
        openGraph={{
          url: `${seoSiteUrl}/${router.pathname}`,
          title: `${title} | Damirifa.com`,
          description: seoDescription,
        }}
      />
      <Head>
        <title>{title}&nbsp;|&nbsp;Damirifa.com</title>
      </Head>
    </>
  );
};

export const countdown = (
  duration: number,
  display: any,
  callback = () => {}
) => {
  let timer = duration,
    seconds;
  const interval = setInterval(() => {
    timer--;
    seconds = parseInt(String(timer % 60), 10);

    display("Resend in " + seconds + " seconds");
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    display("0:00");
    callback();
  }, duration * 1000);
};
export const popupCenter = (url: string, title: string) => {
  const dualScreenLeft = window.screenLeft ?? window.screenX;
  const dualScreenTop = window.screenTop ?? window.screenY;

  const width =
    window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

  const height =
    window.innerHeight ??
    document.documentElement.clientHeight ??
    screen.height;
  const calcZoom = width / window.screen.availWidth;
  console.log("Calculate Zoom", calcZoom);
  const systemZoom = calcZoom;

  const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
  const top = (height - 550) / 2 / systemZoom + dualScreenTop;

  //   const newWindow = window.open(
  //     url,
  //     title,
  //     `width=${500 / systemZoom},height=${
  //       550 / systemZoom
  //     },top=${top},left=${left}`
  //   );
  //   const newWindow = window.open(url, title, `popup=1`);
  const newWindow = window.open(
    url,
    title,
    `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`
  );
  //   const newWindow = window.open(
  //     url,
  //     title,
  //     `popup=true,fullscreen=no,location=no,width=${
  //       screen.width * systemZoom
  //     },height=${screen.height * systemZoom},top=${0},left=${0}`
  //   );

  newWindow?.focus();
};
