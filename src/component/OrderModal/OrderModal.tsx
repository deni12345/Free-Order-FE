import { Avatar, Card, Divider, Flex, List, Modal, Typography } from "antd";
import { useCallback, useMemo, useState } from "react";
import { CheckableCardList } from "./CheckableCardList";

type PlaceOrderModalProp = {
  isOpenModal: boolean;
  setIsOpenModal: (_: boolean) => void;
};

export type FoodInfo = {
  Name: string;
  Price: number;
  Size: string;
  Note: string;
};

type DiscountCoupon = {
  title: string;
  value: number;
};

const FoodData: FoodInfo[] = [
  {
    Name: "A",
    Price: 10000,
    Size: "",
    Note: "",
  },
  {
    Name: "B",
    Price: 20000,
    Size: "",
    Note: "",
  },
  {
    Name: "A",
    Price: 10000,
    Size: "",
    Note: "",
  },
  {
    Name: "B",
    Price: 20000,
    Size: "",
    Note: "",
  },
  {
    Name: "A",
    Price: 10000,
    Size: "",
    Note: "",
  },
  {
    Name: "B",
    Price: 20000,
    Size: "",
    Note: "",
  },
  {
    Name: "A",
    Price: 10000,
    Size: "",
    Note: "",
  },
  {
    Name: "B",
    Price: 20000,
    Size: "",
    Note: "",
  },
];

const SizeMap = new Map<string, number>([
  ["S", 0],
  ["M", 5000],
  ["L", 10000],
]);

const { Text } = Typography;

export const OrderModal = ({
  isOpenModal,
  setIsOpenModal,
}: PlaceOrderModalProp) => {
  const [selectedFoods, setSelectedFoods] = useState<FoodInfo[]>(
    [] as FoodInfo[]
  );
  const onClickFoodItem = useCallback((clickedFood: FoodInfo) => {
    console.log("checked = ", clickedFood);
    setSelectedFoods((prev) => [...prev, clickedFood]);
  }, []);

  const memoTotalBill = useMemo(
    () => TotalBill({ title: "sale 50%", value: 0.5 }, selectedFoods),
    [selectedFoods]
  );
  return (
    <Modal
      centered
      width={"70%"}
      open={isOpenModal}
      okText={<Text style={{ color: "white" }}>Place An Order Now</Text>}
      onOk={() => setIsOpenModal(false)}
      onCancel={() => setIsOpenModal(false)}
      styles={{ body: { height: "70vh" } }}
    >
      <Flex style={{ height: "100%", gap: 10 }}>
        <Flex
          flex={4}
          gap={10}
          wrap="wrap"
          justify="space-evenly"
          style={{ overflowY: "auto" }}
        >
          <CheckableCardList data={FoodData} onClick={onClickFoodItem} />
        </Flex>
        <Flex flex={3} vertical justify="space-between" gap={10}>
          <List
            style={{ width: "100%", overflowY: "auto" }}
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
                  title={<a href="https://ant.design">{item.Name}</a>}
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
              {memoTotalBill} VND
            </Text>
          </Card>
        </Flex>
      </Flex>
    </Modal>
  );
};

const TotalBill = (discount: DiscountCoupon, foods: FoodInfo[]) => {
  let result: number = 0;
  foods.forEach(
    (food) => (result += food.Price + (SizeMap.get(food.Size) ?? 0))
  );

  return result ? result - result * discount.value : 0;
};
