import React, { useState } from "react";
import { Row, Col, Space, Button, Input } from "antd";
import logo from "../../media/Rectangle 1.png";
import { Typography } from "antd";
import "./main.css";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import { RegForm } from "./RegForm";
import LoginForm from "./LoginForm";

const { Title } = Typography;

const Main = () => {
  const [log, setLog] = useState(false);
  return (
    <>
      <Row>
        <Col className="mainLeft" span={9}>
          <Space
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "150px",
              textAlign: "center",
            }}
            direction="vertical"
            size="middle"
            align="center"
          >
            <img src={logo} alt="logo" />
            <Title style={{ color: "white" }} level={2}>
              Добро пожаловать!
            </Title>
            <Title style={{ color: "white" }} level={5}>
              Jamskills - это сервис для автоматизации оценки <br /> сотрудников
              и кандидатов!
            </Title>

            {log ? (
              <Title disabled level={5}>
                Если Вы уже зарегистрированны, <br /> войдите в свой кабинет
              </Title>
            ) : (
              <Title disabled level={5}>
                Если Вы еще не зарегистрированны, <br />
                создайте свой кабинет
              </Title>
            )}
            <Button
              style={{
                border: "1px solid white",
                paddingLeft: "60px",
                paddingRight: "60px",
              }}
              type="primary"
              onClick={() => setLog(!log)}
            >
              {log ? "Войти" : "Создать"}
            </Button>
          </Space>
        </Col>
        <Col span={15}>{log ? <RegForm /> : <LoginForm />}</Col>
      </Row>
    </>
  );
};

export default Main;
