import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import contractTypes from "../../constants/contractTypes";

interface TabState {
  id: number;
  type: string;
}

const initialState: TabState = {
  id: 0,
  type: contractTypes.ADULT,
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setTableType(state, action: PayloadAction<string>) {
      state.type = action.payload;
      switch (action.payload) {
        case contractTypes.ADULT:
          state.id = 0;
          break;
        case contractTypes.STUDENT:
          state.id = 1;
          break;
        case contractTypes.CHILDREN:
          state.id = 2;
          break;
      }
    }
  }
})

export default tabSlice.reducer;