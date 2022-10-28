import { configureStore } from "@reduxjs/toolkit";

import tripReducer from "./trip";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    trip: tripReducer,
    auth: authReducer,
  },
});

export default store;
