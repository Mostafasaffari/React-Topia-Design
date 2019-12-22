import React from "react";

import Icon from "../ui-kit/icon";
import Header from "../ui-kit/layout/header";

import AppBarWrapper from "./appBar.style";

interface IProps {
  toggle: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  collapsed: boolean;
}
const AppBar: React.FC<IProps> = ({ toggle, collapsed }) => {
  return (
    <AppBarWrapper>
      <Header className="appbar__header">
        <Icon
          className="appbar__header--trigger"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggle}
        />
      </Header>
    </AppBarWrapper>
  );
};

export default AppBar;
