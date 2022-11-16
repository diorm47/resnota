const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
const DELETE_FROM_FAVORITE = "DELETE_FROM_FAVORITE";

let initialState = {
  favorite: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };

    case DELETE_FROM_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const addToFavorite = (payload) => {
  return {
    type: ADD_TO_FAVORITE,
    payload,
  };
};
export const deleteFromFavorite = (payload) => {
  return {
    type: DELETE_FROM_FAVORITE,
    payload,
  };
};

export default favoriteReducer;
