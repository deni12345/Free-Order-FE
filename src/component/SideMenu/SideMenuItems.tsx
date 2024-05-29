import { MenuProps } from "antd";
import { AiFillHome } from "react-icons/ai";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { FaWallet } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import Icon from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    key: "fo-divider-1",
    type: "divider",
    style: {
      minWidth: "auto",
      width: "auto",
      marginBlock: "24px",
    },
  },
  {
    key: "fo-dashboard",
    icon: <Icon component={AiFillHome} />,
    label: "DashBoard",
  },
  {
    key: "fo-table",
    icon: <Icon component={BiSolidSpreadsheet} />,
    label: "Table",
  },
  {
    key: "fo-wallet",
    icon: <Icon component={FaWallet} />,
    label: "Wallet",
  },
  {
    key: "fo-divider-2",
    type: "divider",
    style: {
      minWidth: "auto",
      width: "auto",
      marginBlock: "24px",
    },
  },
  {
    key: 5,
    icon: <Icon component={IoPersonSharp} />,
    label: "Profile",
  },
  {
    key: 6,
    icon: <Icon component={FaSignOutAlt} />,
    label: "Sign Out",
  },
];
