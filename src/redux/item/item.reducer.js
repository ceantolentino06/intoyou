import { ItemActionTypes } from "./item.types";
import { SHOP_DATA } from "./items.data";

const INITIAL_STATE = {
  items: SHOP_DATA,
  selectedItem: null,
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionTypes.SET_SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
    default:
      return state;
  }
};

export default itemReducer;
