import Home from '../src/pages/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Gallery from './pages/Gallery/Gallery.jsx';
import About from './pages/About/About.jsx'
import Capabilities from './pages/Capabilities/Capabilities.jsx'
import Careers from './pages/Careers/Careers.jsx'
import Contact from './pages/Contact/Contact.jsx'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/gallery",
      element: <Gallery/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/capabilities",
      element: <Capabilities/>,
    },
    {
      path: "/careers",
      element: <Careers/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },    
  ]);


  return <div>
    <RouterProvider router={router} />
  </div>;
};

export default App;