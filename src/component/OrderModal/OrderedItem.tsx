import { Avatar, Button, List, Select, Space } from "antd";
import MilkTea from "../../assets/Brown-sugar-milk-tea-recipe-boba.jpg";
import { IoIosRemove } from "react-icons/io";
import { Text } from "../utils";
import React from "react";
import { FoodInfo } from "./OrderModal";

type OrderedItemProp = {
  value: FoodInfo;
  index: number;
  removeSelectedFood: () => void;
};

export function OrderedItem({
  index,
  value,
  removeSelectedFood,
}: OrderedItemProp) {
  return (
    <List.Item style={{ gap: 10 }} key={index}>
      <Avatar
        shape="square"
        src={MilkTea}
        style={{ minHeight: 75, width: "auto" }}
      />
      <Space direction="vertical" style={{ flex: 3 }} size={0}>
        <Text>Cold Drink ${value.index}</Text>
        <Text type="secondary">Cold Drindas dsadsdsa</Text>
        <Space direction="horizontal">
          <Button className="responsive-btn">100.000 VND</Button>
          <Select
            defaultValue="M"
            style={{ minWidth: 10 }}
            notFoundContent
            options={[
              { value: "M", label: "M" },
              { value: "S", label: "S" },
              { value: "L", label: "L" },
            ]}
          />
        </Space>
      </Space>
      <Button
        type="primary"
        shape="circle"
        onClick={removeSelectedFood}
        icon={<IoIosRemove />}
      />
    </List.Item>
  );
}
