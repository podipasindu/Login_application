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


/** root route */

const router = createBrowserRouter([
  { 
    path: '/',
    element: <div>Root Router</div>
  },
  {
    path: '/register',
    element: <div>register Router</div>
  }
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}