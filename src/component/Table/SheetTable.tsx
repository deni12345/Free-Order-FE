import "./Table.css";
import { Card, Table, TableProps } from "antd";
import { useEffect, useState } from "react";
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
