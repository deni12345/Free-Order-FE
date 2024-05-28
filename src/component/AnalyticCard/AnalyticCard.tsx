import "./AnalyticCard.css";
import { Card, Flex, Typography } from "antd";
import { IoWalletOutline } from "react-icons/io5";

const { Text } = Typography;

export const AnalyticCard = () => {
  return (
    <Card hoverable style={{ flex: 1 }}>
      <Flex
        justify="space-between"
        align="center"
        className="analytic-flex-wrapper"
      >
        <Flex vertical>
          <Text className="analytic-text" type="secondary">
            Today's Money
          </Text>
          <Text className="analytic-text">$53,000</Text>
        </Flex>
        <Flex className="analytic-flex-icon-wrapper">
          <IoWalletOutline />
        </Flex>
      </Flex>
    </Card>
  );
};
