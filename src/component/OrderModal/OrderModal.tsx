import "./OrderModal.css";
import { Text } from "../utils";
import { OrderItemsList } from "./OrderedItemsList";
import { CheckableCardsList } from "./CheckableCardsList";
import { Card, Divider, Flex, Modal } from "antd";
import { useCallback, useMemo, useState } from "react";
import { OrderItem } from "../Table/OrderTable";
import { Food } from "../share/types/food";

type PlaceOrderModalProp = {
  isOpenModal: boolean;
  setIsOpenModal: (_: boolean) => void;
  orderItems: OrderItem[];
  setOrderItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

type DiscountCoupon = {
  title: string;
  value: number;
};

const FoodData: Food[] = [
  {
    name: "A",
    price: 10000,
    size: "",
    note: [],
    key: "",
    orderBy: "",
    amount: 0,
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
  orderItems,
}: PlaceOrderModalProp) => {
  const [selectedFoods, setSelectedFoods] = useState<Food[]>([] as Food[]);
  const addFoodItem = useCallback((index: number, value: Food) => {
    setSelectedFoods((prev) => [...prev, { ...value, index } as Food]);
  }, []);

  const removeSelectedFood = useCallback((index: number) => {
    setSelectedFoods((prev: Food[]) =>
      prev.filter((_, prev_index) => prev_index !== index)
    );
  }, []);

  const onSubmit = () => {
    setIsOpenModal(false);
    setOrderItems(buildOrderItems(selectedFoods));
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

const totalBill = (discount: DiscountCoupon, foods: Food[]) => {
  let result: number = 0;
  foods.forEach(
    (food) => (result += food.price + (SizeMap.get(food.size) ?? 0))
  );

  return result ? result - result * discount.value : 0;
};

const buildOrderItems = (selectedFood: Food[]) => {
  return selectedFood.map<OrderItem>((food, index) => ({
    key: index.toString(),
    name: food.name,
    order: "",
    size: food.size,
    amount: 1,
    note: [],
    cash: food.price,
  }));
};
