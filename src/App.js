import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<div>home</div>} />
          <Route path="/mypage" element={<div>mypage</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
