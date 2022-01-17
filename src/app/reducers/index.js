import { combineReducers } from "redux";
import counterReducer from "./counter/counterSlice";
import cartReducer from "./cart/cartSlice";
import modalReducer from "./modal/modalSlice";
import wishListReducer from "./wishlist/wishlistSlice";
// import counterReducer from "./counter/counterSlice";
// import counterReducer from "./counter/counterSlice";
// import counterReducer from "./counter/counterSlice";

const reducers = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  modal: modalReducer,
  wishList: wishListReducer,
});

export default reducers;
