import { Dispatch } from "redux"
import { PostForm, PostT } from "../../../types/Types"
import { 
  FAIL_REQUEST, MAKE_REQUEST, POSTS_LOADED,  UPDATE_POST,SAVE_UPDATE_POST,
  ADD_POST,DELETE_POST
} from "../type/PostTypes"
import { getAllPost, updatePost , createPost,deletePost} from "../../../api/API"
import { toast } from "react-toastify"

export const makeRequest = () => {
  return {
    type : MAKE_REQUEST
  }
}

export const postsLoaded = (data : PostT[]) => {
  return {
    type : POSTS_LOADED,
    payload : data
  }
}

export const failRequest = (err : Error) => {
  return {
    type : FAIL_REQUEST,
    payload : err.message
  }
}

export const createPostSuccess = (response: PostT) => {
  return {
    type: ADD_POST,
    payload : response
  };
};

export const createPostAsync = (data: PostForm) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await createPost(data); // Appel à une fonction d'API pour créer le post
      dispatch(createPostSuccess(response));
    } catch (error) {
      error instanceof Error && dispatch(failRequest(error));
    }
  };
};



export const updateFormFields = (data : PostT) => {
  return {
    type : UPDATE_POST,
    payload : {...data, tags : data.tags.join(",")}
  }
}

export const saveUpdatePost = (data : PostT) => {
  return async (dispatch: Dispatch) => {
    try {
        const updated = await updatePost(data);
        dispatch({type: SAVE_UPDATE_POST, payload: updated});
    } catch (error) {
      error instanceof Error && dispatch(failRequest(error))
    }
  };
};

export const fetchData = () => {
  return (dispatch: Dispatch) => {
    dispatch(makeRequest());
    getAllPost()
      .then(res => dispatch(postsLoaded(res)))
      .catch(err => dispatch(failRequest(err.message)));
  };
};

export const deletePostAsync = (post: PostT) => {
  return async (dispatch: Dispatch) => {
    try {
      await deletePost(post);
      dispatch({type: DELETE_POST, payload: post});
      toast.success('Post Created successfully !', {
      });
    } catch (error) {
      if (error instanceof Error) dispatch(failRequest(error));
    }
  };
}
