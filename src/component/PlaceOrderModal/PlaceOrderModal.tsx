import "./PlaceOrderModal.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Checkbox, CheckboxOptionType, Flex, Modal } from "antd";

type PlaceOrderModalProp = {
  isOpenModal: boolean;
  setIsOpenModal: (_: boolean) => void;
};

export const PlaceOrderModal = ({
  isOpenModal,
  setIsOpenModal,
}: PlaceOrderModalProp) => {
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
        ></Card>
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
        ></Card>
      ),
      value: "card-8",
    },
  ];

  return (
    <Modal
      title="Place Your Order"
      centered
      width={"70%"}
      open={isOpenModal}
      onOk={() => setIsOpenModal(false)}
      onCancel={() => setIsOpenModal(false)}
      styles={{ body: { height: "70vh" } }}
    >
      <Flex style={{ height: "100%" }}>
        <Flex flex={4} style={{ overflowY: "scroll" }}>
          <Checkbox.Group
            options={optionlists}
            style={{ gap: 16 }}
          ></Checkbox.Group>
        </Flex>
        <Flex flex={3}>test</Flex>
      </Flex>
    </Modal>
  );
};
