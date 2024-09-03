import "./SideMenu.css";
import { Menu, MenuTheme } from "antd";
import { SideMenuItems } from "./SideMenuItems";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

export type MenuProps = {
  defaultSelectedKeys?: string[] | undefined;
  theme?: MenuTheme | undefined;
  selectedMenuItem: string;
  setSelectedMenuItem: (_: string) => void;
};

export const SideMenu = ({
  selectedMenuItem = "fo-dashboard",
  setSelectedMenuItem,
}: MenuProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const items = SideMenuItems(setSelectedMenuItem);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        selectedKeys={[selectedMenuItem]}
        inlineIndent={10}
        theme="light"
        mode="inline"
        items={items}
      ></Menu>
    </Sider>
  );
};
