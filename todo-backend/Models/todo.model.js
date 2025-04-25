
import mongoose from "mongoose";
import { Schema } from "mongoose";
const todoSchema = new mongoose.Schema({
 text: String,
 completed: Boolean
}, { timeStamps: true })

export const todo = mongoose.model("todo", todoSchema)