import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/HomePage/Home";
import AuthContextProvider from "../components/MainPage/auth";
import Main from "../components/MainPage/Main";
import Gatb from "../components/TestPage/Gatb-5";
import HolTest from "../components/TestPage/HolTest";
import Timer from "../components/TestPage/Timer";
import UskTest from "../components/TestPage/UskTest";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/holtest" element={<HolTest />} />
      <Route exact path="/usktest" element={<UskTest />} />
      <Route exact path="/gatb-5test" element={<Gatb />} />
      <Route exact path="/timer" element={<Timer />} />
    </Routes>
  );
};

export default Pages;
