import { ComponentType } from "react";
import {
  EosClusterManagement,
  BiHeartEnvelope,
  BiAnalytics,
  BiFeedback,
  BiEdit,
  BiEditFill,
  BiDonateSolid,
  BiAppreciation,
} from "@components/icons";
import { RiDashboardFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { ViewTree } from "@components/navigator/constants";
import { BiNewWindow } from "@components/icons/index";
import Badge from "@components/Badge";
import { BiDashboard } from "../../../../../components/icons";
export function Notification() {
  return (
    <Badge
      className={"font-[500] ml-auto"}
      bgColor={"#E8F1EE"}
      textColor={"#2DA378"}
    >
      +15
    </Badge>
  );
}
export const MenuItems: Array<{
  label: string;
  Icon: ComponentType<{ color?: string }>;
  link: string;
  badge?: ComponentType<{ color?: string }>;
}> = [
  {
    label: "Overview",
    Icon: BiDashboard,
    link: "/dashboard/overview",
  },
  {
    label: "Announcements",
    Icon: EosClusterManagement,
    link: ViewTree.ANNOUNCEMENTS_OVERVIEW,
  },
  {
    label: "Condolences",
    Icon: BiHeartEnvelope,
    link: ViewTree.CONDOLENCES_OVERVIEW,
    badge: Notification,
  },
  {
    label: "Donations",
    Icon: BiDonateSolid,
    link: ViewTree.DONATIONS_OVERVIEW,
    badge: Notification,
  },
  {
    label: "Appreciations",
    Icon: BiAppreciation,
    link: ViewTree.APPRECIATIONS_OVERVIEW,
  },
  {
    label: "Analytics",
    Icon: BiAnalytics,
    link: ViewTree.ANALYTICS_OVERVIEW,
  },
  {
    label: "Settings",
    Icon: IoIosSettings,
    link: "/dashboard/overview",
  },
  {
    label: "Help",
    Icon: BiFeedback,
    link: "/dashboard/overview",
  },
];
export const MenuItemsAlt: Array<{
  label: string;
  Icon: ComponentType<{ color?: string }>;
  link: string;
  badge?: ComponentType<{ color?: string }>;
}> = [
  {
    label: "Edit Announcement",
    Icon: BiEditFill,
    link: ViewTree.EDIT_ANNOUNCEMENT,
  },
  {
    label: "View Published",
    Icon: BiNewWindow,
    link: ViewTree.ANNOUNCEMENTS_OVERVIEW,
  },
  {
    label: "Condolences",
    Icon: BiHeartEnvelope,
    link: ViewTree.CONDOLENCES_OVERVIEW,
    badge: Notification,
  },
  {
    label: "Donations",
    Icon: BiDonateSolid,
    link: ViewTree.DONATIONS_OVERVIEW,
    badge: Notification,
  },
  {
    label: "Appreciations",
    Icon: BiAppreciation,
    link: ViewTree.APPRECIATIONS_OVERVIEW,
  },
  {
    label: "Analytics",
    Icon: BiAnalytics,
    link: ViewTree.ANALYTICS_OVERVIEW,
  },
  {
    label: "Settings",
    Icon: IoIosSettings,
    link: "/dashboard/overview",
  },
  {
    label: "Help",
    Icon: BiFeedback,
    link: "/dashboard/overview",
  },
];
