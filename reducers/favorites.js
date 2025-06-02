import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",

  initialState,
  reducers: {
    addFavoritesToStore: (state, action) => {
      // console.log("add favorites :", action.payload.id);
      const alreadyExists = state.value.some(
        (card) => card.id === action.payload.id
      );

      if (!alreadyExists && action.payload.id) {
        state.value.push(action.payload);
      } else {
        alert("Ce film est déjà dans vos favoris");
      }
    },
    removeFavoritesToStore: (state, action) => {
      console.log("favorites remove :", action.payload);
      state.value = state.value.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const { addFavoritesToStore, removeFavoritesToStore } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
