import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componants/Home/Home.jsx';
import About from './Componants/About/About.jsx';
import Contract from './Componants/Contact/Contract.jsx';
import Users from './Componants/Users.jsx/Users.jsx';
import UserDetails from './Componants/UserDetails/UserDetails.jsx';
import Posts from './Componants/Posts/Posts.jsx';
import PostDetails from './Componants/PostDetails/PostDetails.jsx';
import ErrorPage from './Componants/ErrorPage/ErrorPage.jsx';



const router =createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contract></Contract>
      },
      {
        path: '/user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) =>  fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>

      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  } 
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
   

  </React.StrictMode>,
)
