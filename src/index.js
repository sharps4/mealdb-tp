import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Error404 from './pages/Error404';
import reportWebVitals from './reportWebVitals';
import './assets/css/styles.css'
import Login from './pages/Login';
import NewRecipe from './pages/NewRecipe';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/search/:search',
    element: <Home/>,
  },
  {
    path: '/details/:id',
    element: <Details/>,
  },
  {
    path: '/login/',
    element: <Login/>,
  },
  {
    path: '/newrecipe/',
    element: <NewRecipe></NewRecipe>,
  },
  {
    path: '*',
    element: <Error404/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
