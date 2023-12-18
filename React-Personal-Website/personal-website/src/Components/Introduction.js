import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import GitHub from "../Pages/GitHub";
import LinkedIn from "../Pages/LinkedIn";
import MyProjects from "../Pages/MyProjects";
import Resume from "../Pages/Resume";
import Navigation from "./Navigation";
import Home from "../Pages/Home";
import Contact from "./Contact";

const Introduction = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="https://github.com/Vasili2797" element={<GitHub />} />
        <Route
          path="https://www.linkedin.com/in/vasili-nashvilli-08bb95140/"
          element={<LinkedIn />}
        />
        <Route path="MyProjects" element={<MyProjects />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </>
  );
};
export default Introduction;
