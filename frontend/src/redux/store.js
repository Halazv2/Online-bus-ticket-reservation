import { configureStore } from "@reduxjs/toolkit";

import tripReducer from "./trip";

const store = configureStore({
  reducer: {
    trip: tripReducer,
  },
});

export default store;
