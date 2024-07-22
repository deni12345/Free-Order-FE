import "./SideMenu.css";
import { Menu, MenuTheme } from "antd";
import { SideMenuItems } from "./SideMenuItems";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

export type MenuProps = {
  defaultSelectedKeys?: string[] | undefined;
  theme?: MenuTheme | undefined;
};

export const SideMenu = ({ defaultSelectedKeys, theme }: MenuProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const items = SideMenuItems();

  return (
    <Sider
      style={{
        overflow: "auto",
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
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
