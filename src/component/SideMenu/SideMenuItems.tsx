import { MenuProps } from "antd";
import { AiFillHome   } from "react-icons/ai";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { FaWallet } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    key: "fo-dashboard",
    icon: <AiFillHome  />,
    label: "DashBoard",
  },
  {
    key: "fo-table",
    icon: <BiSolidSpreadsheet />,
    label: "Table",
  },
  {
    key: "fo-",
    icon: <FaWallet />,
    label: "Wallet",
  },
  {
    key: 4,
    label: "Account Page",
    type: "group",
    children: [
      {
        key: 5,
        icon: <IoPersonSharp />,
        label: "Profile",
      },
      {
        key: 6,
        icon: <FaSignOutAlt />,
        label: "Sign Out",
      },
    ],
  },
];
