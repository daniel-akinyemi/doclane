import mongoose from 'mongoose'

const DocumentSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true},
    content:{type:String,required:true},
    docOwner:{type:mongoose.Schema.Types.ObjectId, ref: "users", required:true}

})

export  const UserModel = mongoose.model("documents",DocumentSchema)