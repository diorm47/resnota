import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./main-filter.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as FastLook } from "../../assets/icons/eye_icon.svg";
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/left_arrow.svg";
import { ReactComponent as RigthArrow } from "../../assets/icons/right_arrow.svg";
import {
  addToCart,
  deleteFromCart,
  setCurrentItem,
} from "../../redux/cart-reducer";
import {
  addToFavorite,
  deleteFromFavorite,
} from "../../redux/favorite-reducer";
import Modal from "../modal/modal";
import ItemType from "./../card/item_type";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="rigth_arrow_filter" onClick={onClick}>
      <RigthArrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="left_arrow_filter" onClick={onClick}>
      <LeftArrow />
    </div>
  );
}

function MainFilter({ items }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [modal, setModal] = useState(false);
  const [itemData, setItemData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const showHideModal = (item) => {
    if (modal) {
      setModal(false);
      setItemData({});
    } else {
      setItemData(item);
      setModal(true);
    }
  };

  const handleClick = (item) => {
    dispatch(setCurrentItem(item));
    navigate(`/about/${item.id}`);
  };
  return (
    <>
      {!modal || (
        <Modal
          modal={modal}
          setModal={setModal}
          showHideModal={showHideModal}
          itemData={itemData}
        />
      )}

      <Slider {...settings}>
        {items.map((item) => (
          <div
            className="item_card"
            key={item.id}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="item_img_block">
              <ItemType category={item.category} />
              <img src={item.image} alt={item.image} />
              <div className="add_to_fav" onClick={() => addDelFavor(item)}>
                <Favorite
                  className={
                    favoriteEl.some((data) => data.id === item.id)
                      ? "selectedC"
                      : "notSelect "
                  }
                  width="20px"
                  height="19px"
                  stroke="#B8C1CA"
                />
              </div>
              <div className="fast_look" onClick={() => showHideModal(item)}>
                <FastLook />
                <p>Быстрый просмотр</p>
              </div>
            </div>
            <div className="item_name" onClick={() => handleClick(item)}>
              <h4>{item.name}</h4>
            </div>
            <div className="item_descr">
              <p>{item.description}</p>
            </div>
            <div className="item_price">
              <p>{item.price} ₽</p>
            </div>
            <div className="item_discount">
              <span>
                <strike>660 ₽</strike>
              </span>
              <div className="item_economy">
                <div className="economy_percent">-15%</div>
                <div className="economy_summ">
                  <p>Экономия 160 ₽</p>
                </div>
              </div>
            </div>
            <div className="item_buttons">
              <div className="buy_btn" onClick={() => addDelCart(item)}>
                <span>
                  {inCart.some((data) => data.id === item.id)
                    ? "Куплен"
                    : "Купить"}
                </span>
              </div>
              <div className="one_click">
                <span>В 1 клик</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default MainFilter;
