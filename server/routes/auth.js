import express from 'express';
import { registerUser,loginUser } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/register', registerUser);
//alternate way of writing
// router.route("/register").post( registerUser);
router.post('/login', loginUser);


export default router;