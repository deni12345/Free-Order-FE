import "./Background.css";
import { Typography } from "antd";
import { IoFastFoodSharp } from "react-icons/io5";

type BackgroundProp = {
  title: string;
};

export const Background = ({ title }: BackgroundProp) => {
  const { Title } = Typography;

  return (
    <div className="area">
      <Title level={1}>
        <IoFastFoodSharp />
        Free Order
      </Title>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
