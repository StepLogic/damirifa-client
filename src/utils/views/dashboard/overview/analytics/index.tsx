/**
 *Project:damirifa
 *File:analytics
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React from "react";
import s from "./index.module.css";
import cn from "classnames";
import AnalyticsCard from "./analytics-card";
import { ViewTree } from "@components/navigator/constants";
import ViewHeading from "@components/ViewHeading";
import DataTable from "./data-table";
type Props = {
  className?: string;
};

const Analytics = (props: Props) => {
  const { className } = props;
  return (
    <div className={cn(s.root, className)}>
      <ViewHeading label="Analytics" className={"mb-[30px]"} />
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
      <p className={s.label}>Top Announcements</p>
      <DataTable />
    </div>
  );
};

export default Analytics;
