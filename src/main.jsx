import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './MainLayout/MainLayout.jsx'
import Home from './Component/Home.jsx'
import PetDetails from './Component/PetDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/", 
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"/petDetails/:id",
        loader: ({params}) => fetch(`http://localhost:2000/pets/${params.id}`),
        Component: PetDetails,
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
