import { Route, Routes } from "react-router-dom";
import { UseForm } from "react-hook-form";
import About from "../Pages/About";
import GitHub from "../Pages/GitHub";
import LinkedIn from "../Pages/LinkedIn";
import MyProjects from "../Pages/MyProjects";
import Resume from "../Pages/Resume";
import Navigation from "./Navigation";
import Home from "../Pages/Home";

const Introduction = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="GitHub" element={<GitHub />} />
        <Route path="LinkedIn" element={<LinkedIn />} />
        <Route path="MyProjects" element={<MyProjects />} />
        <Route path="Resume" element={<Resume />} />
      </Routes>
    </>
  );
};
export default Introduction;
