import React from "react";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { AppState } from "../../../redux/store";
import appSettingActions from "../../../redux/appSetting/actions";

import ChangeTheme from "../../../components/changeTheme/changeTheme";

import AppRouter from "../RestrictedRouter";

import AppWrapper from "./layout.style";

interface IProps extends RouteComponentProps {}
const App: React.FC<IProps> = ({ match }) => {
  const theme = useSelector((state: AppState) => state.AppSetting.theme);
  const dispatch = useDispatch();
  const { url } = match;
  const handleChangeTheme = (theme: DefaultTheme) => {
    dispatch(appSettingActions.changeTheme(theme));
  };
  return (
    <ThemeProvider theme={theme}>
      <ChangeTheme onChangeTheme={handleChangeTheme} />
      <AppWrapper data-test="wrapper">
        <h1>Test layout </h1>
        <AppRouter url={url} />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
