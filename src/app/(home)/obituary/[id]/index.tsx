import ThankYou from "@components/cards/obituary-page-cards/premium/thank-you";
import { ObituaryPremium, Slider } from "@components/carousel";
import { BiGong } from "@components/icons";
import { ModalRef } from "@components/modals/premium-modal";
import { Button, Link, LoadingDots } from "@common-ui/index";
import { HighlightPhotos } from "@features/premium-obituary";
import Audio from "@features/premium-obituary/audio";
import MainLayout from "@layouts/../../(home)/layout";
import useWindowWide from "@lib/hooks/useWidth";
import { MetaTags } from "@lib/Utils";
import cn from "classnames";
import throttle from "lodash.throttle";
import { NextPageContext } from "next";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { BsPause } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import s from "./index.module.css";
import { queryString } from "@lib/Utils";
import Premium from "./premium";
import StandardDesign from "./standard";
import { GalleryImages, PremiumPlaceholderInformation } from "@lib/Constants";

const Page = ({ type, id, data }: any) => {
  const getPage = (type: string) => {
    switch (type) {
      case "premium":
        console.log("data", data);
        return <Premium id={id} data={data} />;
      case "standard":
        return <StandardDesign id={id} data={data} />;
    }
  };
  return <>{getPage(type)}</>;
};

const Layout: React.FC = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const { width } = useWindowWide();

  useEffect(() => {
    const detectScroll = throttle(() => {
      let offset = 100;
      if (width < 583) {
        offset = 10;
      }
      if (window.pageYOffset > offset) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    }, 200);
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, [width]);

  return (
    <MainLayout transparentNavbar={toggle} noPadAppContainer={true}>
      {children}
    </MainLayout>
  );
};
Page.Layout = Layout;
export default Page;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.query;
  console.log("req", context.previewData);
  const data =
    req.id !== "preview" ? PremiumPlaceholderInformation : context.previewData;
  return {
    props: {
      type: req.type ? req.type : "premium",
      id: req.id,
      data,
    },
  };
}
