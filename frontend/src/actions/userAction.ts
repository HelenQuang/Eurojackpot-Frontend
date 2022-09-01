import axios from "axios";

import {
  userLogin,
  userLogout,
  userLoginFail,
  userLoginRequest,
} from "../slices/userSlice";

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
    } catch (error) {
      dispatch(userLoginFail());
    }
  };

export const logout = () => async (dispatch: any) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("token");
  dispatch(userLogout());
};
