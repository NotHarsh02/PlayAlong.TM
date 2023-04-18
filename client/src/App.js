import React,{useEffect,useState} from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home"
import Loginpage from "./pages/loginPage"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Wrong from "./pages/wrong"
const router =createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:'/welcome',element:<Loginpage/>},
  {path:'*',element:<Wrong/>}

 

])
function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App