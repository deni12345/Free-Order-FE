import "./SideMenu.css";
import { Button, Menu, MenuTheme } from "antd";
import { items } from "./SideMenuItems";
import { useState } from "react";

export type MenuProps = {
  defaultSelectedKeys?: string[] | undefined;
  theme?: MenuTheme | undefined;
};

export const SideMenu = ({ defaultSelectedKeys, theme }: MenuProps) => {
  return (
    <>
      <Menu
        defaultSelectedKeys={defaultSelectedKeys}
        theme={theme}
        mode="inline"
        items={items}
      ></Menu>
    </>
  );
};
