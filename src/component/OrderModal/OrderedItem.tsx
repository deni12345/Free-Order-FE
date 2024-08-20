import { Avatar, List, Popconfirm, Select } from "antd";
import React from "react";
export function OrderedItem({ index }: { index: number }) {
  return (
    <List.Item
      actions={[
        <Popconfirm
          title="Bạn có chắc chắn muốn xóa món đồ uống này?"
          //   onConfirm={() => onRemove(drink.id)}
        >
          <a href="#">Xóa</a>
        </Popconfirm>,
      ]}
    >
      <List.Item.Meta
        avatar={
          <Avatar
            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
          />
        }
        title={<a href="https://ant.design">{index}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
      <Select
        defaultValue={1}
        //   onChange={(value) => onUpdateSize(drink.id, value)}
      >
        {/* {sizeOptions.map((size) => (
          <Select.Option key={size} value={size}>
            {size}
          </Select.Option>
        ))} */}
      </Select>
    </List.Item>
  );
}
