import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",

  initialState,
  reducers: {
    addFavoritesToStore: (state, action) => {
      console.log("add favorites :", action.payload);
      state.value.push(action.payload);
    },
  },
});

export const { addFavoritesToStore } = favoritesSlice.actions;
export default favoritesSlice.reducer;
