import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Career from '../Pages/Career';
import Login from '../Pages/Login';
import LogingLayout from '../layouts/LogingLayout';
import Singup from '../Pages/Singup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/career',
        element: <Career />,
      },
    ],
  },
  {
    path: '/login',
    element: <LogingLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'singup', 
        element: <Singup />,
      },
    ],
  },
  {
    path: 'news',
    element: <div>It's a news page ok</div>,
  },
  {
    path: '*',
    element: <div>404 error</div>,
  },
]);
