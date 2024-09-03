import { Flex } from "antd";
import { DetailCard } from ".";

export const DetailGroup = () => {
  return (
    <Flex gap={"1vw"} flex={1}>
      <DetailCard style={{ flex: 0.57 }} />
      <DetailCard classNames={"image-card"} style={{ flex: 0.43 }} />
    </Flex>
  );
};
