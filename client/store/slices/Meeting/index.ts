import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MeetingStateType {
  pickedFriend: Array<number | undefined>;
}

const initialState: MeetingStateType = {
  pickedFriend: [],
};

export const MeetingSlice = createSlice({
  name: "Meeting",
  initialState: initialState,
  reducers: {
    HandlePickedFriend(state, action: PayloadAction<number>) {
      if (state.pickedFriend.find((v) => v === action.payload)) {
        state.pickedFriend = state.pickedFriend.filter((v) => v !== action.payload);
      } else {
        state.pickedFriend.push(action.payload);
      }
    },
  },
});

export const { HandlePickedFriend } = MeetingSlice.actions;

export default MeetingSlice.reducer;
