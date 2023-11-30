
const express = require("express");
const app = express();

// lod env config file

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body

app.use(express.json());

//import routes for TODO api
const todoRoutes = require("./routes/todos");
//mount the todo Api Routes
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req,res) => {
    res.send(`<h1> this is the homepage</h1>`);
})