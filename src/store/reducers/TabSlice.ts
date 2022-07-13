import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TabState {
  id: number;
}

const initialState: TabState = {
  id: 0,
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setTableType(state, action: PayloadAction<number>) {
      state.id = action.payload;
    }
  }
})

export default tabSlice.reducer;