import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import Routerlayout 
import Routerlayout from "./layout"
// import Home pages
import Home from "./pages/home"
import Login from "./pages/login"
import Sign from "./pages/sign"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routerlayout />,
      children:[
        {
          index: true,
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/sign",
          element: <Sign />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App