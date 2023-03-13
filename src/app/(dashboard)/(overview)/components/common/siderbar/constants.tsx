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
  BiDashboard,
  BiNewWindow
} from "@components/icons";
import { RiDashboardFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { ViewTree } from "@components/navigator/constants";

import Badge from "@components/Badge";

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
    link: "/dashboard",
  },
  {
    label: "Announcements",
    Icon: EosClusterManagement,
    link: "/announcements",
  },
  {
    label: "Condolences",
    Icon: BiHeartEnvelope,
    link: "/condolences",
    badge: Notification,
  },
  {
    label: "Donations",
    Icon: BiDonateSolid,
    link: "/donations",
    badge: Notification,
  },
  {
    label: "Appreciations",
    Icon: BiAppreciation,
    link: "/appreciations",
  },
  {
    label: "Analytics",
    Icon: BiAnalytics,
    link: "/analytics",
  },
  {
    label: "Settings",
    Icon: IoIosSettings,
    link: "/settings",
  },
  {
    label: "Help",
    Icon: BiFeedback,
    link: "/help",
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
    link: "/overview",
  },
  {
    label: "Help",
    Icon: BiFeedback,
    link: "/overview",
  },
];
