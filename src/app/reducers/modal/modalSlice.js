// import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  single: null,
  quickShow: false,
  videoShow: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    ShowQuick: (state, action) => {
      return { single: action.payload.slug, quickShow: true };
    },
    HideQuick: (state, action) => {
      return { quickShow: false, single: null };
    },
    ShowVideo: (state, action) => {
      return { videoShow: true };
    },
    HideVideo: (state, action) => {
      return { videoShow: false };
    },
    refreshStore: () => {
      return initialState;
    },
  },
});

const modalActions = modalSlice.actions;

// export const { addToCart, updateCart, removeFromCart, refreshStore } =
// cartSlice.actions;

export { modalActions };

export default modalSlice.reducer;
