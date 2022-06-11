import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SignUpState {
  email: string;
  password: string;
  passwordCheck: string;
  userName: string;
  admission: string;
  department: string;
  sex: string;
  step: number;
}

const initialState: SignUpState = {
  email: "",
  password: "",
  passwordCheck: "",
  userName: "",
  admission: "",
  department: "",
  sex: "",
  step: 1,
};

export const SignUpSlice = createSlice({
  name: "SignUp",
  initialState: initialState,
  reducers: {
    gotoNextStep(state) {
      state.step++;
    },
    setEamil(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setSex(state, action: PayloadAction<string>) {
      state.sex = action.payload;
    },
    setUsername(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    setDepartment(state, action: PayloadAction<string>) {
      state.department = action.payload;
    },
    setAdmission(state, action: PayloadAction<string>) {
      state.admission = action.payload;
    },
    initializeSignUpData(state) {
      state.email = "";
      state.password = "";
      state.passwordCheck = "";
      state.userName = "";
      state.admission = "";
      state.department = "";
      state.sex = "";
      state.step = 1;
    },
  },
});

export const { initializeSignUpData, gotoNextStep, setEamil, setPassword, setSex, setUsername, setDepartment, setAdmission } = SignUpSlice.actions;

export default SignUpSlice.reducer;
