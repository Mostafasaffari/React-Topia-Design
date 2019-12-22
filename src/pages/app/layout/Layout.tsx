import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { AppState } from "../../../redux/store";
import appSettingActions from "../../../redux/appSetting/actions";

import SideBar from "../../../components/sideBar";
import Layout from "../../../components/ui-kit/layout";
import ChangeTheme from "../../../components/changeTheme";

import AppRouter from "../RestrictedRouter";

import AppWrapper from "./layout.style";
import AppBar from "../../../components/appBar/appBar";

interface IProps extends RouteComponentProps {}
const App: React.FC<IProps> = ({ match }) => {
  const [collapseSideBar, setCollapseSideBar] = useState(false);
  const theme = useSelector((state: AppState) => state.AppSetting.theme);
  const dispatch = useDispatch();
  const { url } = match;
  const handleChangeTheme = (theme: DefaultTheme) => {
    dispatch(appSettingActions.changeTheme(theme));
  };
  const handleToggleSideBar = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setCollapseSideBar(!collapseSideBar);
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SideBar
          url={url}
          title="Dashboard"
          collapsed={collapseSideBar}
        />
        {/* <ChangeTheme onChangeTheme={handleChangeTheme} /> */}
        <Layout>
          <AppBar collapsed={collapseSideBar} toggle={handleToggleSideBar} />
          <AppWrapper data-test="wrapper">
            <AppRouter url={url} />
          </AppWrapper>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
