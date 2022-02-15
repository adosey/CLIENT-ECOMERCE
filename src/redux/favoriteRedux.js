import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (Object.keys(action.payload).length !== 0) {
        state.favorites.push(action.payload);
      }
    },
    clearFavorite: (state, action) => {
      state.favorites = []
      // state.favorites = state.favorites.filter(
      //   (fav) => fav._id !== action.payload
      // );
    },
  },
});

export const { addFavorite, clearFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
