import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiox from "axios"

const fetchData = createAsyncThunk("todos/fetchtodos", async () => {
  const res = await axiox.get("http://localhost:8000/api/todos/todos/")
  return res.data
})

const addTodo = createAsyncThunk("todos/fetchtodos", async (text) => {
  const res = await axiox.post("http://localhost:8000/api/todos/todos/", { text })
})

const toggleTodo = createAsyncThunk("todos/toggletodos", async (todo) => {
  const res = await axiox.put(`http://localhost:8000/api/todos/${todo._id}`)
  return res.data
})

const deleteTodo = createAsyncThunk("todos/delete", async (id) => {

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
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true
    })

      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.action = action.payload,
          state.loading = false
      })
      .addCase(addTodo)
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.action.findIndex(
          (todo) => todo._id = action.payload._id
        )
        state.action[index] = action.payload;
      })
  }
})
export default todoSlice.reducer
export { fetchData, deleteTodo, toggleTodo, addTodo }