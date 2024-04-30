import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./sass/index.scss";
import Home from "./components/Home";
import Moviedetails from "./components/Moviedetails";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:imdbId" element={<Moviedetails />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
);
