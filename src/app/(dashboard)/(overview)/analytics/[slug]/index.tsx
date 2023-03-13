import { useCSR } from "@components/navigator";
import { ViewTree } from "@components/navigator/constants";
import ViewHeading from "@components/ViewHeading";
import cn from "classnames";
import { useState } from "react";

import s from "./index.module.css";
import DashboardLayout from "@layouts/dashboard/dashboard";
import AnalyticsCard from "../analytics-card";
import DonorTable from "../donor-table";
type Props = {};
const AnnouncementAnalytic = (props: Props) => {
  const { className } = props;
  const navigator = useCSR();
  const [hidden, setHidden] = useState(false);
  return (
    <div className={cn(s.root, className)}>
      <ViewHeading label="Announcement  Analytics" className={"mb-[30px]"} />
      <div className={s.cards}>
        <AnalyticsCard
          title="Donations"
          value="575"
          criticalText="+60"
          information="in last 30 days"
          buttonLabel="All Donations"
          buttonLink={ViewTree.DONATIONS_OVERVIEW}
        />
        <AnalyticsCard
          title="Amount"
          value="GHS 40,692.00"
          criticalText="+GHS 5,000"
          information="in last 30 days"
          // buttonLabel="All Donations"
          // buttonLink={ViewTree.DONATIONS_OVERVIEW}
        />
        <AnalyticsCard
          title="Condolences"
          value="700"
          criticalText="+60"
          information="in last 30 days"
          buttonLabel="All Condolences"
          buttonLink={ViewTree.CONDOLENCES_OVERVIEW}
        />
        <AnalyticsCard
          title="Thank Yous"
          value="575"
          criticalText="+60"
          information="in last 30 days"
          buttonLabel="All Thank Yous"
          buttonLink={ViewTree.DONATIONS_OVERVIEW}
        />
      </div>
      <p className={s.label}>Top 10 Donors</p>
      <DonorTable />
    </div>
  );
};
const Layout = ({ children }) => (
  <DashboardLayout sideBarAlt={true}>{children} </DashboardLayout>
);
AnnouncementAnalytic.Layout = Layout;
export default AnnouncementAnalytic;
