import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { items } from "../../redux/data";
import Card from "../card/card";
import "./catalogue-filters.css";

function CatalogueFilters({ title }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  var data;
  if (title === "Хиты продаж") {
    data = items.filter((el) => el.category === "Хит");
  } else if (title === "Скидки") {
    data = items.filter((el) => el.category === "Скидка");
  } else if (title === "Новинки") {
    data = items.filter((el) => el.category === "New");
  }

  return (
    <div className="catal_filters">
      <div
        className="catal_filter_title"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h3>{title}</h3>
      </div>
      <div className="catal_filtering_items">
        <Card items={data} />
      </div>
    </div>
  );
}

export default CatalogueFilters;
