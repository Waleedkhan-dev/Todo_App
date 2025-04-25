import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


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
   .addCase(addTod)
   .addCase(toggleTodo.fulfilled, (state, action) => {
    const index = state.action.findIndex(
     (todo) => todo._id = action.payload._id
    )
   })
 }


})