import { http } from "../lib/http"
import { PostForm, PostT } from "../types/Types"

const getAllPost = async () : Promise<PostT[]> => {
  const {data} : {data: PostT[]} = await http.get("/post")
  return data
}

const createPost = async (postData: PostForm): Promise<PostT> => {
    const { data } = await http.post("/post", postData);
    return data;
};


const updatePost = async (payload : PostForm) => {
  const {data} : {data: PostT} = await http.put(`/post/${payload._id!}`, {...payload})
  return data
}

const deletePost = async (post: PostT) => {
  await http.delete(`/post/${post._id!}`);
};

export {getAllPost, updatePost,createPost,deletePost}