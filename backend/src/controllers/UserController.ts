import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import User from '../models/User';
import generateToken from '../utils/generateToken';
import { UserT } from "../types/UserT";



// @Desc Login 
// @Route /api/auth/
// @Method POST
export const login = asyncHandler (async (req: Request, res: Response) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if(!user) {
        res.status(401);
        throw new Error("User not found");
    }

    if(await user.comparePassword(password)) {

        res.status(201).json({ success: true, user: {
            id: user._id,
            email: user.email,
            name: user.name,
            token: generateToken(user._id)
        }})

    } else {
        res.status(401);
        throw new Error("Email or password incorrect");
    }

})

// @Desc Register
// @Route /api/auth/register
// @Method POST
export const register = asyncHandler(async (req: Request, res: Response) => {
    console.log('Request Body:', req.body);
    
    //  const { email, firstName, lastName, password } = req.body;
    //  const name = `${firstName} ${lastName}`;
    const { email, name, password } = req.body;
    const data : UserT = {
        name: name,
        email: email,
        password: password,
      }
      const user = new User({
        email, name, password
      });
    
      await user.save();
    
      res.status(201).json({
        success: true,
        user: {
          email: user.email,
          name: user.name,
        }
      });
    });