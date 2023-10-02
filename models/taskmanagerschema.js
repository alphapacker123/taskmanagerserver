const mongoose = require('mongoose')


//create model


const Tasks = mongoose.model('Tasks', {
    title:{
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    content:{
        type: String,
        required: true,
        trim: true
    }, date:{
        type: String,
        required:true,
        trim: true
    },
    type:{
        type: String,
        required: true
    }
})

module.exports=Tasks