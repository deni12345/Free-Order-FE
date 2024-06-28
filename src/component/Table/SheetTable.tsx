import "./Table.css";
import Icon from "@ant-design/icons";
import { AiFillHome } from "react-icons/ai";
import { COLORS } from "../../theme/color";
import { Card, Table, TableProps, Typography } from "antd";
import { useEffect, useState } from "react";

type SheetItem = {
  key: string;
  sheetName: string;
  host: string;
  shop: string;
  createAt: string;
  endAt: string;
};

const sheetColumn: TableProps<SheetItem>["columns"] = [
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
    render: (text) => (
      <Icon component={AiFillHome} style={{ color: COLORS.PRIMARY_COLOR }}>
        {text}
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
const sheetData: SheetItem[] = [
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
    sheetName: "sheet 1",
    host: "orange juice",
    createAt: Date.now().toLocaleString(),
    endAt: Date.now().toLocaleString(),
    shop: "shopee",
  },
  {
    key: "3",
    sheetName: "sheet 1",
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
];
const { Title } = Typography;

export const SheetTable = () => {
  const size = 5;
  const [selectedSheet, setSelectedSheet] = useState<SheetItem>(
    {} as SheetItem
  );
  useEffect(() => {
    console.log("selectedSheet ", selectedSheet);
  }, [selectedSheet]);

  console.log("render");

  return (
    <Card hoverable className="card-table">
      <Title level={3}>Today Sheets</Title>
      <Table
        columns={sheetColumn}
        dataSource={sheetData}
        pagination={{
          hideOnSinglePage: true,
          total: sheetData.length,
          pageSize: size,
        }}
        onRow={(record) => {
          return {
            onClick: () => {
              setSelectedSheet(record);
            },
          };
        }}
      />
    </Card>
  );
};
