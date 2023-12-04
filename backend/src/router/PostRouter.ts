import {Router} from "express"
import { createPost, getAllPost, updatePost ,deletePost,getOnePost} from "../controllers/Posts";

const Postrouter = Router();

Postrouter.get("/", getAllPost);
Postrouter.post("/", createPost);
Postrouter.delete("/:id", deletePost)
Postrouter.put("/:id", updatePost);
Postrouter.get("/:id",getOnePost)


export default Postrouter