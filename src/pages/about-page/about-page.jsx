import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, Route, Routes } from "react-router-dom";
import AboutHistory from "./about-history";
import "./about-page.css";
import AboutStaff from "./about-basic";
import { reviews_data, staff_data } from "../../redux/data";
import AboutStocks from "./about-stock/about-stocks";
import AboutBlog from "./about-blog";
import { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="about_wrapper">
      <div
        className="about_top_menu"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <NavLink to="/">
          <div className="about_menu_elem">
            <p>Главная</p>
          </div>
        </NavLink>
        <div className="centre_dot">
          <span>•</span>
        </div>

        <NavLink to="history">
          <div className="about_menu_elem">
            <p>История компании</p>
          </div>
        </NavLink>
        <div className="centre_dot">
          <span>•</span>
        </div>
        <NavLink to="staff">
          <div className="about_menu_elem">
            <p>Наши сотрудники</p>
          </div>
        </NavLink>
        <div className="centre_dot">
          <span>•</span>
        </div>
        <NavLink to="reviews">
          <div className="about_menu_elem">
            <p>Отзывы</p>
          </div>
        </NavLink>
        <div className="centre_dot">
          <span>•</span>
        </div>
        <NavLink to="stocks">
          <div className="about_menu_elem">
            <p>Акции</p>
          </div>
        </NavLink>
        <div className="centre_dot">
          <span>•</span>
        </div>
        <NavLink to="blog">
          <div className="about_menu_elem">
            <p>Блог</p>
          </div>
        </NavLink>
      </div>

      <div className="about_content">
        <Routes>
          <Route path="/" element={<AboutHistory />} />
          <Route path="/history" element={<AboutHistory />} />
          <Route
            path="/staff"
            element={<AboutStaff title="Наши сотрудники" data={staff_data} />}
          />
          <Route
            path="/reviews"
            element={<AboutStaff title="Отзывы" data={reviews_data} />}
          />
          <Route path="/stocks" element={<AboutStocks />} />
          <Route path="/blog" element={<AboutBlog />} />
        </Routes>
      </div>
    </div>
  );
}

export default AboutPage;
