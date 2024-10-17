
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';

import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import NewProduct from './pages/NewProduct'
import SingleProduct from './components/ProductPage/SIngleProduct';


const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/products',
          element:<Products/>
        },
        {
          path: '/products/:id', 
          element: <SingleProduct />, 
        },
        {
          path:'/newproduct',
          element:<NewProduct/>
        },
      ]
    }
  ]
)
function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
