import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./about-page.css";

function AboutBlog() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="blog_wrapper">
      <div
        className="block_title"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1>Запись в блоге</h1>
      </div>
      <div className="blog_header">
        <div
          className="header_text"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>
            {" "}
            Компания «ПД «Реснота» является производителем <br /> и продавцом
            высококачественной мясной продукции. <br /> В нашем ассортименте
            более 100 видов мясных <br /> и колбасных изделий. <br /> <br /> В
            г. Бронницы находится наш собственных мясокомбинат, а в <br /> г.
            Москве открыты несколько фирменных магазинов.
          </p>
        </div>
      </div>
      <div className="after_block">
        <div
          className="center_text"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>
            Компания «ПД «Реснота» является производителем и продавцом
            высококачественной мясной продукции. В нашем ассортименте более 100
            видов мясных и колбасных изделий. <br /> <br /> В г. Бронницы
            находится наш собственных мясокомбинат, а в г. Москве открыты
            несколько фирменных магазинов.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutBlog;
