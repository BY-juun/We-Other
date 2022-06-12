import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./rootReducer";

const store = configureStore({
  reducer,
});

const setupStore = (context: any): EnhancedStore => store;
const makeStore: any = (context: any) => setupStore(context);

export const wrapper = createWrapper(makeStore, {});

export type AppDispatch = typeof store.dispatch;

export default wrapper;
