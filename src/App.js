import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import AboutItem from "./components/about_item/about-item";
import Footer from "./components/footer/footer";
import Navbar from "./components/nav-bar/nav-bar";
import Search from "./components/search/search";
import AboutPage from "./pages/about-page/about-page";
import CataloguePage from "./pages/catologue-page/catalogue";
import MainPage from "./pages/main-page/main-page";
import BoughtItems from "./pages/selected-items-page/bought-items";
import FavoriteItems from "./pages/selected-items-page/favorite-items";

function App() {
  const serchingItem = useSelector((state) => state.search.searched);
  return (
    <div className="app_wrapper">
      <Navbar />
      <div className="app_content">
        {serchingItem ? (
          <Search />
        ) : (
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalogue/*" element={<CataloguePage />} />
            <Route path="/about-resnota/*" element={<AboutPage />} />
            <Route path="/about/:id" element={<AboutItem />} />

            <Route path="/favorite" element={<FavoriteItems />} />
            <Route path="/bought" element={<BoughtItems />} />

            <Route path="*" element={"Page not found"} />
          </Routes>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
