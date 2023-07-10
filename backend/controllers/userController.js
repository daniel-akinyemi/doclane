import { UserModel } from '../models/Users.js';
import bcrypt from 'bcrypt'


// @desc   Auth    user/set token
// route   POST    /api/users/auth
// @access Public  

const registerUser = async (req,res)=>{
    const {username,password} = req.body
    const user = await UserModel.findOne({username})

    if (user){
        return res.json({message: "This user alrady exists!"})
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new UserModel ({username,password: hashedPassword})
    await newUser.save()

    res.status(200).json({message:"User created successfully!"})

}

const authUser = (req,res)=>{
    res.status(200).json({message:"Auth User"})
}

export{
    registerUser, authUser
}