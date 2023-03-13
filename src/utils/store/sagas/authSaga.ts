/**
 * Project: damirifa
 * File: authSaga
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */
import { put, call, takeEvery } from "redux-saga/effects";
import {
  loginUser,
  socialLogin,
  registerUser,
  sendOTP,
  verifyOTP, fetchCaptcha,
} from "../../services/auth";
import * as authActions from "../actions/authActions";
import * as commonActions from "../actions/commonActions";
import { ICommonResponse } from "@lib/interface/common";
import * as types from "../actions/types";
import Axios, { AxiosResponse, AxiosError } from "axios";
import { setToken } from "@root/src/services/utils";

/**
 * User Password Login Saga
 * @param payload
 * @returns {IterableIterator<*>}
 */

function* passwordLogin(
  payload: ReturnType<typeof authActions.requestLogin>
): Generator<any, void, AxiosResponse["data"]> {
  yield put(commonActions.enableLoader());
  try {
    const response = yield call(loginUser, payload.user_id, payload.password, payload.captcha);

    if (response.status === 200) {
      yield put(authActions.onLoginResponse(response));
      yield put(commonActions.disableLoader());
    } else {
      yield put(authActions.loginFailed(response.data));
      yield put(commonActions.disableLoader());
    }
  } catch (e) {
    let response: ICommonResponse = {
      status: 422,
      message: "An unknown error occurred",
    };
    if (Axios.isAxiosError(e)) {
      const err = e as AxiosError;

      if (err.response) {
        // @ts-ignore
        response.status = err.response.data.status;
        // @ts-ignore
        response.status = err.response.data.message;
      } else {
        response.status = Number(err?.code);
        response.message = err?.message;
      }
    } else {
      if (e instanceof Error) {
        response.status = 419;
        response.message = e.message;
      }
    }

    yield put(authActions.loginFailed(response));
    yield put(commonActions.disableLoader());
  }
}

/**
 * User Social Login Saga
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* socialAsync(
  payload: ReturnType<typeof authActions.requestSocialLogin>
): Generator<any, void, AxiosResponse["data"]> {
  yield put(commonActions.enableLoader());
  try {
    const response = yield call(socialLogin, payload);

    if (response.status === 200) {
      setToken(response.token);
      yield put(authActions.onLoginResponse(response));
      yield put(commonActions.disableLoader());
    } else {
      yield put(authActions.loginFailed(response));
      yield put(commonActions.disableLoader());
    }
  } catch (e) {
    let response: ICommonResponse = {
      status: 422,
      message: "An unknown error occurred",
    };
    if (Axios.isAxiosError(e)) {
      const err = e as AxiosError;

      if (err.response) {
        // @ts-ignore
        response.status = err.response.data.status;
        // @ts-ignore
        response.status = err.response.data.message;
      } else {
        response.status = Number(err?.code);
        response.message = err?.message;
      }
    } else {
      if (e instanceof Error) {
        response.status = 419;
        response.message = e.message;
      }
    }

    yield put(authActions.loginFailed(response));
    yield put(commonActions.disableLoader());
  }
}

/**
 * User Registration Saga
 * @param payload
 * @returns {IterableIterator<*>}
 */

function* registerAsync(
  payload: ReturnType<typeof authActions.requestRegister>
): Generator<any, void, AxiosResponse["data"]> {
  yield put(commonActions.enableLoader());
  try {
    const response = yield call(registerUser, payload);
    if (response.status === 201) {
      yield put(commonActions.commonResponse(response));
    } else {
      yield put(commonActions.commonResponse(response.data));
    }

    yield put(commonActions.disableLoader());
  } catch (e: unknown) {
    let response: ICommonResponse = {
      status: 422,
      message: "An unknown error occurred",
    };
    if (Axios.isAxiosError(e)) {
      const err = e as AxiosError;

      if (err.response) {
        // @ts-ignore
        response.status = err.response.data.status;
        // @ts-ignore
        response.status = err.response.data.message;
      } else {
        response.status = Number(err?.code);
        response.message = err?.message;
      }
    } else {
      if (e instanceof Error) {
        response.status = 419;
        response.message = e.message;
      }
    }

    yield put(commonActions.commonResponse(response));
    yield put(commonActions.disableLoader());
  }
}

/**
 * Verification Saga
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* verifyAsync(
  payload: ReturnType<typeof authActions.requestVerification>
): Generator<any, void, AxiosResponse["data"]> {
  yield put(commonActions.enableLoader());
  try {
    const response = yield call(verifyOTP, payload.code);

    if (response.status === 200) {
      yield put(commonActions.commonResponse(response));
    } else {
      yield put(commonActions.commonResponse(response.data));
    }
    yield put(commonActions.disableLoader());
  } catch (e) {
    let response: ICommonResponse = {
      status: 422,
      message: "An unknown error occurred",
    };
    if (Axios.isAxiosError(e)) {
      const err = e as AxiosError;

      if (err.response) {
        // @ts-ignore
        response.status = err.response.data.status;
        // @ts-ignore
        response.status = err.response.data.message;
      } else {
        response.status = Number(err?.code);
        response.message = err?.message;
      }
    } else {
      if (e instanceof Error) {
        response.status = 419;
        response.message = e.message;
      }
    }

    yield put(commonActions.commonResponse(response));
    yield put(commonActions.disableLoader());
  }
}

/**
 * OTP Saga
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* OTPAsync(
  payload: ReturnType<typeof authActions.requestOTP>
): Generator<any, void, AxiosResponse["data"]> {
  yield put(commonActions.enableLoader());
  try {
    const response = yield call(sendOTP, payload);

    if (response.status === 200) {
      yield put(commonActions.commonResponse(response));
    } else {
      yield put(commonActions.commonResponse(response.data));
    }
    yield put(commonActions.disableLoader());
  } catch (e) {
    let response: ICommonResponse = {
      status: 422,
      message: "An unknown error occurred",
    };
    if (Axios.isAxiosError(e)) {
      const err = e as AxiosError;

      if (err.response) {
        // @ts-ignore
        response.status = err.response.data.status;
        // @ts-ignore
        response.status = err.response.data.message;
      } else {
        response.status = Number(err?.code);
        response.message = err?.message;
      }
    } else {
      if (e instanceof Error) {
        response.status = 419;
        response.message = e.message;
      }
    }

    yield put(commonActions.commonResponse(response));
    yield put(commonActions.disableLoader());
  }
}


/**
 * Logout Saga
 */
function* logoutAsync() {
  setToken("");
}

export default function* authSaga() {
  yield takeEvery(types.LOGIN_REQUEST, passwordLogin);
  yield takeEvery(types.SOCIAL_LOGIN_REQUEST, socialAsync);
  yield takeEvery(types.REGISTER_REQUEST, registerAsync);
  yield takeEvery(types.VERIFY_REQUEST, verifyAsync);
  yield takeEvery(types.OTP_REQUEST, OTPAsync);
  yield takeEvery(types.LOG_OUT, logoutAsync);
}
