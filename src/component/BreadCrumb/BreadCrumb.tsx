import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

type BreadCrumbProp = {
  paths: string[];
  setSelectedMenuItem: (_: string) => void;
};

export const BreadCrumb = ({ paths, setSelectedMenuItem }: BreadCrumbProp) => {
  console.log("paths: ", paths);
  return (
    <Breadcrumb
      style={{ marginBlock: 16 }}
      items={paths.map(
        (p, index): ItemType => ({
          title: (
            <Link
              to={`${paths.slice(0, index + 1).join("/")}`}
              onClick={() => setSelectedMenuItem(`fo-${p}`)}
            >
              {p}
            </Link>
          ),
        })
      )}
    />
  );
};
