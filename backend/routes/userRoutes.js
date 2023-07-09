import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { authUser } from '../controllers/userController.js';

const router = express.Router()

router.post('/auth',authUser)

export default router;