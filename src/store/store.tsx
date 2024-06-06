import { configureStore } from '@reduxjs/toolkit'
import { leagueSlice } from './league/leagueSlice';


export const store = configureStore({
  reducer: {
    league: leagueSlice.reducer,
  },
});