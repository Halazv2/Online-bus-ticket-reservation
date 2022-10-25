import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trips: [],
};

export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTrips: (state, action) => {
      const newtrip = [...state.trips, action.payload];
      state.trips = newtrip;
      console.log(state.trips);
    },
  },
});

export const { setTrips } = tripSlice.actions;
export const selectTrips = (state) => state.trip.trips;
export default tripSlice.reducer;
