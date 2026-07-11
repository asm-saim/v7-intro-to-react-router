import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptop from './components/Laptop/Laptop.jsx'
import Users from './components/Users/Users.jsx'
import User2 from './components/User2/User2.jsx'
import UserDetail from './components/UserDetail/UserDetail.jsx'
import Posts from './components/Posts/Posts.jsx'

const susDataLoad = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptop },
      //for loading data:
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: "user2",
        element: <Suspense fallback="Loading">
          <User2 susDataLoad={susDataLoad}></User2>
        </Suspense>
      },
      {
        path: "user/:userid",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        Component: UserDetail
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts
      }
    ]
  },
  {
    path: '/about',
    element: <div>About section is here</div>
  },
  {
    path: '/blogs',
    Component: App
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
