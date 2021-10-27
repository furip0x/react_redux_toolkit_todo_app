import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import alertReducer from './slices/alertSlice'

export default configureStore({
  reducer: {
    todos: todoReducer,
    alerts: alertReducer,
  },
})
