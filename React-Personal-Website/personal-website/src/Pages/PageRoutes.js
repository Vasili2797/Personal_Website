import { Route, Routes } from "react-router-dom";
import { UseForm } from "react-hook-form";
import About from "./About";
import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import MyProjects from "./MyProjects";
import Resume from "./Resume";
function PageRoutes() {
  return (
    <>
      <Routes>
        <Route path="About" element={<About />} />
        <Route path="GitHub" element={<GitHub />} />
        <Route path="LinkedIn" element={<LinkedIn />} />
        <Route path="MyProjects" element={<MyProjects />} />
        <Route path="Resume" element={<Resume />} />
      </Routes>
    </>
  );
}
export default PageRoutes;
