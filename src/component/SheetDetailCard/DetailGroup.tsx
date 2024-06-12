import { Flex } from "antd";
import { DetailCard } from ".";

export const DetailGroup = () => {
  return (
    <Flex style={{ margin: "20px 0px" }} gap={"1vw"} wrap="wrap">
      <DetailCard style={{ flex: 0.57, height: "300px" }} />
      <DetailCard style={{ flex: 0.43 }} />
    </Flex>
  );
};
