import { Flex } from "antd";
import { AnalyticCard } from ".";

export const AnalyticGroup = () => {
  return (
    <Flex gap={"1vw"}>
      <AnalyticCard />
      <AnalyticCard />
      <AnalyticCard />
      <AnalyticCard />
    </Flex>
  );
};
