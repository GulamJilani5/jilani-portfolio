import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './pages/Header/Header'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Skill from './pages/Skills/Skill';

const router = createBrowserRouter([
       {
         path:'/',
         element: <Home/>
       },
       {
        path:"/about",
        element:<About/>
       },
       {
        path:"/skills",
        element:<Skill/>
       }
]);

function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}
export default App
