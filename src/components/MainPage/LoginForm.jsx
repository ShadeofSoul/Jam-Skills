import React, { useEffect, useState } from "react";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import { Button, Input, Alert } from "antd";
import { Typography } from "antd";
import "./main.css";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/auth";

const { Title } = Typography;

const LoginForm = () => {
  const [newUser, setNewUser] = useState({});

  // const { loginUser, user, loading, errorMessage, clearState } = useAuth();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const success = useSelector((state) => state.user.success);

  // ===========

  const handleChange = (e) => {
    let newObj = {
      ...newUser,
    };
    newObj[e.target.name] = e.target.value;
    setNewUser(newObj);
  };

  const dispatch = useDispatch();

  const signin = (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser(newUser));
    } catch (e) {
      console.log(e);
    }
  };

  if (success) {
    navigate("/home");
  } else {
    console.log(success);
  }

  return (
    <div style={{ marginTop: "150px" }} className="mainRight">
      <Title style={{ color: "#1890FF" }} level={1}>
        Авторизация
      </Title>
      {errorMessage ? (
        <Alert
          style={{ width: 620, margin: "0 auto" }}
          message={errorMessage}
          type="error"
          showIcon
        />
      ) : null}
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
        <input
          onChange={(e) => handleChange(e)}
          name="password"
          style={{ height: "55px", width: "563px" }}
          placeholder="Пароль"
          type="password"
        />
      </div>
      <Button
        onClick={(e) => signin(e)}
        style={{ width: "230px", margin: "0 auto" }}
        type="primary"
        size="middle"
      >
        Войти
      </Button>
    </div>
  );
};

export default LoginForm;
