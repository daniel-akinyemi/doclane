// @desc   Auth    user/set token
// route   POST    /api/users/auth
// @access Public  

const registerUser = (req,res)=>{
    res.status(200).json({message:"Auth User"})
}

const authUser = (req,res)=>{
    res.status(200).json({message:"Auth User"})
}

export{
    registerUser, authUser
}