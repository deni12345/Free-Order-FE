import { IoCart } from "react-icons/io5";
import { Button, Card, Flex } from "antd";
import React, { useMemo } from "react";
import { T } from "../utils";

export const CheckableCardsList = ({
  data,
  onClick,
}: {
  data: T[];
  onClick: (index: number, _: T) => void;
}) => {
  const memoCards = useMemo(() => {
    return (
      <>
        {data.map((info, index) => {
          return (
            <Card
              className="checkable-card"
              key={index}
              hoverable
              cover={
                <img
                  loading="lazy"
                  alt="examplddde"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Card.Meta
                title={`Card title ${index}`}
                description="This is the description"
              />
              <Flex wrap gap={8} style={{ paddingTop: "15px" }}>
                <Button className="responsive-btn">100.000 VND</Button>
                <Button
                  type="primary"
                  className="responsive-btn"
                  icon={<IoCart />}
                  onClick={() => onClick(index, info)}
                >
                  Add to Cart
                </Button>
              </Flex>
            </Card>
          );
        })}
      </>
    );
  }, [data, onClick]);
  return <>{memoCards}</>;
};
