import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  grade: 1,
};

export const gradeSlice = createSlice({
  name: "grade",
  initialState,
  reducers: {
    setGrade(state, action) {
      state.grade = action.payload;
    },
  },
});


export const { setGrade } = gradeSlice.actions;

export default gradeSlice.reducer;