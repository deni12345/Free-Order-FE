import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { SideMenu } from "./component/SideMenu";
import { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <SideMenu theme="dark" defaultSelectedKeys={["fo-dashboard"]} />
        </Sider>
      </Layout>
    </div>
  );
}

export default App;
