import React, { useState } from "react";
import { Layout } from "antd";
import logo from "../../media/logo.png";
import { Typography } from "antd";
import "./home.css";
import {
  UserOutlined,
  HomeFilled,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import Desk from "./Desk";
import { useSelector } from "react-redux";
const { Search } = Input;

const { Title } = Typography;

const { Header, Sider, Content } = Layout;

const Home = () => {
  const onSearch = (value) => console.log(value);
  const user = useSelector((state) => state.user);
  console.log(user);
  const success = useSelector((state) => state.user.success);
  console.log(success);
  // ===========
  //  ===========  FOR TABLE =========
  //====================================================

  return (
    <>
      <div className="header">
        <div style={{ marginLeft: "10px" }}>
          <img width="35px" src={logo} alt="logo" />

          <strong style={{ color: " #1890ff", marginLeft: "20px" }}>
            Jamskills
          </strong>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="g"> Александр Игоревич</p>
          <UserOutlined className="icon2" />
        </div>
      </div>
      <Layout>
        <Sider className="sider">
          <div>
            <HomeFilled className="icon2" />
            <span className="g">Домашняя страница</span>
          </div>
          <div style={{ marginTop: "550px" }}>
            <SettingOutlined className="icon2" />
            <span className="g"> Настройки</span>
            <br />
            <UserOutlined className="icon2" />
            <span className="g">Профиль</span>
            <br />
            <LogoutOutlined className="icon2" />
            <span className="g">Выход</span>
          </div>
        </Sider>
        <Layout>
          <Header className="header2">
            <span className="g">Домашняя страница</span>
            <Title style={{ color: "#1890ff" }} level={5}>
              Домашняя страница
            </Title>
            <svg
              width="30"
              height="30"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0721 9.95694V8.02836C25.0721 7.85158 24.9275 7.70694 24.7507 7.70694H9.32213C9.14534 7.70694 9.0007 7.85158 9.0007 8.02836V9.95694C9.0007 10.1337 9.14534 10.2784 9.32213 10.2784H24.7507C24.9275 10.2784 25.0721 10.1337 25.0721 9.95694ZM9.32213 13.4927C9.14534 13.4927 9.0007 13.6373 9.0007 13.8141V15.7427C9.0007 15.9194 9.14534 16.0641 9.32213 16.0641H16.715C16.8918 16.0641 17.0364 15.9194 17.0364 15.7427V13.8141C17.0364 13.6373 16.8918 13.4927 16.715 13.4927H9.32213ZM24.4293 18.1534C19.636 18.1534 15.7507 22.0386 15.7507 26.8319C15.7507 31.6252 19.636 35.5105 24.4293 35.5105C29.2226 35.5105 33.1078 31.6252 33.1078 26.8319C33.1078 22.0386 29.2226 18.1534 24.4293 18.1534ZM28.7485 31.1511C27.5953 32.3043 26.0605 32.9391 24.4293 32.9391C22.798 32.9391 21.2632 32.3043 20.1101 31.1511C18.9569 29.998 18.3221 28.4632 18.3221 26.8319C18.3221 25.2007 18.9569 23.6659 20.1101 22.5127C21.2632 21.3596 22.798 20.7248 24.4293 20.7248C26.0605 20.7248 27.5953 21.3596 28.7485 22.5127C29.9016 23.6659 30.5364 25.2007 30.5364 26.8319C30.5364 28.4632 29.9016 29.998 28.7485 31.1511ZM28.0052 23.7784H26.2253C26.1208 23.7784 26.0244 23.8266 25.9641 23.911L23.4128 27.4386L22.4846 26.1569C22.4549 26.1155 22.4157 26.0819 22.3702 26.0588C22.3248 26.0357 22.2744 26.0239 22.2235 26.0243H20.4516C20.1904 26.0243 20.0378 26.3217 20.1904 26.5346L23.1556 30.6368C23.2842 30.8136 23.5453 30.8136 23.6739 30.6368L28.2623 24.2886C28.419 24.0757 28.2663 23.7784 28.0052 23.7784ZM15.1078 31.6534H5.78641V3.36765H28.2864V17.1891C28.2864 17.3659 28.4311 17.5105 28.6078 17.5105H30.8578C31.0346 17.5105 31.1793 17.3659 31.1793 17.1891V1.76051C31.1793 1.04935 30.6047 0.474792 29.8936 0.474792H4.17927C3.46811 0.474792 2.89355 1.04935 2.89355 1.76051V33.2605C2.89355 33.9717 3.46811 34.5462 4.17927 34.5462H15.1078C15.2846 34.5462 15.4293 34.4016 15.4293 34.2248V31.9748C15.4293 31.798 15.2846 31.6534 15.1078 31.6534Z"
                fill="black"
                fill-opacity="0.45"
              />
            </svg>
          </Header>
          <Content className="content">
            <div className="statistic">
              <div>
                <span style={{ color: "#1890FF" }} className="point">
                  .
                </span>
                <span>Всего приглашений</span>
                <Title level={5}>234</Title>
              </div>
              <div>
                <span style={{ color: "#73D13D" }} className="point">
                  .
                </span>
                <span>Пройдено</span>
                <Title level={5}>45</Title>
              </div>
              <div>
                <span style={{ color: "#FAAD14" }} className="point">
                  .
                </span>
                <span>В процессе</span>
                <Title level={5}>2</Title>
              </div>
              <div>
                <span style={{ color: "#FF4D4F" }} className="point">
                  .
                </span>
                <span>Отказано</span>
                <Title level={5}>76</Title>
              </div>
            </div>
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{ width: 350 }}
            />
            <div>
              <Desk />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
