import { Navigate, createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/pages/Home";
import Event from "./components/pages/Event";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/events/:year",
      element: <Event />
    },
    {
      path: "*",
      element: <Navigate to="/" replace />
    }
  ],
  {
    basename: "nps-softball-events"
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
