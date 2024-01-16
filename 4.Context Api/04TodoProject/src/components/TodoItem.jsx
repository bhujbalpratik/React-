import { useRef, useState } from "react"
import { useTodo } from "../contexts/TodoContext"

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo, toggleComplete } = useTodo()
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todoMsg)
  const inputRef = useRef(null)

  const editHandler = () => {
    if (isTodoEditable) {
      if (todoMsg === "") {
        alert("You must write something !!!")
      } else {
        updateTodo(todo.id, todoMsg)
        setIsTodoEditable(false)
      }
    } else {
      inputRef.current.select()
      setIsTodoEditable(true)
    }
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.complete ? "bg-green-300" : "bg-purple-300"
      }`}
    >
      <input
        type="checkbox"
        className={`${isTodoEditable ? "cursor-no-drop" : "cursor-pointer"}`}
        onClick={() => toggleComplete(todo.id)}
        checked={todo.complete}
        onChange={toggleComplete}
        disabled={isTodoEditable}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg
        ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${
          todo.complete ? "line-through" : ""
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        ref={inputRef}
      />

      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={editHandler}
        disabled={todo.complete}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem
