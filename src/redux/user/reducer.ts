import { IUserState, UserActionTypes, SET_TOKEN, DELETE_TOKEN } from "./types";
import { cookieStore } from "../../helpers/localStorage";

const initialState: IUserState = {
  token: cookieStore.get("token") || ""
};

const userReducer = (
  state = initialState,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case SET_TOKEN:
      cookieStore.set("token", action.token);
      return {
        ...state,
        token: action.token
      };

    case DELETE_TOKEN:
      cookieStore.clear("token");
      return {
        ...state,
        token: ""
      };
    default:
      return state;
  }
};

export default userReducer;
