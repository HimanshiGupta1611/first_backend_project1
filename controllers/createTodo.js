//importing the model

const Todo = require("../models/Todo");

// defining route handler

exports.createTodo = async(req, res) => {
    try {
        // extracting title and description from the body
        const {title,description} = req.body;
        // creating a new todo object and inserting it in DB
        const response = await Todo.create({title,description});
        // send  a json response with a sucess flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry created Successsfully'
            }
        );
    }
    catch (err) {
        // console.error(err);
        res.status(500)
            .json({
                sucess: false,
                data: "internal server error",
                message: err.message,
            })
            console.log(err);

    }
}