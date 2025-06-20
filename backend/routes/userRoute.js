import express from "express";
import {loginUser, registerUser, adminLogin} from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

userRouter.get('/', (req, res) => {
  res.send('User route is working!');
});

export default userRouter;
