import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import Main from "../views/Main";
import RootWrapper from "../components/RootWrapper";
import About from "../views/About";
import Projects from "../views/Projects";
import Contact from "../views/Contact";
import NotFound from "../views/NotFound";
import Project from "../views/Project";

const RouteWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<RootWrapper />}>
        <Route path={ROUTES.main} element={<Main />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.projects} element={<Projects />} />
        <Route path={ROUTES.project} element={<Project />} />
        <Route path={ROUTES.contact} element={<Contact />} />
        <Route path={ROUTES.default} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RouteWrapper;
