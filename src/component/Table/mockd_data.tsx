import Icon from "@ant-design/icons";
import { AiFillHome } from "react-icons/ai";
import { COLORS } from "../../theme/color";
import { SheetItem } from "./SheetTable";
import { TableProps } from "antd";
import { OrderItem } from "./OrderTable";

export const columns: TableProps<OrderItem>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
  },

  {
    title: "Order",
    dataIndex: "order",
  },
  {
    title: "Size",
    dataIndex: "size",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Note",
    dataIndex: "note",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Cash",
    dataIndex: "cash",
  },
];

export const orderData: OrderItem[] = [
  {
    key: "1",
    name: "test-1",
    order: "orange juice",
    size: "M",
    amount: 1,
    note: ["nothing"],
    cash: 10000,
  },
  {
    key: "2",
    name: "test-1",
    order: "orange juice",
    size: "M",
    amount: 1,
    note: ["nothing"],
    cash: 10000,
  },
  {
    key: "3",
    name: "test-1",
    order: "orange juice",
    size: "M",
    amount: 1,
    note: ["nothing"],
    cash: 10000,
  },
  {
    key: "4",
    name: "test-1",
    order: "orange juice",
    size: "M",
    amount: 1,
    note: ["nothing"],
    cash: 10000,
  },
  {
    key: "5",
    name: "test-1",
    order: "orange juice",
    size: "M",
    amount: 1,
    note: ["nothing"],
    cash: 10000,
  },
  {
    key: "6",
    name: "test-1",
    order: "orange juice",
    size: "M",
    amount: 1,
    note: ["nothing"],
    cash: 10000,
  },
  {
    key: "7",
    name: "test-1",
    order: "orange juice",
    size: "M",
    amount: 1,
    note: ["nothing"],
    cash: 10000,
  },
  {
    key: "8",
    name: "test-1",
    order: "orange juice",
    size: "M",
    amount: 1,
    note: ["nothing"],
    cash: 10000,
  },
];

export const sheetColumn: TableProps<SheetItem>["columns"] = [
  {
    title: "Sheet Name",
    dataIndex: "sheetName",
  },
  {
    title: "Host",
    dataIndex: "host",
  },
  {
    title: "Shop",
    dataIndex: "shop",
    render: () => (
      <Icon component={AiFillHome} style={{ color: COLORS.PRIMARY_COLOR }}>
        Shoppee
      </Icon>
    ),
  },
  {
    title: "Create At",
    dataIndex: "createAt",
  },
  {
    title: "End At",
    dataIndex: "endAt",
  },
];

export const sheetData: SheetItem[] = [
  {
    key: "1",
    sheetName: "sheet 1",
    host: "orange juice",
    createAt: Date.now().toLocaleString(),
    endAt: Date.now().toLocaleString(),
    shop: "shopee",
  },
  {
    key: "2",
    sheetName: "sheet 2",
    host: "orange juice",
    createAt: Date.now().toLocaleString(),
    endAt: Date.now().toLocaleString(),
    shop: "shopee",
  },
  {
    key: "3",
    sheetName: "sheet 3",
    host: "orange juice",
    createAt: Date.now().toLocaleString(),
    endAt: Date.now().toLocaleString(),
    shop: "shopee",
  },
  {
    key: "4",
    sheetName: "sheet 1",
    host: "orange juice",
    createAt: Date.now().toLocaleString(),
    endAt: Date.now().toLocaleString(),
    shop: "shopee",
  },
  {
    key: "5",
    sheetName: "sheet 5",
    host: "orange juice",
    createAt: Date.now().toLocaleString(),
    endAt: Date.now().toLocaleString(),
    shop: "shopee",
  },
  {
    key: "6",
    sheetName: "sheet 6",
    host: "orange juice",
    createAt: Date.now().toLocaleString(),
    endAt: Date.now().toLocaleString(),
    shop: "shopee",
  },
];
