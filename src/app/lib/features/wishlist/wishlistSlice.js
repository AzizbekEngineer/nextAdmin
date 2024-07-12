import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [], //JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    toggleHeart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((i) => i.id !== action.payload.id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
    defaultWishlist: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleHeart, defaultWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
