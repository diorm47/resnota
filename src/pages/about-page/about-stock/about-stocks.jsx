import React, { useState } from "react";
import { stocks_data } from "../../../redux/data";
import "./about-stocks.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutStocks() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [dataCount, setdataCount] = useState(8);

  const seeMorebtn = () => {
    setdataCount(dataCount + 4);
  };

  const data = stocks_data.slice(0, dataCount);

  return (
    <div className="stocks_wrapper">
      <div
        className="block_title"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1>Акции</h1>
      </div>
      <div className="stocks_content">
        {data.map((data) => (
          <div key={data.img} className="stock_cart">
            <div
              className="stock_img"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={data.img} alt={data.img} />
            </div>
            <div
              className="stock_descriptions"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span>{data.date}</span>
              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="show_more_stocks"
        onClick={seeMorebtn}
      >
        <p>Показать еще</p>
      </div>
    </div>
  );
}

export default AboutStocks;
