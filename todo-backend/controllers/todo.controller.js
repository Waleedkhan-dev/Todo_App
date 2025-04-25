import { todo } from "../Models/todo.model.js";
const getAllTodo = async (req, res) => {
 try {
  const todos = await todo.find()
  res.json(todos)

 } catch (error) {
  res.status(500).json({ message: error.message })
 }
}
const createTodo = async (req, res) => {

 try {

  if (!req.body.text) {
   console.log("Request Body:", req.body);
   return res.status(400).json({
    error: "text field is required"
   })
  }
  const newTodo = new todo({
   text: req.body.text,

   completed: false
  })
  const saveTod = await newTodo.save()
  res.status(201).json(saveTod)
 } catch (error) {
  res.status(500).json({ message: error.message })
 }
}

const updateTodo = async (req, res) => {
 try {
  const updatedTodo = await todo.findByIdAndUpdate(req.params.id
   ,
   { completed: req.body.completed },
   { new: true },
  )
  res.json(updatedTodo)


 } catch (error) {
  res.status(500).json({ message: error.message })
 }
}

const deleteTodo = async (req, res) => {
 try {
  await todo.findByIdAndDelete(req.params.id)
  res.json({ message: "todo delete successfully" })
 } catch (error) {
  res.status(500).json({ message: "" })
 }
}

export { getAllTodo, deleteTodo, updateTodo, createTodo }