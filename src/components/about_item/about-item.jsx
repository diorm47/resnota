import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { items } from "../../redux/data";
import Card from "../card/card";
import ModalBlock from "../modal/modal-block";
import "./about-item.css";

const AboutItem = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const recommendItems = items.slice(0, 4).reverse();
  const filterdItems = items
    .filter((el) => el.category === "Скидка")
    .slice(0, 4)
    .reverse();
  const currentItems = useSelector((state) => state.cart.currentItem).slice(-1);
  const item = currentItems[0];
  if (!item) return <Navigate to={-1} />;

  return (
    <div className="about_item_wrapper">
      <div
        className="about__menu"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="content_top_menu">
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
          <div className="centre_dot">
            <span>•</span>
          </div>
          <NavLink to="/catalogue/meat-bird">
            <div className="content_menu_elem">
              <p>Колбасные и мясные изделия</p>
            </div>
          </NavLink>
          <div className="centre_dot">
            <span>•</span>
          </div>
          <div className="content_menu_elem">
            <p>{item.item_name}</p>
          </div>
        </div>
        <div className="about_title">
          <h1>{item.item_name}</h1>
        </div>
      </div>
      <div className="about_item_block">
        <ModalBlock itemData={item} />
      </div>
      <div
        className="checkout_services"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="checkout_links">
          <div className="checkout_link first_link">
            <p>Доставка</p>
          </div>
          <div className="checkout_link">
            <p>Оплата</p>
          </div>
          <div className="checkout_link">
            <p>Наши гарантии</p>
          </div>
        </div>
      </div>
      <div
        className="checkout_descr"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="left_checkout">
          <h4>Самовывоз</h4>
          <p>
            <span>1. Магазин</span> – г. Москва ул. Осенний бульвар д. 5к1 Время
            работы: 8:30 - 22:00
          </p>
          <p>
            <span>2. Производство</span> – г. Москва ул. Крылатская, д. 37 Время
            работы: круглосуточно
          </p>
          <div className="cost_check">
            <p>Бесплатно</p>
          </div>
        </div>
        <div className="right_checkout">
          <h4>Доставка курьером</h4>
          <p>
            Осуществляется на следующий день по Москве в пределах МКАД <br />
            <span>Либо в любой указанный Вами позже день</span>
          </p>

          <div className="cost_check">
            <p>от 200 ₽</p>
          </div>
        </div>
      </div>

      <div className="checkout_recommend">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Рекомендуем
        </h2>
        <div className="items_block">
          <Card items={recommendItems} />
        </div>
      </div>

      <div className="checkout_discount">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Наши акции
        </h2>
        <div className="items_block">
          <Card items={filterdItems} />
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
