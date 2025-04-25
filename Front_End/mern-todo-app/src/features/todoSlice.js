import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiox from "axios"

const fetchTodos = createAsyncThunk("todos/fetchtodos", async () => {
  const res = await axiox.get("http://localhost:8000/api/todos/todos/")
  return res.data
})

const addTodo = createAsyncThunk("todos/fetchtodos", async (text) => {
  const res = await axiox.post("http://localhost:8000/api/todos/", { text })
  return res.data
})

const toggleTodo = createAsyncThunk("todos/toggletodos", async (todo) => {
  const res = await axiox.put(`http://localhost:8000/api/todos/${todo._id}`)
  return res.data
})

const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axiox.delete(`http://localhost:8000/api/todos/${id}`)
  return id

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
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
      })

      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.item = action.payload,
          state.loading = false
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