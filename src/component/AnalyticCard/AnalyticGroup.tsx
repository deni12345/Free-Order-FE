import { Flex } from "antd";
import { AnalyticCard } from ".";

export const AnalyticGroup = () => {
  return (
    <Flex gap={"1vw"} flex={0.5}>
      <AnalyticCard />
      <AnalyticCard />
      <AnalyticCard />
      <AnalyticCard />
    </Flex>
  );
};
