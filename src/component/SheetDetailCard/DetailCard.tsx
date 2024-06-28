import "./DetailCard.css";
import { Button, Card, Flex, Typography } from "antd";
import { FaFileExcel } from "react-icons/fa";

const { Text, Title } = Typography;
export type DetailCardProps = {
  style: React.CSSProperties | {};
  classNames?: string;
};
export const DetailCard = ({
  style,
  classNames: className,
}: DetailCardProps) => {
  return (
    <Card hoverable style={style} className={className}>
      <Flex className="analytic-flex-wrapper" gap={10}>
        <Flex vertical flex={0.65}>
          <Title className="detail-title" level={4}>
            Purity UI Dashboard
          </Title>
          <Text className="detail-text" type="secondary">
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </Text>
          <Button>Read more</Button>
        </Flex>
        <Flex className="detail-flex-icon-wrapper" flex={0.35}>
          <FaFileExcel />
          <Text>Detail Sheet</Text>
        </Flex>
      </Flex>
    </Card>
  );
};
