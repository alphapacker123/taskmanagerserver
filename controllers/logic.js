const Tasks = require("../models/taskmanagerschema")





//logic to register new employee

exports.taskassign = async (req, res) => {
    /// res.send("register works")

    //req.filee
   
    const { title, content, date, type } = req.body
    if (!title || !content || !date || !type) {
        res.status(403).json("all inputs are rquired")
    }

    try {
        const preTask = await Tasks.findOne({ title })
        if (preTask) {
            res.status(403).json("task title already exist")
        } else {
            const newTask = new Tasks({
                title, content, date, type
            })
          await  newTask.save()
          res.status(200).json(newTask)
        }
    }
    catch (error) {
        res.status(401).json(error)
    }

}




//logic to list all task


exports.listalltask= async(req,res)=>{


    //access query parameter from req
   
const searchKey= req.query.search 
const query={
  title:{$regex:searchKey,$options:"i"}
}




try{const allTasks=await Tasks.find(query)
    res.status(200).json(allTasks)}

    catch(err){
res.status(401).json(err)
    }

    
}




//logic to get single profile


exports.singleTask=async(req,res)=>{
    const {id}=req.params


    //find user in db


   try {const pretask  = await Tasks.findOne({_id: id})
res.status(200).json(pretask)
}
   catch{
res.status(401).json("Task does not exist")
   }
}



//delte task

exports.DeleteTask=async(req,res)=>{
    const{id}=req.params



//

try{const removedTask   = await Tasks.findByIdAndDelete({_id: id})
res.status(200).json(removedTask)
}
catch{res.status(400).json("Task not present")}


}



//edit task

exports.Edittask=async(req,res)=>{
    const {id}=req.params
    const {title,content,date,type }= req.body



try{
 const task=await Tasks.findOne({_id: id})
if(task){
    task.title=title
    task.content=content
    task.date=date
    task.type=type

    await task.save()
    res.status(200).json(title)
}

}
catch (error){
res.status(401).json(error)
}










}