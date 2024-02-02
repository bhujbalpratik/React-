import { createSlice, nanoid } from "@reduxjs/toolkit"

export const initialState = {
  todos: [],
}

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todoMsg: action.payload,
        complete: false,
      }
      state.todos.push(todo)
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todoMsg: action.payload.todoMsg }
          : todo
      )
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      )
    },
  },
})
export const { addTodo, deleteTodo, toggleComplete, updateTodo } =
  TodoSlice.actions

export default TodoSlice.reducer
