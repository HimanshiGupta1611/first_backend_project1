const Todo = require("../models/Todo");

// to fetch all todo from databases
exports.getTodo = async(req,res) => {
    try{
        const todos = await Todo.find({});
    
        // response

        res.status(200)
        .json({
            sucess:true,
            data:todos,
            message:'entire data is fetched',
        })
    }
    catch(err){
        console.error(err);
        response.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:err.message,
        })
    }
}

exports.getTodoById = async(req,res) => {
    try{
        //extract todo item by ID
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        // if data with that id does not exist
        if(!todo){
            return res.status(404).json({
                sucess:false,
                message:"no data found with that ID",
            })
        }

        // data found for given ID

        res.status(200).json({
            success: true,
            data:todo,
            message: `Todo ${id} data sucessfully fetched`
        })
    }
    catch(err){
        console.error(err);
        response.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:err.message,
        })
    }
}