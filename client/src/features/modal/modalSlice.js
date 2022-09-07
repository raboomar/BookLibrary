import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "showModal",
  initialState: { value: false, editModal: false },
  reducers: {
    show: (state) => {
      state.value = true;
    },
    dontShow: (state) => {
      state.value = false;
    },
    showEdit: (state) => {
      state.editModal = true;
    },
    dontShowEdit: (state) => {
      state.editModal = false;
    },
  },
  extraReducers: {},
});
export const { show, dontShow, showEdit, dontShowEdit } = modalSlice.actions;
export default modalSlice.reducer;
