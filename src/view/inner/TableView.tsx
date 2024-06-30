import { Flex } from "antd";
import { OrderTable } from "../../component/Table/OrderTable";
import { SheetItem, SheetTable } from "../../component/Table/SheetTable";
import { useState } from "react";

export const TableView = () => {
  const [selectedSheet, setSelectedSheet] = useState<SheetItem>(
    {} as SheetItem
  );

  return (
    <Flex vertical style={{ height: "100%" }} gap={"4%"}>
      <SheetTable setSelectedSheet={setSelectedSheet} size={5} />
      <OrderTable selectedSheet={selectedSheet} size={5} />
    </Flex>
  );
};
