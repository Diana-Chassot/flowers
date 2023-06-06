import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onOpen: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,

  reducers: {
    openForm(state) {
      state.onOpen = true;

    },
    closeForm(state) {
      state.onOpen = false;
    }
  },

});

export const { openForm, closeForm} = formSlice.actions;
export default formSlice.reducer;