import { combineReducers } from "@reduxjs/toolkit";
import meetingSlice from "./slices/Meeting";
import userSlice from "./slices/User";
import signupSlice from "./slices/SignUp";

const reducer = combineReducers({
  meetingSlice,
  userSlice,
  signupSlice,
});

export type ReducerType = ReturnType<typeof reducer>;

export default reducer;
