import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import userInfoModel from "../models/userInfoModel";
import transactionHistoryModel from "../models/transactionHistoryModel";
import errorModel from "../models/errorModel";

interface UserState {
  isLogin: boolean | null;
  token: string | null;
  loading: boolean;
  userInfo: userInfoModel | null;
  transactionHistory: transactionHistoryModel[];
  error: string | null;
}

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const tokenFromStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")!)
  : null;

const isLogin = userInfoFromStorage ? true : false;

const initialState: UserState = {
  isLogin: isLogin,
  token: tokenFromStorage,
  loading: false,
  userInfo: userInfoFromStorage,
  transactionHistory: [],
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginRequest: (state) => {
      state.loading = true;
    },

    userLogin: (state, action: PayloadAction<userInfoModel>) => {
      state.loading = false;
      state.isLogin = true;
      state.token = action.payload.token!;
      state.userInfo = {
        name: action.payload.name,
        email: action.payload.email,
        bankAccount: action.payload.bankAccount,
        isAdmin: action.payload.isAdmin,
      };
    },

    userLoginFail: (state, action: PayloadAction) => {
      state.loading = false;
      state.error = action.payload!;
    },

    userLogout: (state) => {
      state.loading = false;
      state.isLogin = false;
      state.token = null;
    },
  },
});

export const { userLoginRequest, userLogin, userLoginFail, userLogout } =
  userSlice.actions;
export default userSlice.reducer;
