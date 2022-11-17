import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactComponent as Basket } from "../../assets/icons/basket.svg";
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg";
import { ReactComponent as Logo } from "../../assets/icons/main-logo.svg";
import { ReactComponent as Search } from "../../assets/icons/search_icon.svg";
import { searchingItem } from "../../redux/search-reducer";
import "./nav-bar.css";

import { useEffect } from "react";
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
import { ReactComponent as MenuBurger } from "../../assets/icons/burger_nenu.svg";
import { ReactComponent as MenuArrow } from "../../assets/icons/menu_arrow.svg";

function Navbar() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [catalMenu, setCatMenu] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const dispatch = useDispatch();
  const inFav = useSelector((state) => state.favorite.favorite);
  const inCart = useSelector((state) => state.cart.cart);
  const summ = inCart.reduce((acc, cart) => acc + cart.price, 0);

  const onSearch = (value) => {
    dispatch(searchingItem(value));
  };

  const catMenuToggle = () => {
    if (catalMenu) {
      setCatMenu(false);
    } else {
      setCatMenu(true);
    }
  };

  const navMenuToggle = () => {
    if (navMenu) {
      setNavMenu(false);
    } else {
      setNavMenu(true);
    }
  };
  return (
    <div className="nav_wrapper">
      <nav>
        <div className="top_nav_wrapper">
          <div className="top_nav">
            <div
              className="top_left_part"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <NavLink to="/">
                <div className="nav_logo">
                  <Logo />
                </div>
              </NavLink>

              <div className="nav_description">
                <p>
                  Колбасы и мясные <br /> деликатесы
                </p>
              </div>
            </div>
            <div
              className="top_right_part"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="favorite_block">
                <NavLink to="/favorite">
                  <div className="favorite_icon">
                    <Favorite />
                    {!inFav.length || (
                      <div className="in_favorite">
                        <p>{inFav.length}</p>
                      </div>
                    )}
                  </div>
                </NavLink>
                <NavLink to="/bought">
                  <div className="basket_block">
                    <div className="basket_icon">
                      <Basket />
                      <div className="in_cart_detector">
                        {!inCart.length || (
                          <div className="in_cart_det">
                            <p>{inCart.length}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="in_basket_descr">
                      <div className="items_length">
                        <p>Товаров: {inCart.length} </p>
                      </div>
                      <div className="items_summ">
                        <span>{summ} ₽</span>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="bottom_nav_wrapper">
            <div className="bottom_nav">
              <div
                className="nav_burger"
                data-aos="fade-right"
                data-aos-duration="1000"
                onClick={navMenuToggle}
              >
                <MenuBurger />
              </div>
              <div
                className="nav_list"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <NavLink to="/about-resnota">
                  <div className="nav_list_item">
                    <h4>O ресноте</h4>
                  </div>
                </NavLink>

                <NavLink to="/catalogue">
                  <div className="catalogue_link_menu">
                    <div className="nav_list_item catalogue_list_item ">
                      <h4>Каталог</h4>
                      <MenuArrow
                        className={!catalMenu || "reversed_icon"}
                        onClick={catMenuToggle}
                      />
                    </div>

                    <div
                      className={
                        catalMenu ? "catalogue_menu_nav" : " hide_cat_menu"
                      }
                    >
                      <NavLink to="/catalogue/populars">
                        <div className="catal_menu_item">
                          <div className="menu_list_item">
                            <Star />
                            <p>Хиты продаж</p>
                          </div>
                        </div>
                      </NavLink>

                      <NavLink to="/catalogue/discounts">
                        <div className="catal_menu_item">
                          <div className="menu_list_item">
                            <Persent />
                            <p>Скидки</p>
                          </div>
                        </div>
                      </NavLink>
                      <NavLink to="/catalogue/new">
                        <div className="catal_menu_item">
                          <div className="menu_list_item">
                            <New />
                            <p>Новинки</p>
                          </div>
                        </div>
                      </NavLink>

                      <div className="catal_menu_item">
                        <div className="menu_list_item ">
                          <Sausage />
                          <p>Колбасные и мясные изделия</p>
                        </div>
                      </div>
                      <div className="catal_menu_item">
                        <div className="menu_list_item">
                          <Milky />
                          <p>Молочные продукты</p>
                        </div>
                      </div>
                      <div className="catal_menu_item">
                        <div className="menu_list_item">
                          <Fish />
                          <p>Морепродукты</p>
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
                  </div>
                </NavLink>

                <div
                  className="nav_list_item"
                  onClick={() => setCatMenu(false)}
                >
                  <h4>Наши магазины</h4>
                </div>

                <div
                  className="nav_list_item"
                  onClick={() => setCatMenu(false)}
                >
                  <h4>Контакты</h4>
                </div>
              </div>
              <div
                className={
                  navMenu ? "nav_list_mobile" : "nav_list_mobile hide_nav_list"
                }
              >
                <NavLink to="/about-resnota">
                  <div
                    className="nav_list_item"
                    onClick={() => setCatMenu(false)}
                  >
                    <h4>O ресноте</h4>
                  </div>
                </NavLink>

                <NavLink to="/catalogue">
                  <div className="catalogue_link_menu">
                    <div className="nav_list_item catalogue_list_item ">
                      <h4>Каталог</h4>
                      <MenuArrow
                        className={!catalMenu || "reversed_icon"}
                        onClick={catMenuToggle}
                      />
                    </div>

                    <div
                      className={
                        catalMenu ? "catalogue_menu_nav" : " hide_cat_menu"
                      }
                    >
                      <NavLink to="/catalogue/populars">
                        <div className="catal_menu_item">
                          <div className="menu_list_item">
                            <Star />
                            <p>Хиты продаж</p>
                          </div>
                        </div>
                      </NavLink>

                      <NavLink to="/catalogue/discounts">
                        <div className="catal_menu_item">
                          <div className="menu_list_item">
                            <Persent />
                            <p>Скидки</p>
                          </div>
                        </div>
                      </NavLink>
                      <NavLink to="/catalogue/new">
                        <div className="catal_menu_item">
                          <div className="menu_list_item">
                            <New />
                            <p>Новинки</p>
                          </div>
                        </div>
                      </NavLink>

                      <div className="catal_menu_item">
                        <div className="menu_list_item ">
                          <Sausage />
                          <p>Колбасные и мясные изделия</p>
                        </div>
                      </div>
                      <div className="catal_menu_item">
                        <div className="menu_list_item">
                          <Milky />
                          <p>Молочные продукты</p>
                        </div>
                      </div>
                      <div className="catal_menu_item">
                        <div className="menu_list_item">
                          <Fish />
                          <p>Морепродукты</p>
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
                  </div>
                </NavLink>

                <div
                  className="nav_list_item"
                  onClick={() => setCatMenu(false)}
                >
                  <h4>Наши магазины</h4>
                </div>

                <div
                  className="nav_list_item"
                  onClick={() => setCatMenu(false)}
                >
                  <h4>Контакты</h4>
                </div>
              </div>
              <div
                className="nav_search_field "
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <input
                  type="text"
                  placeholder="Поиск по сайту"
                  onChange={(e) => onSearch(e.target.value)}
                />
                <div className="nav_search_icon">
                  <Search />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
