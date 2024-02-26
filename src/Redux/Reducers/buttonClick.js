import { createAction, createReducer } from "@reduxjs/toolkit";

const Current_Step_Signup = createAction("Current_Step_Signup");
const Sidebar_Status = createAction("Sidebar_Status");
const Sidebar_Tabs = createAction("Sidebar_Tabs");
const LoginResponse = createAction("LoginResponse");
const HandleModal = createAction("HandleModal");
const HandleeditModal = createAction("HandleeditModal");



// reducers.js
const initialState = {
  signupTab: "signin",
  sidebar: false,
  sidebartab: 'tab_a',
  isAuthenticated: false,
  userdata: {},
  modalstate: '',
  editdevice: 0
};

export const buttonClickReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Current_Step_Signup, (state, action) => {
      state.signupTab = action.payload;
    })

    .addCase(Sidebar_Status, (state, action) => {
      state.sidebar = action.payload;
    })

    .addCase(Sidebar_Tabs, (state, action) => {
      state.sidebartab = action.payload;
    })

    .addCase(LoginResponse, (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.userdata = action.payload.userdata
    })

    .addCase(HandleModal, (state, action) => {
      state.modalstate = action.payload
    })

    .addCase(HandleeditModal, (state, action) => {
      state.editdevice = action.payload
    })
    
});
