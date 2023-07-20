import mongoose from 'mongoose'

const DocumentSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    // imageUrl:{type:String,required:false},
    content:{type:String,required:true},
    docOwner:{type:mongoose.Schema.Types.ObjectId, ref: "users", required:true}

})

export  const documentModel = mongoose.model("documents",DocumentSchema)