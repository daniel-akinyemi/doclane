import mongoose from 'mongoose'

const DocumentSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    docOwner:[{}]

})

export  const UserModel = mongoose.model("documents",DocumentSchema)