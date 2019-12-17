import React, { Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Storage from "./helpers/localStorage";

import { history, AppState } from "./redux/store";
import appSettingActions from "./redux/appSetting/actions";

import ChangeTheme from "./components/changeTheme/ChangeTheme";

const App = lazy(() => import("./pages/app"));
const Login = lazy(() => import("./pages/login"));

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
              <Route exact path="/" component={Login} />
              <RestrictedRoute path="/app" component={App} />
              <Route component={() => <h1>404</h1>} />
            </Switch>
          </ConnectedRouter>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

interface IPropsRestrictRoute {
  component: React.FC<any>;
  [rest: string]: any;
}

const RestrictedRoute: React.FC<IPropsRestrictRoute> = ({
  component: Component,
  ...rest
}) => {
  const isLoggedIn = !!Storage().get("token");

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default Router;
