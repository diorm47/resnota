import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFromCart, setCurrentItem } from "../../redux/cart-reducer";
import {
  addToFavorite,
  deleteFromFavorite,
} from "../../redux/favorite-reducer";
import "./selected-items.css";

function FavoriteItems() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inCart = useSelector((state) => state.cart.cart);
  const favorites = useSelector((state) => state.favorite.favorite);

  const adToFavorite = (data) => {
    const isItemInCart = favorites.some((item) => item.id === data.id);
    if (isItemInCart) {
      dispatch(deleteFromFavorite(data.id));
    } else {
      dispatch(addToFavorite(data));
    }
  };

  const delFromCart = (data) => {
    dispatch(deleteFromCart(data));
  };

  const handleClick = (item) => {
    dispatch(setCurrentItem(item));
    navigate(`/about/${item.id}`);
  };

  return (
    <div className="main_selected_block">
      <div
        className="content_block_title"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1>Купленные товары</h1>
      </div>
      <div className="selected_wrapper">
        {inCart.length ? (
          inCart.map((item) => (
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="selected_item"
              key={item.id}
            >
              <div className="items_inform">
                <div className="s_item_img">
                  <img src={item.image} alt={item.image} />
                </div>
                <div className="s_item_descriptions">
                  <div className="s_item_cat_name">
                    <p>{item.item_name}</p>
                  </div>
                  <div
                    className="s_item_name"
                    onClick={() => handleClick(item)}
                  >
                    <h4>{item.name}</h4>
                  </div>
                  <div className="s_about">
                    <p>{item.description}</p>
                  </div>
                  <div className="s_cost">
                    <p>{item.price} ₽</p>
                  </div>
                </div>
              </div>

              <div className="s_buttons">
                <div
                  className="remove_item"
                  onClick={() => delFromCart(item.id)}
                >
                  <p>Удалить</p>
                </div>
                <div
                  className="att_to_cart_item"
                  onClick={() => adToFavorite(item)}
                >
                  {favorites.some((data) => data.id === item.id)
                    ? "Выбран"
                    : "Выбрать"}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            className="null_message"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p>Купленные элементы отсутствуют (</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoriteItems;
