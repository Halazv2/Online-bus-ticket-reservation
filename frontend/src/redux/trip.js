import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trips: [],
  selectedTripID: null,
};

export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTrips: (state, action) => {
      const newtrip = [...state.trips, action.payload];
      state.trips = newtrip;
      // console.log(state.trips);
    },

    setSelectedTripID: (state, action) => {
      state.selectedTripID = action.payload;
      console.log(state.selectedTripID);
    },
  },
});

export const { setTrips, setSelectedTripID } = tripSlice.actions;
export const selectTrips = (state) => state.trip.trips;
export const selectSelectedTripID = (state) => state.trip.selectedTripID;
export default tripSlice.reducer;
