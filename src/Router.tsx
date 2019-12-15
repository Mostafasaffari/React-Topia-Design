import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const App = lazy(() => import("./pages/app/App"));

const Router: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={store.getState().AppSetting.theme}>
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
    </Provider>
  );
};

export default Router;
