import { PostModel } from "../models/Post";
import { Request, Response} from "express";
import { PostT } from "../types/PostT";

export const createPost = async (req : Request, res : Response) => {
  try {
    const {title, message, creator, picture} = req.body
    const tags : string[] = [];
    tags.push(...req.body.tags.split(","))
    const trimedTages = tags.map(ele => ele.trim());
    const data : PostT = {
      title: title,
      message: message,
      creator: creator,
      picture: picture,
      tags : trimedTages
    }
    const post = await new PostModel(data);
    const err = post.validateSync(); // this for validate data
    if (err) res.json(err.errors);
    await post.save(); // if no err save post
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
}

export const getAllPost = async (req: Request, res: Response) => {
  try {
    const publications = await PostModel.find();
    res.status(200).json(publications);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred' });
  }
}

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const deletedPost = await PostModel.findByIdAndDelete(postId);

    if (deletedPost) {
      return res.status(200).json({ message: 'Post deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred' });
  }
}

export const updatePost = async (req : Request, res : Response) => {
  try {
    const {id} = req.params
    const post = await PostModel.findById(id);
    if (!post) res.status(400).json("Post Not Found !");
    const tags : string[] = [];
    tags.push(...req.body.tags.split(","))
    const trimedTages = tags.map(ele => ele.trim());
    const update = await post!.updateOne({tags: trimedTages, ...req.body}, { runValidators: true });
    res.status(201).json(update)
  } catch (error) {
    res.status(500).json({ error });
  }
}
export const getOnePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred' });
  }
};