import { configureStore } from '@reduxjs/toolkit';
import widgetReducer from '../features/reducers/WidgetSlice';

export const store = configureStore({
  reducer: {
    widget: widgetReducer,
  },
});
