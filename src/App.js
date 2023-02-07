import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import PrivateRoutes from './Routes/PrivateRoutes';
import Orders from './Component/Orders';


function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoutes><Home></Home></PrivateRoutes>
        },
        {
          path: '/orders',
          element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
        },
        {
          path: '/logIn',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]
    }
  ]);
  return (
    <div className="App">

      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
