import React from "react";

import Button from "../../components/ui-kit/button/button";

import AppWrapper from "./app.style";

const App: React.FC = () => {
  return (
    <AppWrapper data-test="wrapper">
      <h1>Test app </h1>
      <Button type="primary">Hello Test</Button>
    </AppWrapper>
  );
};

export default App;
