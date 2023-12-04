import { RouterProvider, createBrowserRouter } from "react-router-dom"
import routes from "./routes"
import Page404 from "./pages/Page404"
import Layout from "./components/layout/Layout"
import { store } from "./redux/store"
import { Provider } from "react-redux"



const App = () => {

  const router = createBrowserRouter([
    {
      element : <Layout />,
      errorElement : <Page404 />,
      children : routes
    }
  ])
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App
