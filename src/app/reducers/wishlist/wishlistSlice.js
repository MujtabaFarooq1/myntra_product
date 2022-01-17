import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
const initialState = { list: [], showModal: false };

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    AddToWishlist: (state, action) => {
      if (state.list.findIndex((item) => item === action.payload.product) < 0) {
        return {
          ...state,
          list: [...state.list, action.payload.product],
        };
      }

      return state;
    },
    RemoveFromWishList: (state, action) => {
      return {
        list: current(state).list.filter(
          (product) => product !== action.payload.product
        ),
      };
    },
    refreshStore: () => {
      return initialState;
    },
  },
});

const wishListActions = wishListSlice.actions;

export { wishListActions };

export default wishListSlice.reducer;
