import "./PlaceOrderModal.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Card,
  Checkbox,
  CheckboxOptionType,
  Flex,
  Form,
  GetProp,
  List,
  Modal,
} from "antd";
import FormItem from "antd/es/form/FormItem";

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
      <Flex style={{ height: "100%", gap: 10 }}>
        <Flex flex={4} style={{ overflowY: "scroll" }}>
          <Checkbox.Group
            options={optionlists}
            style={{ gap: 16, justifyContent: "space-around" }}
            onChange={onCheckGroupChange}
          ></Checkbox.Group>
        </Flex>
        <Flex flex={3} vertical justify="space-around">
          <List
            style={{ width: "100%" }}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
          <Card>"????"</Card>
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
