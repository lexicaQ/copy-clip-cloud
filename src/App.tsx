import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Index from "@/pages/Index";
import Download from "@/pages/Download";
import Updates from "@/pages/Updates";
import Admin from "@/pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/updates",
    element: <Updates />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
