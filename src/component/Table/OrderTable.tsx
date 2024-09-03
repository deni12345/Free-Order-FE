import { Button, Card, Table } from "antd";
import { Title } from "./util";
import { useState } from "react";
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
  size: number;
  OrderItems: OrderItem[];
  setOrderItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

var data: OrderItem[];
export const OrderTable = ({
  setOrderItems,
  OrderItems,
  size,
}: OrderTableProp) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Card hoverable>
      <Title level={3}>Free Order</Title>
      <Button onClick={() => setIsOpenModal(true)}>
        {data?.some((v) => v.key === "1") ? "Update" : "Order"}
      </Button>
      <OrderModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        setOrderItems={setOrderItems}
        orderItems={OrderItems}
      />
      <Table
        columns={columns}
        dataSource={OrderItems}
        pagination={{
          hideOnSinglePage: true,
          total: orderData.length,
          pageSize: size,
        }}
      />
    </Card>
  );
};
