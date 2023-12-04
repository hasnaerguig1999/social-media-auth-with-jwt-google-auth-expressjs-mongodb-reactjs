import { ActionType, InitialStateT, PostT } from "../../../types/Types";
import { FAIL_REQUEST, MAKE_REQUEST, POSTS_LOADED, SAVE_UPDATE_POST, UPDATE_POST,ADD_POST,DELETE_POST } from "../type/PostTypes";


export const initialState : InitialStateT = {
  loading : false,
  posts : [],
  errorMessage : "",
  post : {
    variant : "add",
    data : {
      _id : "",
      title : "",
      creator : "",
      message : "",
      tags : [],
      picture : ""
    }
  }
}



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Postreducer  = (state = initialState, action: ActionType<PostT>) => {
  console.log("actions : ", action)
  switch (action.type) {
    case MAKE_REQUEST : 
      return {
        ...state,
        loading : true
      }
    case FAIL_REQUEST :
      return {
        ...state,
        loading : false,
        errorMessage : action.payload
      }
    case POSTS_LOADED :
      return {
        ...state,
        loading : false,
        errorMessage : "",
        posts : action.payload
      }
    case UPDATE_POST :
      return {
        ...state,
        post : {
          variant : "update",
          data : { ...action.payload } 
        }
      }
    case SAVE_UPDATE_POST :
      return {
        ...state,
        loading: false,
        posts: state.posts.map(post => (post._id === action.payload._id ? action.payload : post)),
        onSuccess : true,
      };
    case ADD_POST :
      return {
        ...state,
        post : {
          variant : "add",
        },
        posts : [...state.posts, action.payload]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload._id)
    };
    default:
      return state;
  }
}
