import { useState } from "react"
import { deleteTodo, toggleComplete, updateTodo } from "../features/TodoSlice"
import { useDispatch } from "react-redux"

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTododEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todoMsg)
  const dispatch = useDispatch()
  const checkboxHandler = () => {
    dispatch(toggleComplete(todo.id))
  }
  const editHandler = () => {
    if (isTodoEditable) {
      dispatch(updateTodo({ id: todo.id, todoMsg: todoMsg }))
      setIsTododEditable(false)
    } else {
      setIsTododEditable(true)
    }
  }
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black w-full`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        onClick={checkboxHandler}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-white`}
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={editHandler}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
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
