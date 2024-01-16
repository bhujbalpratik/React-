import { useState } from "react"
import { useTodo } from "../context/TodoContext"

function TodoItem({ todo }) {
  const { ToggleComplete, DeleteTodo, UpdateTodo } = useTodo()
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todoMsg)
  const checkBoxHandler = () => {
    ToggleComplete(todo.id)
  }
  const deleteHandler = () => {
    DeleteTodo(todo.id)
  }
  const editHandler = () => {
    if (isTodoEditable) {
      UpdateTodo(todo.id, todoMsg)
      setIsTodoEditable(false)
    } else {
      setIsTodoEditable(true)
    }
  }
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black  w-full ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        onClick={checkBoxHandler}
        type="checkbox"
        checked={todo.isCompleted}
        onChange={ToggleComplete}
        className="cursor-pointer "
      />
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`border outline-none w-full bg-transparent rounded-lg
        ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${
          todo.isCompleted ? "line-through" : ""
        }`}
        readOnly={!isTodoEditable}
      />

      <button
        onClick={editHandler}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={deleteHandler}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem
