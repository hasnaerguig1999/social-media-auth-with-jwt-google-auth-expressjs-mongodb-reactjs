import React , { lazy } from "react"
import PathConstants from "./pathConstant"

// eslint-disable-next-line react-refresh/only-export-components
const Home = lazy(() => import("../pages/Home"))
const SignUpForm= lazy(() => import("../components/Auth/SignUpForm"))
const SignInForm= lazy(() => import("../components/Auth/SignInForm"))


interface RouterTypeT {
  path: string;
  element: React.ReactNode;
}


const routes : RouterTypeT[] = [
  {
    path: PathConstants.HOME,
    element: <Home/>
  },
  {
    path: PathConstants.SIGNUPFORM,
    element: <SignUpForm/>
  },
  {
    path: PathConstants.SIGNINFORM,
    element: <SignInForm/>
  }
]

export default routes