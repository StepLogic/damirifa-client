import { useCSR } from "@components/navigator";
import { Select } from "@components/ui/dashboard";
import ViewHeading from "@components/ViewHeading";
import s from "./index.module.css";
import DashboardLayout from "@layouts/dashboard/dashboard";
import cn from "classnames";
import SelectV2 from "@components/select-v2";
import { useState } from "react";
import { DaDone } from "@components/icons/Illustrations";
import ThankYouItem from "../thank-you-item";
// import ThankYouItem from "./thank-you-item";
type Props = {};
const AllThankYous = (props: Props) => {
  //   const { className } = props;
  const navigator = useCSR();
  const [hidden, setHidden] = useState(false);
  return (
    <div className={"h-full"}>
      <ViewHeading label="Announcement Thank Yous" className={"mb-[30px]"} />
      <div className="mt-4 mb-4">
        <SelectV2 className={s.select} />
      </div>
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
        <ul className={cn("mt-4 scrollbar", s.list)}>
          <ThankYouItem noImage={true} />
          <ThankYouItem noImage={true} />
          <ThankYouItem noImage={true} />
          <ThankYouItem noImage={true} />
          <ThankYouItem noImage={true} />
          <ThankYouItem noImage={true} />
        </ul>
      )}
    </div>
  );
};
const Layout = ({ children }) => (
  <DashboardLayout sideBarAlt={true}>{children} </DashboardLayout>
);
AllThankYous.Layout = Layout;

export default AllThankYous;
