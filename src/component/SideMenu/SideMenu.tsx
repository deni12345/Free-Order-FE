import "./SideMenu.css";
import { Divider, Menu, MenuTheme } from "antd";
import { items } from "./SideMenuItems";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

export type MenuProps = {
  defaultSelectedKeys?: string[] | undefined;
  theme?: MenuTheme | undefined;
};

export const SideMenu = ({ defaultSelectedKeys, theme }: MenuProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo-holder logo-9">
        <a href="">
          <span>
            <i className="fas fa-bell"></i>
          </span>
          <h3>Lorem</h3>
        </a>
      </div>
      <Divider
        style={{
          minWidth: "auto",
          width: "auto",
          margin: "24px 10px",
          backgroundColor: "#E0E1E2",
        }}
      />
      <Menu
        defaultSelectedKeys={["fo-dashboard"]}
        theme="dark"
        mode="inline"
        items={items}
      ></Menu>
    </Sider>
  );
};
