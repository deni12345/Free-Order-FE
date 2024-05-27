import "./DetailCard.css";
import { Button, Card, Flex, Typography } from "antd";
import { FaFileExcel } from "react-icons/fa";

const { Text, Title } = Typography;
export type DetailCardProps = {
  style: React.CSSProperties | {};
};
export const DetailCard = ({ style }: DetailCardProps) => {
  return (
    <Card hoverable style={style}>
      <Flex justify="space-between" className="analytic-flex-wrapper">
        <Flex vertical>
          <Title style={{ fontWeight: "bold" }} level={4}>
            Purity UI Dashboard
          </Title>
          <Text className="analytic-text" type="secondary">
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </Text>
          <Button>Read more</Button>
        </Flex>
        <Flex className="analytic-flex-icon-wrapper">
          <FaFileExcel />
        </Flex>
      </Flex>
    </Card>
  );
};
