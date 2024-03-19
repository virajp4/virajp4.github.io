import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Display from "./components/Display.jsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <Display />,
      children: [
        { path: "/", element: <h1>Home</h1> },
        { path: "about", element: <h1>About</h1> },
        { path: "projects", element: <h1>Projects</h1> },
        { path: "contact", element: <h1>Contact</h1> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
