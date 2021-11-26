import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/HomePage/Home";
import Main from "../components/MainPage/Main";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
};

export default Pages;
