import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/MainPage/Main";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
    </Routes>
  );
};

export default Pages;
