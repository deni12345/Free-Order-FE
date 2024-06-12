import "./SideMenu.css";
import { Menu, MenuTheme } from "antd";
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
        <a>
          <span>
            <i className="fas fa-bell"></i>
          </span>
          <h3>Lorem</h3>
        </a>
      </div>
      <Menu
        defaultSelectedKeys={["fo-dashboard"]}
        inlineIndent={10}
        theme="light"
        mode="inline"
        items={items}
      ></Menu>
    </Sider>
  );
};
