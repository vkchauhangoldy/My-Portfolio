import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./App.css"
import Header from './components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "project",
          element: <Projects />
        },
        {
          path: "contact",
          element: <Contact />
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
