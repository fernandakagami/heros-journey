import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const heroesSlice = createSlice({
  name: 'herois',
  initialState,
  reducers: {
    addHeroes: (state, { payload }) => {
      state.push(...payload);
    }
  }
})

export const { addHeroes } = heroesSlice.actions;

export default heroesSlice.reducer;