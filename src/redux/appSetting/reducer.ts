import { IAppSettingState, AppSettingActionTypes, CHANGE_THEME } from "./types";

import { MainTheme } from "../../style/themes";

const initState: IAppSettingState = {
  theme: MainTheme
};

export default function appSettingReducer(
  state = initState,
  action: AppSettingActionTypes
) {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        theme: action.theme
      };
    }
    default:
      return state;
  }
}
