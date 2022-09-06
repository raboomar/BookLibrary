import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "showModal",
  initialState: { value: false },
  reducers: {
    show: (state) => {
      state.value = true;
    },
    dontShow: (state) => {
      state.value = false;
    },
  },
  extraReducers: {},
});
export const { show, dontShow } = modalSlice.actions;
export default modalSlice.reducer;
