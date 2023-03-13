
" use client"
import { DaDone } from "@components/icons/Illustrations";
import { useCSR } from "@components/navigator";
import { Button } from "@components/ui/dashboard";
import ViewHeading from "@components/ViewHeading";
import cn from "classnames";
import { useState } from "react";

import s from "./index.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import AppreciationItem from "../appreciation-item";
import { NextPageContext } from "next";
import DashboardLayout from "@layouts/dashboard/dashboard";

type Props = {};
const AllAppreciations = (props: Props) => {
  //   const { className } = props;
  const navigator = useCSR();
  const [hidden, setHidden] = useState(false);
  return (
    <div className={"h-full"}>
      <ViewHeading label="Announcement Appreciation" className={"mb-[30px]"}>
        <Button className="" variant="outline" color="secondary">
          <AiOutlinePlus color=" #BA181B" />
          &nbsp;New
        </Button>
      </ViewHeading>
      {hidden ? (
        <div
          className={cn(
            s.list,
            "h-full justify-center gap-6 items-center flex flex-col"
          )}
        >
          <DaDone />
          <p className={s.label}>Awesome work, you are all caught up!</p>
        </div>
      ) : (
        <ul className={cn("mt-20 scrollbar", s.list)}>
          <AppreciationItem noImage={true} />
          <AppreciationItem noImage={true} />
          <AppreciationItem noImage={true} />
        </ul>
      )}
    </div>
  );
};
const Layout = ({ children }) => (
  <DashboardLayout sideBarAlt={true}>{children} </DashboardLayout>
);
AllAppreciations.Layout = Layout;
// .Layout = ({ children }) => (
//   <DashboardLayout sideBarAlt={true}>{children} </DashboardLayout>
// );
export default AllAppreciations;
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
