import { createSlice } from "@reduxjs/toolkit";

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

  }
})

export default tabSlice.reducer;