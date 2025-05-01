import express from "express"
import { getAllTodo, deleteTodo, updateTodo, createTodo } from "../controllers/todo.controller.js"
const router = express.Router()
router.get("/todos", getAllTodo)
router.post("/", createTodo)
router.put("/todos/:id", updateTodo)
router.delete("/:id", deleteTodo)

export default router