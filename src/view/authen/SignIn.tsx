import "./SignIn.css";
import { Button, Flex, Form, Input, Switch, Typography } from "antd";
import { Background } from "../../assets/Background/Background";
import { useAuth } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const { setNewToken } = useAuth();
  const navigate = useNavigate();
  const { Title, Text } = Typography;

  const onSubmit = (values: any) => {
    setNewToken("this is a new token");
    navigate("/");
    console.log("Received values of form: ", values);
  };

  return (
    <Flex>
      <Flex flex={1} justify="center" align="center">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          requiredMark={false}
          layout="vertical"
        >
          <div className="form-header">
            <Title level={2}>Welcome Back</Title>
            <Text type="secondary">
              Enter your email and password to sign in
            </Text>
          </div>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Switch defaultValue={false} />
            </Form.Item>
            <span style={{ marginInline: 5 }}>Remember me</span>
            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <Text type="secondary" className="form-footer">
              Don't have an account? Sign up <a href="/">register now!</a>
            </Text>
          </Form.Item>
        </Form>
      </Flex>
      <Flex flex={1}>
        <Background title="Free Order" />
      </Flex>
    </Flex>
  );
};
