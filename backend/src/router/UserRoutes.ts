import express from 'express';
import { login, register } from '../controllers/UserController';
const Authrouter = express.Router();

Authrouter.post("/login",login);
Authrouter.post("/register", register);

export default Authrouter;
