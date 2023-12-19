import { configureStore } from '@reduxjs/toolkit';
import heroesSlice from './reducers/heroes';

const store = configureStore({
  reducer: {
    heroes: heroesSlice,
  }
});

export default store;