import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CartPopup from "../../../features/modals/add-to-cart-popup";
import NotificationPopup from "../../../features/modals/notification-popup";

// Import Custom Component

// export const actionTypes = {
//   AddToCart: "ADD_TO_CART",
//   RemoveFromCart: "REMOVE_FROM_CART",
//   RefreshStore: "REFRESH_STORE",
//   UpdateCart: "UPDATE_CART",
// };

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productSlug = action.payload.product.slug;
      toast(
        <CartPopup
          product={{ ...action.payload.product, index: action.payload.index }}
        />
      );
      if (
        state.cart.findIndex(
          (product) =>
            product.slug === productSlug &&
            product.index === action.payload.index
        ) !== -1
      ) {
        const cart = state.cart.reduce((cartAcc, product) => {
          if (
            product.slug === productSlug &&
            product.index === action.payload.index
          ) {
            cartAcc.push({
              ...product,
              qty: parseInt(product.qty) + parseInt(action.payload.qty),
              sum:
                (product.sale_price ? product.sale_price : product.price) *
                (parseInt(product.qty) + parseInt(action.payload.qty)),
            }); // Increment qty
          } else {
            cartAcc.push(product);
          }

          return cartAcc;
        }, []);

        return { ...state, cart };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload.product,
            qty: action.payload.qty,
            price:
              action.payload.product.variants.length &&
              !action.payload.product.variants.find(
                (item) => item.price === null
              )
                ? action.payload.product.variants[action.payload.index]
                    .sale_price
                  ? action.payload.product.variants[action.payload.index]
                      .sale_price
                  : action.payload.product.variants[action.payload.index].price
                : action.payload.product.sale_price
                ? action.payload.product.sale_price
                : action.payload.product.price[0],
            index: action.payload.index,
          },
        ],
      };
    },
    updateCart: (state, action) => {
      toast(<NotificationPopup message={"Your Cart updated successfully"} />);
      return {
        ...state,
        cart: action.payload.products,
      };
    },
    removeFromCart: (state, action) => {
      toast(
        <NotificationPopup
          message={`${action.payload.product.slug} is deleted from your cart !`}
        />
      );
      let cart = state.cart.reduce((cartAcc, product) => {
        if (
          product.slug !== action.payload.product.slug ||
          product.index !== action.payload.product.index
        ) {
          cartAcc.push(product);
        }

        return cartAcc;
      }, []);

      return { ...state, cart };
    },
    refreshStore: () => {
      return initialState;
    },
  },
});

const cartActions = cartSlice.actions;

// export const { addToCart, updateCart, removeFromCart, refreshStore } =
// cartSlice.actions;

export { cartActions };

export default cartSlice.reducer;
