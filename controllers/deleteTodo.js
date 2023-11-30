const Todo = require("../models/Todo");

exports.deleteTodo = async(req, res) => {
    try {
        
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            sucess:true,
            message:"Todo Deleted",
        })

    }
    catch (err) {
        console.error(err);
        response.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:err.message,
        })

    }
}