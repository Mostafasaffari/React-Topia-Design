import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { AppState } from "../../redux/store";
import appSettingActions from "../../redux/appSetting/actions";

import ChangeTheme from "../../components/changeTheme";

import AppWrapper from "./app.style";

const App: React.FC = () => {
  const theme = useSelector((state: AppState) => state.AppSetting.theme);
  const dispatch = useDispatch();
  const handleChangeTheme = (theme: DefaultTheme) => {
    dispatch(appSettingActions.changeTheme(theme));
  };
  return (
    <ThemeProvider theme={theme}>
      <ChangeTheme onChangeTheme={handleChangeTheme} />
      <AppWrapper data-test="wrapper">
        <h1>Test app </h1>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
