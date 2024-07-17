import { configureStore } from "@reduxjs/toolkit";
import quiz_reducer from "./states/quiz";

const store = configureStore({
    reducer: {
      quiz: quiz_reducer,
    }
  });

export default store;
export type RootState = ReturnType<typeof store.getState>;