
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/routes'
import { HelmetProvider } from 'react-helmet-async';
function App() {
 

  return (
    <HelmetProvider>
    <RouterProvider router={routes}>

    </RouterProvider>
    </HelmetProvider>
  )
}

export default App
