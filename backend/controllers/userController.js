import { UserModel } from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// @desc   Auth    user/set token
// route   POST    /api/users/auth
// @access Public

const registerUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (user) {
      return res.json({ message: "This user alrady exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    res.status(200).json({ message: username });
  
};

const authUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: "user does not exist" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(404).json({ message: "incorrect username or password" });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res
    .status(200)
    .json({ message: "User Authenticated", token, userID: user._id });
};

export { registerUser, authUser };
