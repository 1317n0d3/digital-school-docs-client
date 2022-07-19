import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginCredentials(state, { payload: { token } }: PayloadAction<{ token: string }>) {
      state.token = token;
    }
  }
})

export default authSlice.reducer;