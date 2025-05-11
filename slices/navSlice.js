import { createSlice } from "@reduxjs/toolkit";

// Initial state for the navigation
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

// Create slice for navigation state
export const navSlice = createSlice({
  name: "nav",  // Name of the slice
  initialState,
  reducers: {  // Corrected field name: 'reducers' instead of 'reducer'
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// Export the actions to be used in your components
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors for accessing specific parts of the state
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

// Export the reducer to be used in the store
export default navSlice.reducer;
