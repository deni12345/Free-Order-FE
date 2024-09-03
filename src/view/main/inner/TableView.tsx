import { Flex } from "antd";
import { OrderItem, OrderTable } from "../../../component/Table/OrderTable";
import { useState } from "react";

export const TableView = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([] as OrderItem[]);
  // const [selectedSheet, setSelectedSheet] = useState<SheetItem>(
  //   {} as SheetItem
  // );

  return (
    <Flex vertical gap={16}>
      {/* <SheetTable setSelectedSheet={setSelectedSheet} size={5} />  */}
      <OrderTable
        setOrderItems={setOrderItems}
        OrderItems={orderItems}
        size={5}
      />
    </Flex>
  );
};
