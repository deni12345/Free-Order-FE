import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

type BreadCrumbProp = {
  paths: string[];
};

export const BreadCrumb = ({ paths }: BreadCrumbProp) => {
  console.log("paths: ", paths);
  return (
    <Breadcrumb
      style={{ marginBlock: 16 }}
      items={paths.map(
        (p, index): ItemType => ({
          title: <Link to={`${paths.slice(0, index + 1).join("/")}`}>{p}</Link>,
        })
      )}
    />
  );
};
