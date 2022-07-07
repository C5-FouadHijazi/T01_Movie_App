import { createSlice } from "@reduxjs/toolkit";

const fav = createSlice({
  name: "fav",
  initialState: {
    fav: parseInt(localStorage.getItem("fav")) || [],
    all: [],
  },
  reducers: {
    addToFav: (state, action) => {
      state.fav.push(action.payload);
      localStorage.setItem("fav", state.fav);
    },
    removeFromFav: (state, action) => {
      state.fav = state.fav.filter((element) => {
        return element.id != action.payload;
      });
      localStorage.setItem("fav", state.fav);
    },
    setAll: (state, action) => {
      state.all = action.payload;
    },
  },
});
export const { addToFav, removeFromFav, setAll } = fav.actions;
export default fav.reducer;
