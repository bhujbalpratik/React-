import { createContext, useContext } from "react"

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoMsg: "Hey",
      complete: false,
    },
  ],
  addTodo: () => {},
  toggleComplete: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
  return useContext(TodoContext)
}
