export const CHANGE_THEME = "CHANGE_THEME";

export interface IAppSettingState {
  theme: string;
}

interface IChangeTheme {
  type: typeof CHANGE_THEME;
  theme: IAppSettingState["theme"];
}


export interface IAppSettingActions {
  changeTheme: (theme: IAppSettingState["theme"]) => IChangeTheme;
}

export type AppSettingActionTypes = IChangeTheme;
