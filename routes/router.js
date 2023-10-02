const express=require('express')
const { taskassign,listalltask, singleTask, DeleteTask, Edittask,  } = require('../controllers/logic')
const upload = require('../multerConfig/storageConfig')



// to specify routes we useclass inside routes called routerclass

const router=new express.Router()



//router for adding notes
router.post('/tasks/add',upload.single('user_profile'),taskassign)


//list all employees

router.get('/tasks/listtask',listalltask)

//get single task

router.get('/tasks/singletask/:id',singleTask)


//delete task

router.delete('/tasks/deletetask/:id',DeleteTask)


//edit task

router.post('/tasks/edittask/:id',Edittask)



module.exports=router

