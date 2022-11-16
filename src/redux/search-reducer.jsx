import { items } from "./data";

const SEARCHED = "SEARCHED";
const MAIN_FILTERED = "MAIN_FILTERED";
const CATALOGUE_FILTERED = "CATALOGUE_FILTERED";

let initialState = {
  searched: null,
  searchings: items,
  mainFiltered: [],
  catalogueFiltered: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHED:
      return {
        ...state,
        searched: (state.searched = action.payload),
      };
    case MAIN_FILTERED:
      return {
        ...state,
        mainFiltered: (state.filtered = action.payload),
      };
    case CATALOGUE_FILTERED:
      return {
        ...state,
        catalogueFiltered: (state.filtered = action.payload),
      };

    default:
      return state;
  }
};

export const searchingItem = (payload) => {
  return {
    type: SEARCHED,
    payload,
  };
};

export const mainFilter = (payload) => {
  return {
    type: MAIN_FILTERED,
    payload,
  };
};
export const catalogueFilter = (payload) => {
  return {
    type: CATALOGUE_FILTERED,
    payload,
  };
};

export default searchReducer;
