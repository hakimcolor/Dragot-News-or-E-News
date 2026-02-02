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
    element: (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist.
          </p>
          <a href="/" className="btn btn-secondary">
            Go Home
          </a>
        </div>
      </div>
    ),
  },
]);
