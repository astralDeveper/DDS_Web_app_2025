import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout";
import Home from "../../Screens/Home/Index";
import Services from "../../Screens/Services";
import Work from "../../Screens/Works";
import About from "../../Screens/About";
import ContactUs from "../../Screens/ContactUs";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },

    ],
  },

  // { path: "*", element: <NotFound /> },
]);
