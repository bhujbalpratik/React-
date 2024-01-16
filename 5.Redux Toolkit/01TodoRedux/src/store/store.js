import { configureStore } from "@reduxjs/toolkit"
import TodoReducer from "../features/TodoSlice"

const store = configureStore({
  reducer: TodoReducer,
})

export default store
