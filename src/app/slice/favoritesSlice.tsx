import { createSlice } from "@reduxjs/toolkit";

interface ArrayState {
    films: Array<any>
  }

const initialState: ArrayState = {
    films: [],
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
      addfFavoriteFilm: (state, action) => {
        const findItem = state.films.find((obj) => obj.id === action.payload.id);

        if(findItem){
            return;
        }else{
            state.films.push(action.payload,)
        }
      },
      removefFavoriteFilm: (state, action) => {
        
      }
    },
  });

export const { addfFavoriteFilm, removefFavoriteFilm } = favoritesSlice.actions;

export default favoritesSlice.reducer;