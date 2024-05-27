import "./App.css";
import { Breadcrumb, Flex, Layout } from "antd";
import { SideMenu } from "./component/SideMenu";
import { Content, Header } from "antd/es/layout/layout";
import { AnalyticGroup } from "./component/AnalyticGroup";
import { DetailGroup } from "./component/SheetDetailCard/DetailGroup";

function App() {
  return (
    <div>
      <Layout>
        <SideMenu />
        <Layout className="layout-content">
          <Header style={{ padding: 0 }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content>
            <AnalyticGroup />
            <DetailGroup />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
