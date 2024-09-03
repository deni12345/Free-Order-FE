import { Card, Table } from "antd";
import { Title } from "./util";
import { sheetColumn, sheetData } from "./mockd_data";

export type SheetItem = {
  key: string;
  sheetName: string;
  host: string;
  shop: string;
  createAt: string;
  endAt: string;
};

type SheetTableProp = {
  setSelectedSheet: (_: SheetItem) => void;
  size: number;
};

export const SheetTable = ({ setSelectedSheet, size }: SheetTableProp) => {
  return (
    <Card hoverable>
      <Title level={3}>Today Sheets</Title>
      <Table
        style={{ height: "100%" }}
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
