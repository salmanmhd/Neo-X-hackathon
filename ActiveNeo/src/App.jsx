import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Tracker from "./components/tracker/Tracker";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import ConnectWallet from "./components/ConnectWallet";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/tracker",
    element: <Tracker />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/connectwallet",
    element: <ConnectWallet />,
  },
]);

function App() {
  return (
    <div className="dark:bg-black">
      <RouterProvider router={appRouter} />
    </div>
  );
  //   return <div className=''>ActiveNeo</div>;
}

export default App;
