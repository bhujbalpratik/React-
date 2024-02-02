import { useRef, useState } from "react"
import { deleteTodo, toggleComplete, updateTodo } from "../features/TodoSlice"
import { useDispatch } from "react-redux"

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTododEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todoMsg)

  const inputRef = useRef(null)

  const dispatch = useDispatch()

  const checkboxHandler = () => {
    dispatch(toggleComplete(todo.id))
  }
  const editHandler = () => {
    if (isTodoEditable) {
      if (todoMsg !== "") {
        dispatch(updateTodo({ id: todo.id, todoMsg: todoMsg }))
        setIsTododEditable(false)
      } else {
        alert("You Must Write Something")
      }
    } else {
      inputRef.current.focus()
      inputRef.current.select()
      setIsTododEditable(true)
    }
  }
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black w-full ${
        todo.complete ? "bg-green-300" : "bg-purple-300"
      }`}
    >
      <input
        type="checkbox"
        className={`${isTodoEditable ? "cursor-no-drop" : "cursor-pointer"}`}
        onChange={checkboxHandler}
        checked={todo.complete}
        disabled={isTodoEditable}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg
        ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${
          todo.complete ? "line-through italic font-bold" : ""
        }`}
        ref={inputRef}
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={todo.complete}
        onClick={editHandler}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isTodoEditable}
        onClick={() => {
          dispatch(deleteTodo(todo.id))
        }}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem
