import "./Table.css";
import { Button, Card, Table } from "antd";
import { Title } from "./util";
import { SheetItem } from "./SheetTable";
import { useEffect } from "react";
import { columns, orderData } from "./mockd_data";

export type OrderItem = {
  key: string;
  name: string;
  order: string;
  size: string;
  amount: number;
  note: string[];
  cash: number;
};

type OrderTableProp = {
  selectedSheet: SheetItem;
  size: number;
};

var data: OrderItem[];
export const OrderTable = ({ selectedSheet, size }: OrderTableProp) => {
  useEffect(() => {
    data = orderData;
    return () => {
      data = [];
    };
  }, [selectedSheet]);

  return (
    <Card hoverable className="card-table">
      <Title level={3}>{selectedSheet.sheetName}</Title>
      <Button>{data?.some((v) => v.key === "1") ? "Update" : "Order"}</Button>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          hideOnSinglePage: true,
          total: orderData.length,
          pageSize: size,
        }}
      />
    </Card>
  );
};
