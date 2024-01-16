import { useState } from "react"
import "./App.css"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { TodoProvider } from "./context/TodoContext"

const App = () => {
  const [todos, setTodos] = useState([])

  console.log(todos)

  const AddTodo = (todo) => {
    setTodos((prev) => [...prev, todo])
  }
  const ToggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    )
  }
  const DeleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  const UpdateTodo = (id, todoMsg) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todoMsg: todoMsg } : prevTodo
      )
    )
  }
  return (
    <TodoProvider value={{ AddTodo, DeleteTodo, ToggleComplete, UpdateTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
