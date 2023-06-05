import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onOpen: false,
  selectedProduct: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    openModal(state, action) {
      state.onOpen = true;
      state.selectedProduct = action.payload;
    },
    closeModal(state) {
      state.onOpen = false;
      state.selectedProduct = null;
    }
  },

});

export const { openModal, closeModal,confirmModal } = modalSlice.actions;
export default modalSlice.reducer;