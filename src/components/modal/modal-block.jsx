import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete_icon.svg";
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/left_arrow.svg";
import { ReactComponent as RigthArrow } from "../../assets/icons/right_arrow.svg";
import { addToCart, deleteFromCart } from "../../redux/cart-reducer";
import {
  addToFavorite,
  deleteFromFavorite,
} from "../../redux/favorite-reducer";
import ItemType from "../card/item_type";
import "./modal.css";

function SampleNextArrow(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const { onClick } = props;
  return (
    <div className="rigth_arrow" onClick={onClick}>
      <RigthArrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="left_arrow" onClick={onClick}>
      <LeftArrow />
    </div>
  );
}

function ModalBlock({ showHideModal, itemData }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const favoriteEl = useSelector((state) => state.favorite.favorite);
  const inCart = useSelector((state) => state.cart.cart);
  const addDelFavor = (data) => {
    const isItemInFav = favoriteEl.some((item) => item.id === data.id);
    if (isItemInFav) {
      dispatch(deleteFromFavorite(data.id));
    } else {
      dispatch(addToFavorite(data));
    }
  };

  const addDelCart = (data) => {
    const isItemInCart = inCart.some((item) => item.id === data.id);
    if (isItemInCart) {
      dispatch(deleteFromCart(data.id));
    } else {
      dispatch(addToCart(data));
    }
  };

  const settings = {
    // customPaging: function(i) {
    //   return (
    //     <a>
    //       <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
    //     </a>
    //   );
    // },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="modal_block" data-aos="zoom-in" data-aos-duration="600">
      <div className="close_modal" onClick={showHideModal}>
        <DeleteIcon />
      </div>

      <div className="modal_carousel">
        <Slider {...settings}>
          {itemData.galleryImage.map((img) => (
            <div className="current_img" key={img}>
              <ItemType category="Скидка" />
              <div className="add_to_fav" onClick={() => addDelFavor(itemData)}>
                <Favorite
                  className={
                    favoriteEl.some((data) => data.id === itemData.id)
                      ? "selectedC"
                      : "notSelect "
                  }
                  width="20px"
                  height="19px"
                  fill="#B8C1CA"
                />
              </div>

              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="modal_descriptions">
        <div className="item_typee">
          <h3>{itemData.item_name}</h3>
          <h1>Миланская вяленая колбаса</h1>
        </div>
        <div className="product_descr">
          <span>Описание товара</span>
          <p>{itemData.storage}</p>
        </div>
        <div className="product_descr">
          <span>Хранение</span>
          <p>{itemData.storage}</p>
        </div>
        <div className="product_descr">
          <span>Состав </span>
          <p>{itemData.composition}</p>
        </div>

        <div className="product_calory">
          <h4>Пищевая ценность</h4>
          <div className="belki">
            <p>Белок</p>
            <div className="underline_dots"></div>
            <p>{itemData.belki}г</p>
          </div>
          <div className="fat">
            <p>Жиры</p>
            <div className="underline_dots"></div>
            <p>{itemData.fat}г</p>
          </div>
          <div className="calory">
            <p>Калорийность</p>
            <div className="underline_dots"></div>
            <p>{itemData.calory}ккал</p>
          </div>
        </div>
        <div className="modal_cost_block">
          <div className="modal_item_cost">
            <p>{itemData.price} ₽ </p>
          </div>
          <div className="modal_item_discount">
            <strike>660 ₽</strike>
            <div className="discount_block">
              <div className="item_economy">
                <div className="economy_percent">-15%</div>
                <div className="economy_summ">
                  <p>Экономия 160 ₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal_buy_buttons">
          <div className="modal_counter">
            <div className="uncount" onClick={() => setCount(count - 1)}>
              <p>--</p>
            </div>
            <div className="count_data">
              <p>{count}</p>
            </div>
            <div className="data_count" onClick={() => setCount(count + 1)}>
              <p>+</p>
            </div>
          </div>
          <div className="modal_buy" onClick={() => addDelCart(itemData)}>
            <p>
              {" "}
              {inCart.some((data) => data.id === itemData.id)
                ? "Куплен"
                : "Купить"}
            </p>
          </div>
          <div className="modal_click">
            <p>В 1 клик</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBlock;
