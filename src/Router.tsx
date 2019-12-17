import React, { Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { history, AppState } from "./redux/store";
import appSettingActions from "./redux/appSetting/actions";
import ChangeTheme from "./components/changeTheme/ChangeTheme";

const App = lazy(() => import("./pages/app/App"));

const Router: React.FC = () => {
  const theme = useSelector((state: AppState) => state.AppSetting.theme);
  const dispatch = useDispatch();
  const handleChangeTheme = (theme: DefaultTheme) => {
    dispatch(appSettingActions.changeTheme(theme)); // Although we do not need to store the theme in Redux, I store the theme in Redux for a sample and storing in the state can be enough
  };
  return (
    <ThemeProvider theme={theme}>
      <ChangeTheme onChangeTheme={handleChangeTheme} />
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={App} />
              <Route component={() => <h1>404</h1>} />
            </Switch>
          </ConnectedRouter>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
