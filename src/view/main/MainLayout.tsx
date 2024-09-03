import { SideMenu } from "../../component/SideMenu";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet, useLocation } from "react-router-dom";
import { BreadCrumb } from "../../component/BreadCrumb/BreadCrumb";
import { Layout } from "antd";
import { useState } from "react";

export const MainLayout = () => {
  const location = useLocation();
  let paths = location.pathname.split("/").slice(1);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  //const memo = useCallback((str: string) => setSelectedMenuItem(str), []);

  return (
    <div>
      <Layout style={{ overflow: "hidden", height: "100vh" }}>
        <SideMenu
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        />
        <Layout className="layout-content">
          <Header style={{ padding: 0 }}>
            <BreadCrumb
              paths={paths}
              setSelectedMenuItem={setSelectedMenuItem}
            />
          </Header>
          <Content style={{ marginBottom: 10 }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
