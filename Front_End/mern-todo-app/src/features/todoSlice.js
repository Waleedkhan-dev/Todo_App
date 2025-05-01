import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchTodos = createAsyncThunk("todos/fetchtodos", async () => {
  const res = await axios.get("http://localhost:8000/api/todos/todos/")
  return res.data
})

const addTodo = createAsyncThunk("todos/addTodo", async (text) => {
  const res = await axios.post("http://localhost:8000/api/todos/", { text })
  return res.data
})

const toggleTodo = createAsyncThunk("todos/toggletodos", async (todo) => {
  const res = await axios.put(`http://localhost:8000/api/todos/${todo._id}`, {
    completed: !todo.completed
  })
  return res.data
})

const deleteTodo = createAsyncThunk("todos/deleteTodo", async (_id) => {
  await axios.delete(`http://localhost:8000/api/todos/${_id}`)
  return _id

})
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    item: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.item = action.payload
        state.loading = false
      })

      .addCase(addTodo.fulfilled, (state, action) => {
        state.item.push(action.payload)
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.item = state.item.filter((todo) => todo._id !== action.payload)
        console.log("Item Deleted Successfully");

      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.item.findIndex(
          (todo) => todo._id === action.payload._id
        )
        state.item[index] = action.payload;
      })
  }
})
export default todoSlice.reducer
export { fetchTodos, deleteTodo, toggleTodo, addTodo }