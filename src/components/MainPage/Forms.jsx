import React from "react";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import { Button, Input } from "antd";
import { Typography } from "antd";
import "./main.css";

const { Title } = Typography;

export const RegForm = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
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
  );
};

export const LogForm = () => {
  return (
    <div style={{ marginTop: "150px" }} className="mainRight">
      <Title style={{ color: "#1890FF" }} level={1}>
        Авторизация
      </Title>
      <div className="mail">
        <MailOutlined className="icon" />
        <Input placeholder="example@mail.com" />
      </div>
      <div className="lock">
        <LockOutlined className="icon" />
        <input
          style={{ height: "55px", width: "563px" }}
          placeholder="Пароль"
          type="password"
        />
      </div>
      <Button
        style={{ width: "230px", margin: "0 auto" }}
        type="primary"
        size="middle"
      >
        Войти
      </Button>
    </div>
  );
};
