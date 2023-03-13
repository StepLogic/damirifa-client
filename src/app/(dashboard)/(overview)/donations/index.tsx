/**
 *Project:damirifa
 *File:annoucement-overview
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React, { useRef } from "react";
import s from "./index.module.css";
import cn from "classnames";
import ViewHeading from "@components/ViewHeading";
import AddButton from "@components/AddButton";
import TabPane from "@components/tab-pane";
import { Image } from "@common-ui/index";
import { BiEdit } from "@components/icons";
import { Button } from "@components/ui/dashboard";
import { BiEditFill, BiHeartEnvelope } from "@components/icons";
import { useCSR } from "@components/navigator";
import { ViewTree } from "@components/navigator/constants";
import OptionsButtonTwo from "@components/OptionsButtonTwo";
import { BiNewWindow, BiDonate } from "@components/icons";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsCaretDown, BsCaretDownFill } from "react-icons/bs";
import Badge from "@components/Badge";
import SelectV2 from "@components/select-v2";
import DataTable from "./data-table";
import ThankYouItem from "./thank-you-item";
import DashboardLayout from "@layouts/dashboard/dashboard";
import { NextPageContext } from "next";
type Props = {
  className?: string;
};

function AnnouncementItem(props: any) {
  const { isDraft } = props;
  return (
    <li className={cn(s.grid, s.announcementItem)}>
      <div className="flex flex-row gap-[35px]">
        <Image
          src={"/constants/image-announcement.jpg"}
          alt={"announcement image"}
          className={s.image}
        />
        <div className="flex flex-col py-2">
          <p className={s.heading}>Mariam Makiba</p>
          <div className="flex flex-row items-center gap-2 mt-1 mb-1">
            <Badge bgColor={"#EDCFD0"} textColor={"#BA181B"}>
              obituary
            </Badge>
            <p className={s.timeLasted}>3 weeks ago</p>
          </div>
          <p className="text-[#B55E5E] opacity-70  text-[11px] leading-[140%]">
            Expires in <b>8 months</b>
          </p>
          <div className="flex flex-row gap-4 mt-auto items-center">
            <Button
              showTooltip="Edit Announcement"
              variant="icon"
              className="!p-0 text-2xl"
              onClick={() => props.setRoute(ViewTree.ANNOUNCEMENT)}
            >
              <BiEditFill color="#777777" />
            </Button>
            <Button
              showTooltip="Edit Announcement"
              variant="icon"
              className="!p-0 text-2xl"
            >
              <BiHeartEnvelope color="#777777" />
            </Button>
            <Button
              showTooltip="Edit Announcement"
              variant="icon"
              className="!p-0 text-2xl"
            >
              <BiNewWindow color="#777777" />
            </Button>
            <Button
              showTooltip="Edit Announcement"
              variant="icon"
              className="!p-0 text-2xl"
            >
              <BiDonate color="#777777" />
            </Button>
            <OptionsButtonTwo />
          </div>
        </div>
      </div>
      <div className={"flex flex-row items-center mb-auto"}>
        {isDraft ? (
          <AiFillEyeInvisible
            className="text-xl opacity-70"
            color="#000000;
"
          />
        ) : (
          <AiFillEye className="text-xl" color="#50AAA6" />
        )}
        <p className="ml-2 mr-8  text-[#5E5E5E] text-[14px] px-[3px] py-[9px]">
          {isDraft ? "Draft" : "Live"}
        </p>
        <BsCaretDownFill />
      </div>
      <div className={"flex flex-col py-2"}>
        <p className="text-[#5E5E5E]  text-[14px] leading-[140%]">
          Jun 21, 2022
        </p>
        <p className="text-[#5E5E5E] opacity-70  text-[12px] leading-[140%]">
          Published
        </p>
      </div>
      <div className={"flex flex-col py-2"}>
        {isDraft ? (
          <div className="!bg-[#BA181B] !mt-[16px] h-[2px] w-[10px] mb-[4px]" />
        ) : (
          <p className="text-[#5E5E5E] tracking-[0.0041em] text-[20px] leading-[140%]">
            72
          </p>
        )}
        {isDraft ? (
          <p className="text-[#5E5E5E] text-[12px] font-[400] opacity-70 ">
            Not setup
          </p>
        ) : (
          <p className="text-[#065FD4] opacity-70  text-[12px] leading-[140%]">
            All condolences
          </p>
        )}
      </div>
      <div className={"flex flex-col py-2"}>
        {isDraft ? (
          <div className="!bg-[#BA181B] !mt-[16px] h-[2px] w-[10px] mb-[4px]" />
        ) : (
          <p className="text-[#5E5E5E] tracking-[0.0041em] text-[14px] leading-[140%]">
            GHS 5,490.00
          </p>
        )}
        {isDraft ? (
          <p className="text-[#5E5E5E] text-[12px] font-[400] opacity-70">
            Not setup
          </p>
        ) : (
          <p className="text-[#065FD4] opacity-70  text-[12px] leading-[140%]">
            All condolences
          </p>
        )}
      </div>
    </li>
  );
}

function AnnouncementItemNotSetup() {
  return (
    <div className={s.obituaryNotSetup}>
      <Image
        src={"/constants/image-announcement.jpg"}
        alt={"announcement image"}
        className={s.image}
      />
      <div className="flex flex-col py-[1.25rem] w-full">
        <p className={s.heading}>Mariam Makiba</p>
        <Badge
          className={"font-[500] w-[64px]"}
          bgColor={"#EDCFD0"}
          textColor={"#BA181B"}
        >
          obituary
        </Badge>
        <p className={s.timeLasted}>
          Purchased <b>3 weeks ago</b>
        </p>
        <Button
          variant="outline"
          color="secondary"
          className="!text-[#BA181B] text-[14px] font-[500] !h-[36px] mt-auto ml-auto"
          label={"Setup"}
        />
      </div>
    </div>
  );
}

function AllDonations(props) {
  return (
    <div className={cn("flex flex-col scrollbar", s.view)}>
      <SelectV2
        icon={AiOutlineClockCircle}
        placeholder={"All Time"}
        className={"mb-9"}
      />
      <DataTable />
    </div>
  );
}

const Donations = (props: Props) => {
  const { className } = props;
  const navigator = useCSR();
  return (
    <div className={cn(s.root, "h-full", className)}>
      <ViewHeading label="Donations" className={"mb-[30px]"} />
      <TabPane>
        <TabPane.Tab name={"Donations"}>
          <AllDonations navigator={navigator} />
        </TabPane.Tab>
        <TabPane.Tab name={"Thank Yous"}>
          <ul className={cn("mt-4 scrollbar", s.list)}>
            <ThankYouItem />
            <ThankYouItem />
            <ThankYouItem />
            <ThankYouItem />
            <ThankYouItem />
          </ul>
        </TabPane.Tab>
      </TabPane>
    </div>
  );
};
Donations.Layout = DashboardLayout;
export default Donations;
export async function getServerSideProps({ req, res }: NextPageContext) {
  // const isLoggedIn = getCookies({ req, res }); // - server si
  // return checkLoggedIn("/login", isLoggedIn);
  // const value = getCookies({ req, res }); // - server si
  // const _json = JSON.parse(value["dashboard-history"] || "{}");
  return {
    props: {},
    // redirect: {
    //   destination: "/dashboard/overview",
    //   permanent: false,
    // },
  };
}
