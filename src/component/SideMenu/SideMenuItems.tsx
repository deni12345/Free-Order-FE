import { MenuProps } from "antd";
import {
  HomeOutlined,
  ContainerOutlined,
  WalletOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    key: "fo-dashboard",
    icon: <HomeOutlined />,
    label: "DashBoard",
  },
  {
    key: "fo-table",
    icon: <ContainerOutlined />,
    label: "Table",
  },
  {
    key: "fo-",
    icon: <WalletOutlined />,
    label: "Wallet",
  },
  {
    key: 4,
    label: "Account Page",
    type: "group",
    children: [
      {
        key: 5,
        icon: <UserOutlined />,
        label: "Profile",
      },
      {
        key: 6,
        icon: <LogoutOutlined />,
        label: "Sign Out",
      },
    ],
  },
];
