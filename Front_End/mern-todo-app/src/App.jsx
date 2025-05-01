import React, { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos, addTodo, deleteTodo, toggleTodo, } from "./features/todoSlice.js"


const App = () => {

  const [text, setText] = useState("")
  const dispatch = useDispatch()
  const { item, loading } = useSelector((state) => state.todo)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      try {
        await dispatch(addTodo(text)).unwrap();
        setText("")
      } catch (error) {
        console.log("failed to add task ", error);

      }
    }
  }
  return (
    <Fragment>

      <div className="flex justify-center items-center">
        <div className="flex flex-col bg-gray-100 shadow-2xl w-[35%] ">
          <h1 className="text-black mx-auto font-semibold">Todo List</h1>
          <form onSubmit={handleSubmit} action="" className="flex border border-blue-100 px-3 justify-between rounded-2xl  ">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text" placeholder="Enter your Todo" className="outline-none w-full" />
            <button type="submit" className="bg-green-700 px-2 py-1 cursor-pointer rounded text-white">Add</button>
          </form>
          {loading ? (
            <h1>Loading .....</h1>
          ) : (
            <ul>
              {Array.isArray(item) && item.map((todo) => {
                return <div className="bg-black text-white rounded" key={todo._id}>
                  <li

                    className={`${todo.completed ? "line-through" : "none"}`}
                  >
                    {todo.text}

                  </li>
                  <div className="flex justify-center items-center gap-3">
                    <button className="bg-blue-600 px-4 py-1 cursor-pointer rounded" onClick={() => dispatch(toggleTodo(todo))}>Toggle</button>
                    <button className="bg-red-700 px-4 cursor-pointer py-1 rounded" onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
                  </div>
                </div>
              })}
            </ul>
          )
          }
        </div>

      </div>
    </Fragment>
  )
}
export default App