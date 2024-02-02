import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/TodoSlice"

const TodoForm = () => {
  const [todoMsg, setTodoMsg] = useState("")
  const dispatch = useDispatch()
  console.log(todoMsg)
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(todoMsg))
    setTodoMsg("")
  }
  return (
    <form className="flex" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        autoFocus
        required
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
