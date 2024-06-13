import { Flex } from "antd";
import { DetailCard } from ".";
import Image from "../../assets/cozy_coffee.jpg";

export const DetailGroup = () => {
  return (
    <Flex style={{ margin: "20px 0px" }} gap={"1vw"}>
      <DetailCard style={{ flex: 0.57, height: "300px" }} />
      <DetailCard
        style={{
          flex: 0.43,
          background: `url(${Image}),
             -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 1%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0) 100%)`,
          backgroundBlendMode: "color",
          backgroundSize: "cover",
        }}
      />
    </Flex>
  );
};
