import { SideMenu } from "../component/SideMenu";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet, useLocation } from "react-router-dom";
import { BreadCrumb } from "../component/BreadCrumb/BreadCrumb";
import { Layout } from "antd";

export const MainLayout = () => {
  const location = useLocation();
  let paths = location.pathname.split("/").slice(1);
  return (
    <div>
      <Layout>
        <SideMenu />
        <Layout className="layout-content">
          <Header style={{ padding: 0 }}>
            <BreadCrumb paths={paths} />
          </Header>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
