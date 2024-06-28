import "./Table.css";
import { Card, Table, TableProps, Typography } from "antd";

type DataType = {
  key: string;
  name: string;
  order: string;
  size: string;
  amount: number;
  note: string[];
  cash: number;
};

const columns: TableProps<DataType>["columns"] = [
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

const orderData: DataType[] = [
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
];

const { Title } = Typography;

export const OrderTable = () => {
  const size = 5;

  return (
    <Card hoverable className="card-table">
      <Title level={3}>Drinks</Title>
      <Table
        columns={columns}
        dataSource={orderData}
        pagination={{
          hideOnSinglePage: true,
          total: orderData.length,
          pageSize: size,
        }}
      />
    </Card>
  );
};
