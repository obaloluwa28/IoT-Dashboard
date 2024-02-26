import { createAction, createReducer } from "@reduxjs/toolkit";

const User_Device_Data = createAction("User_Device_Data");

// reducers.js
const initialState = {
  userdevices: [],
};

export const deviceDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(User_Device_Data, (state, action) => {
    state.userdevices = action.payload;
  });
});
