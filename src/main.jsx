import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root';
import ErrorPage from './Routes/ErrorPage';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Register from './Routes/Register';
import SignUp from './Routes/SignUp';
import Cart from './Routes/Cart';
import Checkout from './Routes/Checkout';
import MyAccount from './Routes/MyAccount';
import Wishlist from './Routes/Wishlist';
import ProductOverView from './Routes/ProductOverView';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';
// main.jsx or App.jsx
import './i18n'; // <-- add this line at the top
import MyCancel from './Routes/MyCancel';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index : true,
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          try {
            const response = await fetch('/products.json');  // Fetch the JSON file
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
            const products = await response.json();  // Parse the JSON data
            return products;  // Return the products data to the component
          } catch (error) {
            console.error('Error loading products:', error);
            return [];  // Return an empty array in case of error
          }
        }

      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/cart",
        element: <PrivateRoute>
          <Cart></Cart>
        </PrivateRoute>
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>
      },
      {
        path: "/myaccount",
        element: <PrivateRoute>
          <MyAccount></MyAccount>
        </PrivateRoute>
      },
      {
        path: "/wishlist",
        element: <PrivateRoute>
          <Wishlist></Wishlist>
        </PrivateRoute>
      },
      {
        path: "/product/:id",
        element: <ProductOverView></ProductOverView>
      },
      {
        path: "/cancel",
        element: <PrivateRoute>
          <MyCancel></MyCancel>
        </PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
