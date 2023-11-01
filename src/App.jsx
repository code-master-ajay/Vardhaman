import Home from '../src/pages/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Gallery from './pages/Gallery/Gallery.jsx';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/gallery",
      element: <Gallery/>,
    }
  ]);


  return <div>
    <RouterProvider router={router} />
  </div>;
};

export default App;