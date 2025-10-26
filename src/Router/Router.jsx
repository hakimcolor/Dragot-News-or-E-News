import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>
    , children: [
      {
        index: true,
        element:<Home></Home>
      }, {
        path: '/about',
        element:<About></About>
      }, {
        path: '/career',
        element:<Career></Career>
      }
    ]
  }, {
    path: '/auth',
    element:<div>it's a auth page </div>
  }, {
    path: '/news',
    element:<div>it's a news page ok</div>
  }, {
    path: '/*',
    element:<div>404 error</div>
  }
])