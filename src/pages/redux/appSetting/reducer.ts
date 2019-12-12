import { IAppSettingState, AppSettingActionTypes, CHANGE_THEME } from "./types";

const initState: IAppSettingState = {
  theme: "default"
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
