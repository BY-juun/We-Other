import { combineReducers } from "@reduxjs/toolkit";
import meetingSlice from "./slices/Meeting";
import userSlice from "./slices/User";

const reducer = combineReducers({
  meetingSlice,
  userSlice,
});

export type ReducerType = ReturnType<typeof reducer>;

export default reducer;
