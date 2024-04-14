import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Courses } from "./components/Courses";
import { AddCourses } from "./components/AddCourses";
import { Services } from "./components/Services";
import { AddServices } from "./components/AddServices";
import { OurFamily } from "./components/OurFamily";
import { AddOurFamily } from "./components/AddOurFamily";
import { OurProject } from "./components/OurProject";
import { AddOurProject } from "./components/AddOurProject";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="courses" element={<Courses />} />
        <Route path="addCourses" element={<AddCourses />} />
        <Route path="services" element={<Services />} />
        <Route path="addServices" element={<AddServices />} />
        <Route path="ourFamily" element={<OurFamily />} />
        <Route path="addOurFamily" element={<AddOurFamily />} />
        <Route path="ourProject" element={<OurProject />} />
        <Route path="addOurProject" element={<AddOurProject />} />
      </Route>
    </Routes>
  );
}

export default App;
