import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import petsSlice from '../features/pets/petsSlice';
import shelterSlice from '../features/shelters/shelterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shelters: shelterSlice,
    pets: petsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
