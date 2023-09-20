import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  
  const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
  ])
 
  return (
   <RouterProvider router={router}/>
  )
}

export default App
