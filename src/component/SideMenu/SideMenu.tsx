import "./SideMenu.css";
import { Button, Menu, MenuTheme } from "antd";
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
      // collapsible
      collapsed={collapsed}
      //onCollapse={(value) => setCollapsed(value)}
    >
      <Button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      ></Button>
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
