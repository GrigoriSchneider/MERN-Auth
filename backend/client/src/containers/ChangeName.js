import { Button, Col, Form, Input, message, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import useCustomers from "../_actions/customerActions";

function ChangeName() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { customerChangeName } = useCustomers();
  const onFinish = (values) => {
    const data = {
      firstName: values.newFirstName,
      lastName: values.newLastName,
    };
    console.log(data);
    dispatch(customerChangeName(data)).then((res) => {
      if (res.payload.status) {
        message.success(res.payload.message);
      } else {
        message.error(res.payload.message);
      }
    });
  };
  return (
    <div className="page-wrapper">
      <Row justify="center" style={{ minHeight: "100vh" }}>
        <Col xs={24} sm={16} md={12} lg={8} xl={6} xxl={6}>
          <h2>Change Name</h2>
          <Form
            form={form}
            name="changePassword"
            layout="vertical"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="newFirstName"
              label="New Firstname"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              name="newLastName"
              label="New Lastname"
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name!",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Change Name
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default ChangeName;
