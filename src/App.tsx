import "./App.css";
import { Breadcrumb, Layout } from "antd";
import { SideMenu } from "./component/SideMenu";
import { Content, Footer, Header } from "antd/es/layout/layout";

function App() {
  return (
    <div>
      <Layout>
        <SideMenu />
        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              Bill is a cat.
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
