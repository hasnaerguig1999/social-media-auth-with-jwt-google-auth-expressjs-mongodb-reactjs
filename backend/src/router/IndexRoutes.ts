import  { Router } from "express"
import Postrouter from "./PostRouter";
import Authrouter from "./UserRoutes";

const router = Router()
router.use('/post',Postrouter)
router.use('/auth',Authrouter)

export default router;
