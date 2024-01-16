import { useState } from "react"
import { useTodo } from "../contexts/TodoContext"
import { nanoid } from "nanoid"

function TodoForm() {
  const { addTodo } = useTodo()

  const [todoMsg, setTodoMsg] = useState("")

  const addTodoHandler = (e) => {
    e.preventDefault()
    addTodo({ id: nanoid(), todoMsg, complete: false })
    setTodoMsg("")
  }

  return (
    <form className="flex" onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoMsg}
        required
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
