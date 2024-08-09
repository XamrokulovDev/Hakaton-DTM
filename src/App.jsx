import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import Routerlayout 
import Routerlayout from "./layout"
// import Home pages
import Home from "./pages/home"
import Login from "./pages/login"
import Sign from "./pages/sign"
import JuniorPage from "./pages/junior"
import MiddlePage from "./pages/middle"
import SeniorPage from "./pages/senior"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routerlayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/sign", element: <Sign /> },
      { path: "/junior", element: <JuniorPage /> },
      { path: "/middle", element: <MiddlePage /> },
      { path: "/senior", element: <SeniorPage /> }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;