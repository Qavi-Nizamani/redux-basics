import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, user: {} };

function login(state, action) {
  state.user = action.payload;
  state.isLoggedIn = true;
}

function logout(state) {
  state.isLoggedIn = false;
  state.user = {};
}

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login,
    logout,
  },
});

export const authActions = authSlice.actions;
export default authSlice;
