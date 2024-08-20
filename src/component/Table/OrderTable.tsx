import { Button, Card, Table } from "antd";
import { Title } from "./util";
import { SheetItem } from "./SheetTable";
import { useEffect, useState } from "react";
import { columns, orderData } from "./mockd_data";
import { OrderModal } from "../OrderModal/OrderModal";

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
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    data = orderData;
    return () => {
      data = [];
    };
  }, [selectedSheet]);

  return (
    <Card hoverable>
      <Title level={3}>{selectedSheet.sheetName}</Title>
      <Button onClick={() => setIsOpenModal(true)}>
        {data?.some((v) => v.key === "1") ? "Update" : "Order"}
      </Button>
      <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
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
