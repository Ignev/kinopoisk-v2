import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
};

export const singPopupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
      setSingPopup(state, action) {
        state.open = action.payload;
      },
    },
  });

export const { setSingPopup } = singPopupSlice.actions;

export default singPopupSlice.reducer;