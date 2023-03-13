/**
 * Project: damirifa
 * File: index
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */
import {Image} from "@lib/interface/homepage/banner";

export interface RegisterRequestState {
  first_name: string;
  last_name: string;
  country_code: string;
  contact: string;
  password: string;
  confirm_password: string;
}

export interface SocialLoginState {
  access_token: string;
  provider: string;
  data: {
    id: string;
    name: string;
    email: string;
  }
}

export interface IAuthState {
  isLoggedIn: boolean;
  token: string;
  message: string;
  status: number;
  provider: string
  user?:  ILoginResponse["data"]
}

export interface ILoginResponse {
  message: string;
  token: string;
  status: number
  is_new?: boolean
  data: {
    id: string;
    email: string;
    first_name: string
    other_names: string
    phone: string
    name: string
    avatar: Image | 0
  };
}

export interface Login {
  user_id: string,
  password: string
  captcha: string
}
