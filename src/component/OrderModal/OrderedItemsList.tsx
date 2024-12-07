import { List } from "antd";
import React, { useMemo } from "react";
import { OrderedItem } from "./OrderedItem";
import { Food } from "../share/types/food";

type OrderItemsListProp = {
  selectedFoods: Food[];
  removeSelectedFood: (index: number) => void;
};

export function OrderItemsList({
  selectedFoods,
  removeSelectedFood,
}: OrderItemsListProp): React.JSX.Element {
  const memoOrders = useMemo(
    () => (
      <List
        style={{
          width: "100%",
          overflowY: "auto",
        }}
        itemLayout="horizontal"
        dataSource={selectedFoods}
        renderItem={(value, index) => (
          <OrderedItem
            value={value}
            index={index}
            removeSelectedFood={() => removeSelectedFood(index)}
          />
        )}
      />
    ),
    [selectedFoods, removeSelectedFood]
  );
  return <>{memoOrders}</>;
}
