import { createContext, useContext } from "react"

export const TodoContext = createContext({
  todo: {
    id: 1,
    todoMsg: "helo world",
    isCOmpleted: false,
  },
  AddTodo: (todo) => {},
  UpdateTodo: (id, todoMsg) => {},
  DeleteTodo: (id) => {},
  ToggleComplete: (id) => {},
})

export const TodoProvider = TodoContext.Provider

export function useTodo() {
  return useContext(TodoContext)
}
