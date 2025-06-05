import mongoose from "mongoose";
import express from "express";
import  { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express(); // Create an instance of express
const port = 3000; // Define the port number

// Define a route for the root URL
app.get('/', (req, res) => {
const todo = new Todo({title: "Hey first todo", desc: "Description of this todo", isDone: false})
todo.save()
res.send('Hello World!'); // Send "Hello World!" as the response
});

app.get('/a', async (req, res) => {
let todo = await Todo.findOne({})
res.json({title: todo.title, desc: todo.desc});
});

// Start the server and listen on the specified port
app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});