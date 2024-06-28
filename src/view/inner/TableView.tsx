import { Flex } from "antd";
import { OrderTable } from "../../component/Table/OrderTable";
import { SheetTable } from "../../component/Table/SheetTable";

export const TableView = () => {
  return (
    <Flex vertical style={{ height: "100%" }} gap={"4%"}>
      <OrderTable />
      <SheetTable />
    </Flex>
  );
};
