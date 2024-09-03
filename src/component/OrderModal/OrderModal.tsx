import "./OrderModal.css";
import { Text } from "../utils";
import { OrderItemsList } from "./OrderedItemsList";
import { CheckableCardsList } from "./CheckableCardsList";
import { Card, Divider, Flex, Modal } from "antd";
import { useCallback, useMemo, useState } from "react";
import { OrderItem } from "../Table/OrderTable";

type PlaceOrderModalProp = {
  isOpenModal: boolean;
  setIsOpenModal: (_: boolean) => void;
  setOrderItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

export type FoodInfo = {
  index?: number;
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

export const OrderModal = ({
  isOpenModal,
  setIsOpenModal,
  setOrderItems,
}: PlaceOrderModalProp) => {
  const [selectedFoods, setSelectedFoods] = useState<FoodInfo[]>(
    [] as FoodInfo[]
  );
  const addFoodItem = useCallback((index: number, value: FoodInfo) => {
    setSelectedFoods((prev) => [...prev, { ...value, index } as FoodInfo]);
  }, []);

  const removeSelectedFood = useCallback((index: number) => {
    setSelectedFoods((prev: FoodInfo[]) =>
      prev.filter((_, prev_index) => prev_index !== index)
    );
  }, []);

  const onSubmit = () => {
    let orderItems: OrderItem[] = [
      {
        key: "",
        name: "",
        order: "",
        size: "",
        amount: 0,
        note: [],
        cash: 0,
      },
    ];

    setIsOpenModal(false);
    setOrderItems(orderItems);
  };

  const memoTotalBill = useMemo(
    () => totalBill({ title: "sale 50%", value: 0.5 }, selectedFoods),
    [selectedFoods]
  );
  return (
    <Modal
      centered
      width={"70%"}
      open={isOpenModal}
      okText={<Text style={{ color: "white" }}>Place An Order Now</Text>}
      onOk={() => onSubmit()}
      onCancel={() => setIsOpenModal(false)}
      styles={{ body: { height: "70vh", padding: 12 } }}
    >
      <Flex style={{ height: "100%", gap: 8 }}>
        <Flex
          wrap
          flex={4}
          gap={10}
          justify="center"
          style={{ overflowY: "auto" }}
        >
          <CheckableCardsList data={FoodData} onClick={addFoodItem} />
        </Flex>
        <Flex flex={3} vertical justify="space-between" gap={10}>
          <OrderItemsList
            selectedFoods={selectedFoods}
            removeSelectedFood={removeSelectedFood}
          />
          <Card hoverable>
            <Text>Discount</Text>
            <Text type="secondary" style={{ float: "right" }}>
              {0}
            </Text>
            <Divider />
            <Text>Total</Text>
            <Text style={{ float: "right" }}>{memoTotalBill} VND</Text>
          </Card>
        </Flex>
      </Flex>
    </Modal>
  );
};

const totalBill = (discount: DiscountCoupon, foods: FoodInfo[]) => {
  let result: number = 0;
  foods.forEach(
    (food) => (result += food.Price + (SizeMap.get(food.Size) ?? 0))
  );

  return result ? result - result * discount.value : 0;
};

const buildOrderItems = (selectedFood: FoodInfo[]) => {};
