import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = lazy(() => import("./pages/app/App"));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={() => <h1>404</h1>} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
