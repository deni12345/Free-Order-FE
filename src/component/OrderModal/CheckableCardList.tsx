import { EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React, { useMemo } from "react";
import { T } from "../utils";

export const CheckableCardList = ({
  data,
  onClick,
}: {
  data: T[];
  onClick: (_: T) => void;
}) => {
  const memoCards = useMemo(() => {
    return (
      <>
        {data.map((info, index) => {
          return (
            <Card
              key={index}
              hoverable
              style={{ width: 300, height: "fit-content" }}
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
              onClick={() => onClick(info)}
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          );
        })}
      </>
    );
  }, [data, onClick]);
  return <>{memoCards}</>;
};
