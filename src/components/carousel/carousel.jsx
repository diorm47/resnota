import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import { useEffect } from "react";

const HeaderCarousel = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Carousel
      autoPlay={false}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      <div className="slider_image">
        <div className="header_content">
          <div
            className="header_title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Истина в качестве</h1>
          </div>
          <div
            className="header_descr"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p>
              Компания «Реснота» производит более 100 видов продуктов питания:
              колбасные и мясные изделия, хлебная и молочная продукция
            </p>
          </div>
          <div
            className="header_button"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button>Купить</button>
          </div>
        </div>
      </div>
      <div className="slider_image">
        <div className="header_content">
          <div
            className="header_title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Истина в качестве</h1>
          </div>
          <div
            className="header_descr"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p>
              Компания «Реснота» производит более 100 видов продуктов питания:
              колбасные и мясные изделия, хлебная и молочная продукция
            </p>
          </div>
          <div
            className="header_button"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button>Купить</button>
          </div>
        </div>
      </div>
      <div className="slider_image">
        <div className="header_content">
          <div
            className="header_title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Истина в качестве</h1>
          </div>
          <div
            className="header_descr"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p>
              Компания «Реснота» производит более 100 видов продуктов питания:
              колбасные и мясные изделия, хлебная и молочная продукция
            </p>
          </div>
          <div
            className="header_button"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button>Купить</button>
          </div>
        </div>
      </div>
      <div className="slider_image">
        <div className="header_content">
          <div
            className="header_title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Истина в качестве</h1>
          </div>
          <div
            className="header_descr"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p>
              Компания «Реснота» производит более 100 видов продуктов питания:
              колбасные и мясные изделия, хлебная и молочная продукция
            </p>
          </div>
          <div
            className="header_button"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button>Купить</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HeaderCarousel;
