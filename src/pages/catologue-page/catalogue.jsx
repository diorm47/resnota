import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import CatalogItems from "../../components/catalog-items/catalog-items";
import CatalogueFilters from "../../components/catalogue_3_filters/catalogue-filters";
import "./catalogue.css";

import { useEffect } from "react";
import arrow from "../../assets/icons/arrow.png";

import { ReactComponent as ClearIcon } from "../../assets/icons/delete_icon.svg";
import { ReactComponent as Beer } from "../../assets/icons/menu_icons/beer.svg";
import { ReactComponent as Cold } from "../../assets/icons/menu_icons/cold.svg";
import { ReactComponent as Fish } from "../../assets/icons/menu_icons/fish.svg";
import { ReactComponent as Fruits } from "../../assets/icons/menu_icons/fruits.svg";
import { ReactComponent as Honey } from "../../assets/icons/menu_icons/honey.svg";
import { ReactComponent as Milky } from "../../assets/icons/menu_icons/milky.svg";
import { ReactComponent as New } from "../../assets/icons/menu_icons/new.svg";
import { ReactComponent as Persent } from "../../assets/icons/menu_icons/percent.svg";
import { ReactComponent as Sausage } from "../../assets/icons/menu_icons/sausage.svg";
import { ReactComponent as Star } from "../../assets/icons/menu_icons/star.svg";
import { ReactComponent as Vegetables } from "../../assets/icons/menu_icons/vegetables.svg";
import { items } from "../../redux/data";

function CataloguePage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [meatToggle, setMeatToggle] = useState(false);
  const [milkToggle, setMilkToggle] = useState(false);
  const [fishToggle, setFishToggle] = useState(false);
  const [priceToggle, setPriceToggle] = useState(true);
  const [sortToggle, setSortToggle] = useState(true);

  const [menuItems, setMenuItems] = useState({});

  const [value, setValue] = useState([500, 2000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const meatLinkToggle = () => {
    if (meatToggle) {
      setMeatToggle(false);
    } else {
      setMeatToggle(true);
    }
  };
  const milkLinkToggle = () => {
    if (milkToggle) {
      setMilkToggle(false);
    } else {
      setMilkToggle(true);
    }
  };
  const fishLinkToggle = () => {
    if (fishToggle) {
      setFishToggle(false);
    } else {
      setFishToggle(true);
    }
  };

  const priceMenuToggle = () => {
    if (priceToggle) {
      setPriceToggle(false);
    } else {
      setPriceToggle(true);
    }
  };
  const sortMenuToggle = () => {
    if (sortToggle) {
      setSortToggle(false);
    } else {
      setSortToggle(true);
    }
  };

  const setMenu = (item) => {
    setMenuItems({});
    setMenuItems(item);
  };

  return (
    <div className="catalogue_wrapper">
      <div className="catalog_left_block">
        <div
          className="catalogue_menu"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <NavLink to="populars" onClick={() => setMenu("Хиты продаж")}>
            <div className="catal_menu_item">
              <div className="menu_list_item">
                <Star />
                <p>Хиты продаж</p>
              </div>
            </div>
          </NavLink>

          <NavLink to="discounts" onClick={() => setMenu("Скидки")}>
            <div className="catal_menu_item">
              <div className="menu_list_item">
                <Persent />
                <p>Скидки</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="new" onClick={() => setMenu("Новинки")}>
            <div className="catal_menu_item">
              <div className="menu_list_item">
                <New />
                <p>Новинки</p>
              </div>
            </div>
          </NavLink>

          <div
            className="catal_menu_item"
            onClick={() => setMenu("Колбасные и мясные изделия")}
          >
            <div
              className={
                !meatToggle ? "menu_list_item" : "menu_list_item active"
              }
              onClick={meatLinkToggle}
            >
              <Sausage />
              <p>Колбасные и мясные изделия</p>
            </div>
            <div
              className={
                meatToggle ? "menu_items_list" : "menu_items_list close_list"
              }
            >
              <ul>
                <NavLink to="meat-bird">
                  <li>Продукты из мяса и птицы</li>
                </NavLink>
                <NavLink to="sausages">
                  <li>Сосиски и сардельки</li>
                </NavLink>
                <NavLink to="delicatesses">
                  <li>Деликатесы</li>
                </NavLink>

                <li>Колбасы</li>
                <li>Полуфабрикаты</li>
              </ul>
            </div>
          </div>
          <div
            className="catal_menu_item"
            onClick={() => setMenu("Молочные продукты")}
          >
            <div
              className={
                !milkToggle ? "menu_list_item" : "menu_list_item active"
              }
              onClick={milkLinkToggle}
            >
              <Milky />
              <p>Молочные продукты</p>
            </div>
            <div
              className={
                milkToggle ? "menu_items_list" : "menu_items_list close_list"
              }
            >
              <ul>
                <li>Сыры</li>
                <li>Молоко</li>
                <li>Сметана</li>
                <li>Йогурты</li>
              </ul>
            </div>
          </div>
          <div
            className="catal_menu_item"
            onClick={() => setMenu("Морепродукты")}
          >
            <div
              className={
                !fishToggle ? "menu_list_item" : "menu_list_item active"
              }
              onClick={fishLinkToggle}
            >
              <Fish />
              <p>Морепродукты</p>
            </div>
            <div
              className={
                fishToggle ? "menu_items_list" : "menu_items_list close_list"
              }
            >
              <ul>
                <li>Рыба</li>
                <li>Икра</li>
                <li>Креветки</li>
              </ul>
            </div>
          </div>
          <div className="catal_menu_item">
            <div className="menu_list_item">
              <Beer />
              <p>Пиво</p>
            </div>
          </div>
          <div className="catal_menu_item">
            <div className="menu_list_item">
              <Cold />
              <p>Замороженные продукты</p>
            </div>
          </div>
          <div className="catal_menu_item">
            <div className="menu_list_item">
              <Honey />
              <p>Мед</p>
            </div>
          </div>
          <div className="catal_menu_item">
            <div className="menu_list_item">
              <Vegetables />
              <p>Свежие овощи</p>
            </div>
          </div>
          <div className="catal_menu_item">
            <div className="menu_list_item">
              <Fruits />
              <p>Свежие фрукты</p>
            </div>
          </div>
        </div>

        <div
          className="catalogue_filter"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="filter_title">
            <h4>Фильтр</h4>
          </div>
          <div className="price_filter">
            <div className="price_filter_title" onClick={priceMenuToggle}>
              <p>Цена</p>
              <img
                className={priceToggle || "rotate_image"}
                src={arrow}
                alt={arrow}
              />
            </div>
            <div
              className={priceToggle ? "price_filter_items " : "close_filters"}
            >
              <div className="price_filter_inputs">
                <input value={value[0]} type="text" />
                <input value={value[1]} type="text" />
              </div>
              <div className="slider_block">
                <Box sx={{ width: "100%" }}>
                  <Slider
                    aria-label="Always visible"
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={3000}
                  />
                </Box>
              </div>
            </div>
          </div>
          <div className="white_line"></div>
          <div className="sort_filter_wrapper">
            <div className="price_filter_title" onClick={sortMenuToggle}>
              <p>Сортировать</p>
              <img
                className={sortToggle || "rotate_image"}
                src={arrow}
                alt={arrow}
              />
            </div>

            <div className={sortToggle ? "sorting_menu" : "close_filters"}>
              <div>
                <input defaultChecked type="checkbox" />
                <p>В наличии ({items.length})</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>
                  Хит ({items.filter((el) => el.category === "Хит").length})
                </p>
              </div>
              <div>
                <input type="checkbox" />
                <p>
                  Новинки ({items.filter((el) => el.category === "New").length})
                </p>
              </div>
              <div>
                <input type="checkbox" />
                <p>
                  Акции ({items.filter((el) => el.category === "Скидка").length}
                  )
                </p>
              </div>
            </div>
          </div>

          <div className="clear_filter">
            <ClearIcon />
            <p>Сбросить фильтр</p>
          </div>
        </div>
      </div>

      <div className="catalog_right_block">
        <div
          className="content_top_menu"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <NavLink to="/">
            <div className="content_menu_elem">
              <p>Главная</p>
            </div>
          </NavLink>
          <div className="centre_dot">
            <span>•</span>
          </div>
          <NavLink to="/catalogue">
            <div className="content_menu_elem">
              <p>Каталог</p>
            </div>
          </NavLink>

          {menuItems.length >= 1 ? (
            <>
              <div className="centre_dot">
                <span>•</span>
              </div>

              <div className="content_menu_elem">
                <p>{menuItems}</p>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="catalog_contet_block">
          <div
            className="catalog_title"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h1>Каталог</h1>
          </div>
          <div className="catalog_content">
            <Routes>
              <Route
                path="/"
                element={<CatalogueFilters title={"Хиты продаж"} />}
              />
              <Route
                path="/populars"
                element={<CatalogueFilters title={"Хиты продаж"} />}
              />
              <Route
                path="/discounts"
                element={<CatalogueFilters title={"Скидки"} />}
              />
              <Route
                path="/new"
                element={<CatalogueFilters title={"Новинки"} />}
              />
              <Route path="/meat-bird" element={<CatalogItems />} />
              <Route path="/sausages" element={<CatalogItems />} />
              <Route path="/delicatesses" element={<CatalogItems />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CataloguePage;
