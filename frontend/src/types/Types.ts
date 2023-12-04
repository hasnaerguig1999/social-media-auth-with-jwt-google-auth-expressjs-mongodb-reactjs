import {AuthState} from "./AuthTypes"
export type PostT = {
  _id? : string,
  title : string
  creator : string
  message : string
  tags : string[]
  picture : string
  createdAt :Date
}

// i did this just because tags coming as array but when im submiting goes as string and i split them on backend
export type PostForm = Omit<PostT, "tags"> & {
  tags : string
}

export type PostWithoutId = Omit<PostForm, "_id">

export type InitialStateT = {
  loading : boolean
  posts : PostT[]
  errorMessage : string
  post : {
    variant : string
    data : Partial<PostT>
  }
}

export type ActionType<P> = {
  type : "POSTS_LOADED" | "ADD_POST" | "DELETE_POST" | "UPDATE_POST" | "LOADING_POSTS" | "FAIL_REQUEST" | "SAVE_UPDATE_POST" | "MAKE_REQUEST" |"CREATE_POST_SUCCESS"
  payload: P;
}

export type rootReducer = {
  postsReducer: InitialStateT;
  authReducer: AuthState;
};