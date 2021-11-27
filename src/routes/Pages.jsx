import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/HomePage/Home";
import Main from "../components/MainPage/Main";
import Test from "../components/TestPage/Test";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/test" element={<Test />} />
    </Routes>
  );
};

export default Pages;
