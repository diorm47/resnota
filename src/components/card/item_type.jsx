import classNames from "classnames";
import React from "react";
import "./card.css"

function ItemType({ category }) {
  const item_category = classNames({
    "item_category categ_green": category === "Хит",
    "item_category categ_blue": category === "New",
    "item_category categ_orange": category === "Скидка",
  });
  return (
    <div className={item_category}>
      <p>{category}</p>
    </div>
  );
}

export default ItemType;
