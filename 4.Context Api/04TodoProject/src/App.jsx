import { useState, useEffect } from "react"
import { TodoProvider } from "./contexts/TodoContext"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo])
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  const updateTodo = (id, newMsg) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todoMsg: newMsg } : prevTodo
      )
    )
  }
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, complete: !prevTodo.complete }
          : prevTodo
      )
    )
  }

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem("todos"))
    if (storedTodo && storedTodo.length > 0) {
      setTodos(storedTodo)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    AOS.init()
  }, [todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}
    >
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
              <div
                key={todo.id}
                className="w-full"
                data-aos="fade-right"
                data-aos-once="true"
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}
export default App
