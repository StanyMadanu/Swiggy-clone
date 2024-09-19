import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Error from "../src/components/Error";
import RestaurentMenu from "../src/components/RestaurentMenu";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // api call

    const data = {
      name: "Stany Madanu",
    };

    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loginUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => import("../src/components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurent/:resID",
        element: <RestaurentMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
