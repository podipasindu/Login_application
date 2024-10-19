import react from 'react'; 
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

/** import all the component */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Recovery from './components/Recovery'; 
import Profile from './components/Profile';
import Reset from './components/Reset';
import pageNotFound from './components/PageNotFound';
import PageNotFound from './components/PageNotFound';


/** root route */

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Username></Username>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/Password',
    element: <Password></Password>
  },
  {
    path: '/Profile',
    element: <Profile></Profile>
  },
  {
    path: '/Recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/Reset',
    element: <Reset></Reset>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }









]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}