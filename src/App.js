import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact"
import About from "./pages/About";
import Error from "./pages/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}


// 2 stage: 1st create and then provide in index.js
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      }
    ],
  },
]);


export default App;
