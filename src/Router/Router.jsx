import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Career from '../Pages/Career';
import Login from '../Pages/Login';
import LogingLayout from '../layouts/LogingLayout';
import Singup from '../Pages/Singup';
import News from '../Pages/News';
import Category from '../Pages/Category';
import NotFound from '../Pages/NotFound';

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
      {
        path: '/news/:id',
        element: <News />,
      },
      {
        path: '/category/:categoryId',
        element: <Category />,
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
    path: '*',
    element: <NotFound />,
  },
]);
