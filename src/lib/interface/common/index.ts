/**
 * Project: damirifa
 * File: index
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */
import { Banner } from "@lib/interface/homepage/banner";
import { SpecialAnnouncement } from "@lib/interface/homepage/special";
import { FeaturedAnnouncements } from "@lib/interface/homepage/featured";
import { Notices } from "@lib/interface/homepage/notices";
import { RecentObituaries } from "@lib/interface/homepage/obituaries";

export interface ICommonResponse {
  status: number;
  message: string;
  data?: any[]
}

export interface ILoading {
  isLoading: boolean;
}
