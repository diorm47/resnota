import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  deleteFromCart,
  setCurrentItem,
} from "../../redux/cart-reducer";
import { deleteFromFavorite } from "../../redux/favorite-reducer";
import "./selected-items.css";

function FavoriteItems() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorite);
  const inCart = useSelector((state) => state.cart.cart);

  const deleteFavorite = (data) => {
    dispatch(deleteFromFavorite(data));
  };

  const addItemToCarrt = (data) => {
    const isItemInCart = inCart.some((item) => item.id === data.id);
    if (isItemInCart) {
      dispatch(deleteFromCart(data.id));
    } else {
      dispatch(addToCart(data));
    }
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
        <h1>Выбранные товары</h1>
      </div>
      <div className="selected_wrapper">
        {favorites.length ? (
          favorites.map((fav) => (
            <div
              className="selected_item"
              data-aos="fade-right"
              data-aos-duration="1000"
              key={fav.id}
            >
              <div className="items_inform">
                <div className="s_item_img">
                  <img src={fav.image} alt={fav.image} />
                </div>
                <div className="s_item_descriptions">
                  <div className="s_item_cat_name">
                    <p>{fav.item_name}</p>
                  </div>
                  <div className="s_item_name" onClick={() => handleClick(fav)}>
                    <h4>{fav.name}</h4>
                  </div>
                  <div className="s_about">
                    <p>{fav.description}</p>
                  </div>
                  <div className="s_cost">
                    <p>{fav.price} ₽</p>
                  </div>
                </div>
              </div>

              <div className="s_buttons">
                <div
                  className="remove_item"
                  onClick={() => deleteFavorite(fav.id)}
                >
                  <p>Удалить</p>
                </div>
                <div
                  className="att_to_cart_item"
                  onClick={() => addItemToCarrt(fav)}
                >
                  {inCart.some((data) => data.id === fav.id)
                    ? "Куплен"
                    : "Купить"}
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
            <p>Выбранные товары отсутствуют (</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoriteItems;
