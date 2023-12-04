import { useEffect } from "react"
import FormComp from "./Form"
import Post from "./Post"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import { getAllPost } from "../api/API"
import { postsLoaded } from "../redux/store/Actions/PostAction"
import { InitialStateT, PostT } from "../types/Types"


const Container = () => {

  // const posts  = useSelector<InitialStateT,PostT[]>(state => state.posts)
  const posts = useSelector(state => state.posts.posts)
  // const loading = useSelector<InitialStateT>(state => state.loading)
  console.log(posts);
  
  const dispatch : Dispatch = useDispatch();

  useEffect(() => {
    getAllPost().then(res => dispatch(postsLoaded(res)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    
    <div className="grid md:grid-cols-3 gap-4 w-full relative">
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {
          posts.map((post, i) => (
            <Post key={i} post={post} />
          ))
        }
      </div>
      <div className="w-full sticky top-6 h-fit">
        <FormComp />
      </div>
    </div>
    </>
  )
}

export default Container



