import React from "react";
import "./footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactComponent as FooterLogo } from "../../assets/icons/footer_logo.svg";

import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as VK } from "../../assets/icons/VK.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <footer>
      <div className="top_footer_wrapper">
        <div className="top_footer">
          <div
            className="top_footer_text"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1>Есть вопросы?</h1>
            <p>
              Оставьте свои данные и наш <br /> менеджер свяжется с вами в{" "}
              <br /> ближайшее время.
            </p>
          </div>
          <div
            className="footer_logo"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <FooterLogo />
          </div>
          <div
            className="footer_form"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="form_inputs">
              <div className="name_phone">
                <input
                  className="name_input"
                  type="text"
                  placeholder="Ваше имя"
                />
                <input type="text" placeholder="Телефон/E-mail" />
              </div>
              <div className="form_comments">
                <textarea placeholder="Комментарий"></textarea>
              </div>
            </div>
            <div className="form_checkboxes">
              <div className="newsletter">
                <input type="checkbox" />
                <p>
                  Даю согласие на рассылку рекламных материалов, акций и скидок
                </p>
              </div>
              <div className="personal_inf">
                <input type="checkbox" />
                <p>Даю согласие на обработку моих персональных данных</p>
              </div>
            </div>
            <div className="form_btn">
              <input type="button" value="Отправить" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer_wrapper">
        <div className="bottom_footer">
          <div
            className="footer_items_list"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="footer_products_list">
              <div className="product_title">
                <NavLink to="/catalogue">
                  <h4>Продукция</h4>
                </NavLink>
              </div>
              <div className="footer_products">
                <div>
                  <NavLink to="/catalogue/meat-bird">
                    <p>
                      Колбасные и мясные <br /> изделия
                    </p>
                  </NavLink>
                  <NavLink to="/catalogue/sausages">
                    <p>Молочные продукты</p>
                  </NavLink>
                </div>
                <div>
                  <a href="#">
                    <p>Морепродукты </p>
                  </a>
                  <a href="#">
                    <p>Пиво</p>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <p>Замороженные продукты </p>
                  </a>
                  <a href="#">
                    <p>Мед</p>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <p>Свежие овощи</p>
                  </a>
                  <a href="#">
                    <p> Свежие фрукты</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer_pr_links">
              <div className="product_title">
                <NavLink to="/about">
                  <h4>О компании</h4>
                </NavLink>
              </div>
              <div className="product_title our_mag">
                <h4>Наши магазины</h4>
              </div>
              <div className="product_title">
                <h4>Контакты</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_socials">
          <div className="bottom_footer_wrap">
            <div className="years_company">
              <p>2016–2021 <br /> © ООО «ПД Реснота»</p>
            </div>
            <div className="footer_socials_list">
              <Facebook />
              <VK />
              <Instagram />
            </div>
            <div className="site_developer">
              <p>Разработка и продвижение <br /> сайта — SEOabsolut</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
