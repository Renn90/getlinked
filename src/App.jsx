import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import MainLayout from './pages/MainLayout';

function App() {
  
  const router = createBrowserRouter([
    {path: '/', element: <MainLayout />, children: ([
      { index: true, element: <HomePage /> },
      { path: 'contact', element: <ContactPage /> },
    ])},
  ])
 
  return (
   <RouterProvider router={router}/>
  )
}

export default App
