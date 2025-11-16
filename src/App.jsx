import React from 'react'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import Blog from './Pages/Blog.jsx'
import Root from './Route/Root'
import Home from './Pages/Home'
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Mega from './Pages/Mega';



function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='Blog' element={<Blog />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Mega' element={<Mega />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
