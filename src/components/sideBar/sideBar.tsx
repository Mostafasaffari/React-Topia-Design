import React from "react";

import Menu from "../ui-kit/menu";
import Icon from "../ui-kit/icon";
import Sider from "../ui-kit/layout/sider";
import MenuItem from "../ui-kit/menu/item";

import SideBarWrapper from "./sideBar.style";

interface IPorps {
  title: string;
  url: string;
  collapsed: boolean;
}
const SideBar: React.FC<IPorps> = ({ title, collapsed, url }) => {
  return (
    <SideBarWrapper>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="sidebar--logo">
          {!collapsed ? title : <Icon type="appstore" />}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <MenuItem key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </MenuItem>
          <MenuItem key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </MenuItem>
        </Menu>
      </Sider>
    </SideBarWrapper>
  );
};

export default SideBar;
