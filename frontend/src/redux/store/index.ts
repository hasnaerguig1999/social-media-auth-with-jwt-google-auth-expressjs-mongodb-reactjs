// import { createStore, applyMiddleware } from "redux";
// import { postsReducer } from "./Reducers/PostReducer";
// import thunk from "redux-thunk";

// export const store = createStore(postsReducer, applyMiddleware(thunk))






import { createStore, applyMiddleware, combineReducers } from "redux";
import {Postreducer}  from "./Reducers/PostReducer";
import  authReducer  from "./Reducers/AuthReducer";
import thunk from "redux-thunk";

// Create a root reducer by combining reducers
const rootReducer = combineReducers({
  posts: Postreducer,
  auth: authReducer,
  // Add more reducers if needed
});

// Create store with combined reducer and middleware
export const store = createStore(rootReducer, applyMiddleware(thunk));

