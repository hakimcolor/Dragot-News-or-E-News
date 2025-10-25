import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>
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