import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { INavigationSidebar } from "../../../interfaces/dataListInterfaces";

import { AppState } from "../../../redux/store";
import appSettingActions from "../../../redux/appSetting/actions";

import SideBar from "../../../components/sideBar";
import Layout from "../../../components/ui-kit/layout";
import ChangeTheme from "../../../components/changeTheme";

import AppRouter from "../RestrictedRouter";

import AppWrapper from "./layout.style";
import AppBar from "../../../components/appBar";
import Content from "../../../components/ui-kit/layout/content";
import Footer from "../../../components/ui-kit/layout/footer";

interface IProps extends RouteComponentProps {}
const App: React.FC<IProps> = ({ match }) => {
  const [collapseSideBar, setCollapseSideBar] = useState(false);
  const { t } = useTranslation();
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
  const navigationSidebarData: INavigationSidebar[] = [
    {
      id: 1,
      title: t("sidebarMenu.todoList"),
      link: "todoList"
    },
    {
      id: 2,
      title: t("sidebarMenu.setting"),
      link: "setting"
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SideBar
          url={url}
          title={t("dashboard")}
          collapsed={collapseSideBar}
          navData={navigationSidebarData}
        />
        {/* <ChangeTheme onChangeTheme={handleChangeTheme} /> */}
        <Layout>
          <AppBar collapsed={collapseSideBar} toggle={handleToggleSideBar} />
          <Content>
            <AppWrapper data-test="wrapper">
              <AppRouter url={url} />
            </AppWrapper>
          </Content>
          <Footer>{t("footer.copy")}</Footer>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
