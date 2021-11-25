import React from "react";
import { Row, Col, Space, Button, Input } from "antd";
import logo from "../../media/Rectangle 1.png";
import { Typography } from "antd";
import "./main.css";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

const { Title } = Typography;

const Main = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

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
            <Title disabled level={5}>
              Если Вы уже зарегистрированны, <br /> войдите в свой кабинет
            </Title>
            <Button
              style={{
                border: "1px solid white",
                paddingLeft: "60px",
                paddingRight: "60px",
              }}
              type="primary"
            >
              Войти
            </Button>
          </Space>
        </Col>
        <Col span={15}>
          <div className="mainRight">
            <Title style={{ color: "#1890FF" }} level={1}>
              Регистрация
            </Title>
            <div className="user">
              <UserOutlined className="icon" />
              <div>
                <Input className="inp1" placeholder="Фамилия" />
                <Input placeholder="Имя" />
                <Input placeholder="Отчество" />
              </div>
            </div>
            <div className="mail">
              <MailOutlined className="icon" />
              <Input placeholder="example@mail.com" />
            </div>
            <div className="lock">
              <LockOutlined className="icon" />
              <div>
                <input placeholder="Пароль" type="password" />
                <input placeholder="Повторите пароль" type="password" />
              </div>
            </div>
            <span className="check">
              <Checkbox onChange={onChange}>
                <span style={{ color: "black" }}> Принимаю</span>
              </Checkbox>{" "}
              Пользовательское соглашение и Политику конфиденциальности
            </span>
            <Button
              style={{ width: "230px", margin: "0 auto" }}
              type="primary"
              size="middle"
            >
              Создать
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Main;
