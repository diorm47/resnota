import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import asal from "../../assets/images/cards-images/asal.png";
import beer from "../../assets/images/cards-images/beer.png";
import cold_pr from "../../assets/images/cards-images/cold_pr.png";
import fruits from "../../assets/images/cards-images/fruits.png";
import meat from "../../assets/images/cards-images/meat.png";
import milk from "../../assets/images/cards-images/milk.png";
import sea from "../../assets/images/cards-images/sea.png";
import vegetables from "../../assets/images/cards-images/vegetables.png";
import "./products.css";

function Products() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="products_cards">
      <div className="first_three_col">
        <div className="second_two_col">
          <NavLink to="/catalogue/meat-bird">
            <div
              className="product_card meat_card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="card_description">
                <div className="card_title">
                  <h3>Колбасные и мясные изделия</h3>
                </div>
                <div className="card_descrp">
                  <p>Колбаса, Сосиски, Кильки, Говядина </p>
                  <span>56 товаров</span>
                </div>
              </div>
              <div className="card_image">
                <img src={meat} alt={meat} />
              </div>
            </div>
          </NavLink>
          <div
            className="product_card milk_card"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card_description">
              <div className="card_title">
                <h3>Молочные продукты</h3>
              </div>
              <div className="card_descrp">
                <p>
                  Сыры, Десерты, Йогурты, Кисломолочная продукция, Молоко,
                  Сметана, Творог, Творожная масса
                </p>
                <span>25 товаров</span>
              </div>
            </div>
            <div className="card_image">
              <img src={milk} alt={milk} />
            </div>
          </div>
        </div>
        <div
          className="product_card sea_product"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="card_description">
            <div className="card_title">
              <h3>Морепродукты</h3>
            </div>
            <div className="card_descrp">
              <p>Рыба, Икра, Креветки</p>
              <span>34 товаров</span>
            </div>
          </div>
          <div className="card_image">
            <img src={sea} alt={sea} />
          </div>
        </div>
      </div>

      <div className="second_col">
        <div
          className="product_card beer_product"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="card_description">
            <div className="card_title">
              <h3>Пиво</h3>
            </div>
            <div className="card_descrp">
              <p>Крафтовое пиво</p>
              <span>1 товаров</span>
            </div>
          </div>
          <div className="card_image">
            <img src={beer} alt={beer} />
          </div>
        </div>
        <div
          className="product_card cold_product"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="card_description">
            <div className="card_title">
              <h3>Замороженные продукты</h3>
            </div>
            <div className="card_descrp">
              <p>Замороженные овощи, Замороженные фркуты</p>
              <span>6 товаров</span>
            </div>
          </div>
          <div className="card_image">
            <img src={cold_pr} alt={cold_pr} />
          </div>
        </div>
      </div>

      <div className="last_col">
        <div className="last_two_col">
          <div
            className="product_card asal_product"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card_description">
              <div className="card_title">
                <h3>Мёд</h3>
              </div>
              <div className="card_descrp">
                <p>
                  Мед горный 0,25 кг,
                  <br /> Мед с облепихой 0,25 кг, <br /> Мед с черникой 0,25 кг,{" "}
                  <br /> Мед с разнотравья 0,25 кг, <br /> Мед цветочный 0,25 кг
                </p>
                <span>76 товаров</span>
              </div>
            </div>
            <div className="card_image">
              <img src={asal} alt={asal} />
            </div>
          </div>
          <div
            className="product_card veget_product"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card_description">
              <div className="card_title">
                <h3>Свежие овощи</h3>
              </div>
              <div className="card_descrp">
                <p>Картофель, Огурцы, Помидоры</p>
                <span>27 товаров</span>
              </div>
            </div>
            <div className="card_image">
              <img src={vegetables} alt={vegetables} />
            </div>
          </div>
        </div>
        <div
          className="product_card fruits_product"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="card_description">
            <div className="card_title">
              <h3>Свежие фрукты</h3>
            </div>
            <div className="card_descrp">
              <p>Сезонные яблоки</p>
              <span>29 товаров</span>
            </div>
          </div>
          <div className="card_image">
            <img src={fruits} alt={fruits} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
