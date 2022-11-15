import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trips: [],
  selectedTripID: null,
  tripID: null,
  bookedTrip: [],
};

export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTrips: (state, action) => {
      const newtrip = [...state.trips, action.payload];
      state.trips = newtrip;
      console.log(newtrip);
    },

    setSelectedTripID: (state, action) => {
      state.selectedTripID = action.payload;
      console.log(state.selectedTripID + " from redux");
    },
    setTripID: (state, action) => {
      state.tripID = action.payload;
      console.log(state.tripID);
    },
    setBookedTrip: (state, action) => {
      const newBookedTrip = [...state.bookedTrip, action.payload];
      state.bookedTrip = newBookedTrip;
      console.log(newBookedTrip);
    },
  },
});

export const { setTrips, setSelectedTripID, setTripID, setBookedTrip } =
  tripSlice.actions;
export const selectTrips = (state) => state.trip.trips;
export const selectSelectedTripID = (state) => state.trip.selectedTripID;
export const selectTripID = (state) => state.trip.tripID;
export default tripSlice.reducer;
