import App from "../App";
import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Home";
import CharacterDetail from "../pages/CharacterDetail";
import PlanetDetail from '../pages/PlanetDetail'
import StarShipDetail from "../pages/StarShipDetail"
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "planets",
          element: <Home />,
        },
        {
          path: "/planets/:id",
          element: <PlanetDetail />,
        },
        {
          path: "/characters",
          element: <Home />,
        },
        {
          path: "/characters/:id",
          element: <CharacterDetail />,
        },
        {
          path: "/starships",
          element: <Home />,
        },
        {
          path: "/starships/:id",
          element: <StarShipDetail />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ]
    },
  ]);

export default router