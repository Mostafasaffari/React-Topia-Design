import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = lazy(() => import("./pages/app/App"));

const Router: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Switch>
            <ConnectedRouter history={history}>
              <Route exact path="/" component={App} />
              <Route component={() => <h1>404</h1>} />
            </ConnectedRouter>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
