import React, { useEffect, useState } from "react";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import { Button, Input, Alert } from "antd";
import { Typography } from "antd";
import "./main.css";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/auth";

const { Title } = Typography;

export const RegForm = () => {
  const {
    registerUser,
    loginUser,
    user,
    loading,
    errorMessage,
    success,
    clearState,
    checkAuth,
    logout,
  } = useAuth();

  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let newObj = {
      ...newUser,
    };
    newObj[e.target.name] = e.target.value;
    setNewUser(newObj);
  };

  const signup = (e) => {
    e.preventDefault();
    try {
      registerUser(newUser);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (success) {
      navigate.push("/login");
    }

    return () => {
      clearState();
    };
  }, [success]);

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className="mainRight">
      <Title style={{ color: "#1890FF" }} level={1}>
        Регистрация
      </Title>
      {errorMessage ? (
        <Alert
          message="Error"
          description={errorMessage}
          type="error"
          showIcon
        />
      ) : null}
      <div className="user">
        <UserOutlined className="icon" />
        <div>
          <Input
            name="last_name"
            className="inp1"
            onChange={(e) => handleChange(e)}
            placeholder="Фамилия"
          />
          <Input
            name="first_name"
            placeholder="Имя"
            onChange={(e) => handleChange(e)}
          />
          <Input
            name="patronymic"
            onChange={(e) => handleChange(e)}
            placeholder="Отчество"
          />
        </div>
      </div>
      <div className="mail">
        <MailOutlined className="icon" />
        <Input
          onChange={(e) => handleChange(e)}
          name="email"
          placeholder="example@mail.com"
        />
      </div>
      <div className="lock">
        <LockOutlined className="icon" />
        <div>
          <input
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="Пароль"
            type="password"
          />
          <input
            // name="password2"
            // onChange={(e) => handleChange(e)}
            placeholder="Повторите пароль"
            type="password"
          />
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
        onClick={(e) => signup(e)}
      >
        Создать
      </Button>
    </div>
  );
};
