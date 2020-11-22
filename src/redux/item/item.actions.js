import { ItemActionTypes } from "./item.types";

export const setSelectedItem = (item) => ({
  type: ItemActionTypes.SET_SELECTED_ITEM,
  payload: item,
});
