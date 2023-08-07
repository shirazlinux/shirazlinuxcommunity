import React from "react";
import Main from "./Pages/MainPage/Main";
import Page404 from "./Pages/404/404";
import Team from "./Pages/Team/Team";
const routes = [
  { path: "/", element: <Main /> },
  {
    path: "/*",
    element: <Page404 />,
  },
  {
    path: "/team",
    element: <Team />,
  },
];

export default routes;
