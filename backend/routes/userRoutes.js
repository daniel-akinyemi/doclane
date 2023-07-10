import express from 'express'
import jwt from 'jsonwebtoken'
import { authUser,registerUser } from '../controllers/userController.js';

const router = express.Router()

router.post('/register',registerUser)

export default router;