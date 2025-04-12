import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller.js';
import { registerValidator, loginValidator } from '../validators/auth.validator.js';


const router = express.Router();

router.post('/register', registerValidator, registerUser);
router.post('/login', loginValidator, loginUser); 

export default router;