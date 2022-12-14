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
          <NavLink to="populars" onClick={() => setMenu("???????? ????????????")}>
            <div className="catal_menu_item">
              <div className="menu_list_item">
                <Star />
                <p>???????? ????????????</p>
              </div>
            </div>
          </NavLink>

          <NavLink to="discounts" onClick={() => setMenu("????????????")}>
            <div className="catal_menu_item">
              <div className="menu_list_item">
                <Persent />
                <p>????????????</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="new" onClick={() => setMenu("??????????????")}>
            <div className="catal_menu_item">
              <div className="menu_list_item">
                <New />
                <p>??????????????</p>
              </div>
            </div>
          </NavLink>

          <div
            className="catal_menu_item"
            onClick={() => setMenu("?????????????????? ?? ???????????? ??????????????")}
          >
            <div
              className={
                !meatToggle ? "menu_list_item" : "menu_list_item active"
              }
              onClick={meatLinkToggle}
            >
              <Sausage />
              <p>?????????????????? ?? ???????????? ??????????????</p>
            </div>
            <div
              className={
                meatToggle ? "menu_items_list" : "menu_items_list close_list"
              }
            >
              <ul>
                <NavLink to="meat-bird">
                  <li>???????????????? ???? ???????? ?? ??????????</li>
                </NavLink>
                <NavLink to="sausages">
                  <li>?????????????? ?? ??????????????????</li>
                </NavLink>
                <NavLink to="delicatesses">
                  <li>????????????????????</li>
                </NavLink>

                <li>??????????????</li>
                <li>??????????????????????????</li>
              </ul>
            </div>
          </div>
          <div
            className="catal_menu_item"
            onClick={() => setMenu("???????????????? ????????????????")}
          >
            <div
              className={
                !milkToggle ? "menu_list_item" : "menu_list_item active"
              }
              onClick={milkLinkToggle}
            >
              <Milky />
              <p>???????????????? ????????????????</p>
            </div>
            <div
              className={
                milkToggle ? "menu_items_list" : "menu_items_list close_list"
              }
            >
              <ul>
                <li>????????</li>
                <li>????????????</li>
                <li>??????????????</li>
                <li>??????????????</li>
              </ul>
            </div>
          </div>
          <div
            className="catal_menu_item"
            onClick={() => setMenu("????????????????????????")}
          >
            <div
              className={
                !fishToggle ? "menu_list_item" : "menu_list_item active"
              }
              onClick={fishLinkToggle}
            >
              <Fish />
              <p>????????????????????????</p>
            </div>
            <div
              className={
                fishToggle ? "menu_items_list" : "menu_items_list close_list"
              }
            >
              <ul>
                <li>????????</li>
                <li>????????</li>
                <li>????????????????</li>
              </ul>
            </div>
          </div>
          <div className="catal_menu_item">
            <div className="menu_list_item">
              <Beer />
              <p>????????</p>
            </div>
          </div>
          <div className="catal_menu_item">
            <div className="menu_list_item">
              <Cold />
              <p>???????????????????????? ????????????????</p>
            </div>
          </div>
          <div className="catal_menu_item">
            <div className="menu_list_item">
              <Honey />
              <p>??????</p>
            </div>
          </div>
          <div className="catal_menu_item">
            <div className="menu_list_item">
              <Vegetables />
              <p>???????????? ??????????</p>
            </div>
          </div>
          <div className="catal_menu_item">
            <div className="menu_list_item">
              <Fruits />
              <p>???????????? ????????????</p>
            </div>
          </div>
        </div>

        <div
          className="catalogue_filter"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="filter_title">
            <h4>????????????</h4>
          </div>
          <div className="price_filter">
            <div className="price_filter_title" onClick={priceMenuToggle}>
              <p>????????</p>
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
              <p>??????????????????????</p>
              <img
                className={sortToggle || "rotate_image"}
                src={arrow}
                alt={arrow}
              />
            </div>

            <div className={sortToggle ? "sorting_menu" : "close_filters"}>
              <div>
                <input defaultChecked type="checkbox" />
                <p>?? ?????????????? ({items.length})</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>
                  ?????? ({items.filter((el) => el.category === "??????").length})
                </p>
              </div>
              <div>
                <input type="checkbox" />
                <p>
                  ?????????????? ({items.filter((el) => el.category === "New").length})
                </p>
              </div>
              <div>
                <input type="checkbox" />
                <p>
                  ?????????? ({items.filter((el) => el.category === "????????????").length}
                  )
                </p>
              </div>
            </div>
          </div>

          <div className="clear_filter">
            <ClearIcon />
            <p>???????????????? ????????????</p>
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
              <p>??????????????</p>
            </div>
          </NavLink>
          <div className="centre_dot">
            <span>???</span>
          </div>
          <NavLink to="/catalogue">
            <div className="content_menu_elem">
              <p>??????????????</p>
            </div>
          </NavLink>

          {menuItems.length >= 1 ? (
            <>
              <div className="centre_dot">
                <span>???</span>
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
            <h1>??????????????</h1>
          </div>
          <div className="catalog_content">
            <Routes>
              <Route
                path="/"
                element={<CatalogueFilters title={"???????? ????????????"} />}
              />
              <Route
                path="/populars"
                element={<CatalogueFilters title={"???????? ????????????"} />}
              />
              <Route
                path="/discounts"
                element={<CatalogueFilters title={"????????????"} />}
              />
              <Route
                path="/new"
                element={<CatalogueFilters title={"??????????????"} />}
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
