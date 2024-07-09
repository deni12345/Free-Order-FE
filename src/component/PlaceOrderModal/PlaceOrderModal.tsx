import "./PlaceOrderModal.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  CheckboxOptionType,
  Divider,
  Flex,
  Form,
  GetProp,
  List,
  Modal,
  Typography,
} from "antd";
import { useState } from "react";

type PlaceOrderModalProp = {
  isOpenModal: boolean;
  setIsOpenModal: (_: boolean) => void;
};

type SelectedFood ={
  
}

export const PlaceOrderModal = ({
  isOpenModal,
  setIsOpenModal,
}: PlaceOrderModalProp) => {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const { Text } = Typography;
  const optionlists: CheckboxOptionType[] = [
    {
      label: (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        ></Card>
      ),
      value: "card-1",
    },
    {
      label: (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        ></Card>
      ),
      value: "card-2",
    },
    {
      label: (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        ></Card>
      ),
      value: "card-3",
    },
    {
      label: (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        ></Card>
      ),
      value: "card-4",
    },
    {
      label: (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        ></Card>
      ),
      value: "card-5",
    },
    {
      label: (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        ></Card>
      ),
      value: "card-6",
    },
    {
      label: (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        />
      ),
      value: "card-7",
    },
    {
      label: (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        />
      ),
      value: "card-8",
    },
  ];

  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  return (
    <Modal
      title="Place Your Order"
      centered
      width={"70%"}
      open={isOpenModal}
      okText={<Text style={{ color: "white" }}>Place An Order Now</Text>}
      onOk={() => setIsOpenModal(false)}
      onCancel={() => setIsOpenModal(false)}
      styles={{ body: { height: "70vh" } }}
    >
      <Flex style={{ height: "100%", gap: 10 }}>
        <Flex flex={4} style={{ overflowY: "scroll" }}>
          <Checkbox.Group
            options={optionlists}
            style={{ gap: 16, justifyContent: "space-around" }}
            onChange={onCheckGroupChange}
          ></Checkbox.Group>
        </Flex>
        <Flex flex={3} vertical justify="space-between" gap={10}>
          <List
            style={{ width: "100%", overflowY: "scroll" }}
            itemLayout="horizontal"
            dataSource={selectedFoods}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
          <Card hoverable>
            <Text style={{ fontSize: "1.5rem" }}>Discount</Text>
            <Text
              type="secondary"
              style={{ fontSize: "1.5rem", float: "right" }}
            >
              {0}
            </Text>
            <Divider />
            <Text style={{ fontSize: "1.5rem" }}>Total</Text>
            <Text
              type="secondary"
              style={{ fontSize: "1.5rem", float: "right" }}
            >
              {100000} VND
            </Text>
          </Card>
        </Flex>
      </Flex>
    </Modal>
  );
};

const onCheckGroupChange: GetProp<typeof Checkbox.Group, "onChange"> = (
  checkedValues
) => {
  console.log("checked = ", checkedValues);
};
