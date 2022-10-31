import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trips: [],
  selectedTripID: null,
  tripID: null,
};

export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTrips: (state, action) => {
      const newtrip = [...state.trips, action.payload];
      state.trips = newtrip;
    },

    setSelectedTripID: (state, action) => {
      state.selectedTripID = action.payload;
      console.log(state.selectedTripID);
    },
    setTripID: (state, action) => {
      state.tripID = action.payload;
      console.log(state.tripID);
    },
  },
});

export const { setTrips, setSelectedTripID, setTripID } = tripSlice.actions;
export const selectTrips = (state) => state.trip.trips;
export const selectSelectedTripID = (state) => state.trip.selectedTripID;
export const selectTripID = (state) => state.trip.tripID;
export default tripSlice.reducer;
