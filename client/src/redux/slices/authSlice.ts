import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUserData {
  id: number;
  login: string;
  isStaff: boolean;
}

interface CounterState {
  userData: IUserData | null;
}

const initialState: CounterState = {
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload;
    },
    logout: (state) => {
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
