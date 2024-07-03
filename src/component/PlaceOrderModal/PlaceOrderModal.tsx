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
      value: "card-2",
    },
  ];

  return (
    <Modal
      title="Place Your Order"
      centered
      width={"50%"}
      open={isOpenModal}
      onOk={() => setIsOpenModal(false)}
      onCancel={() => setIsOpenModal(false)}
    >
      <Flex flex={1}>
        <Checkbox.Group
          options={optionlists}
          style={{ gap: 16 }}
        ></Checkbox.Group>
      </Flex>
    </Modal>
  );
};
