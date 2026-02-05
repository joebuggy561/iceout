import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import GoFundMe from "../Pages/Gofundme/Gofundme";
import Resources from "../Pages/Resources/Resources";
import Data from "../Pages/Data/Data";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/gofundme", element: <GoFundMe /> },
      { path: "/resources", element: <Resources /> },
      { path: "/data", element: <Data /> }
    ]
  }
]);

export default router;
