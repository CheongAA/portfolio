import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "components/layout/Layout";
import About from "pages/About";
import Home from "pages/Home";
import ROUTES from "routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={ROUTES.HOME.url} element={<Home />} />
          <Route path={ROUTES.ABOUT.url} element={<About />} />
          <Route path={ROUTES.WORKS.url} element={<About />} />
          <Route path={ROUTES.CONTACT.url} element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
