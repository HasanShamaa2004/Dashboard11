import { NavLink } from "react-router-dom";
import "../styles/SideBar.scss";
import { RiFolderFill } from "react-icons/ri";
import { RiFolderAddFill } from "react-icons/ri";
import { RiShakeHandsFill } from "react-icons/ri";
import { RiAddBoxFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { RiAddCircleFill } from "react-icons/ri";
export const SideBar = () => {
  return (
    <div className="parent">
      <div className="son">
        <div className="divSideBar" title="Courses">
          <NavLink to="/courses" className="NavLinkSide">
            <RiFolderFill className="text-4xl" />
            <div className="text-2xl hidden lg:flex">
              <h1>Courses</h1>
            </div>
          </NavLink>
        </div>
        <div className="divSideBar" title="Add Courses">
          <NavLink to="/addCourses" className="NavLinkSide">
            <RiFolderAddFill className="text-4xl" />
            <div className="text-2xl hidden lg:flex">
              <h1>Add Courses</h1>
            </div>
          </NavLink>
        </div>
        <div className="divSideBar" title="Services">
          <NavLink to="/services" className="NavLinkSide">
            <RiShakeHandsFill className="text-4xl" />
            <div className="text-2xl hidden lg:flex">
              <h1>Services</h1>
            </div>
          </NavLink>
        </div>
        <div className="divSideBar" title="Add Services">
          <NavLink to="/addServices" className="NavLinkSide">
            <RiAddBoxFill className="text-4xl" />
            <div className="text-2xl hidden lg:flex">
              <h1>Add Services</h1>
            </div>
          </NavLink>
        </div>
        <div className="divSideBar" title="Our Family">
          <NavLink to="/ourFamily" className="NavLinkSide">
            <RiTeamFill className="text-4xl" />
            <div className="text-2xl hidden lg:flex">
              <h1>Our Family</h1>
            </div>
          </NavLink>
        </div>
        <div className="divSideBar" title="Add Our Family">
          <NavLink to="/addOurFamily" className="NavLinkSide">
            <RiAddLine className="text-4xl" />
            <div className="text-2xl hidden lg:flex">
              <h1>Add Our Family</h1>
            </div>
          </NavLink>
        </div>
        <div className="divSideBar" title="Our Project">
          <NavLink to="/ourProject" className="NavLinkSide">
            <RiAccountBoxFill className="text-4xl" />
            <div className="text-2xl hidden lg:flex">
              <h1>Our Project</h1>
            </div>
          </NavLink>
        </div>
        <div className="divSideBar" title="Add Our Project">
          <NavLink to="/addOurProject" className="NavLinkSide">
            <RiAddCircleFill className="text-4xl" />
            <div className="text-2xl hidden lg:flex">
              <h1>Add Our Project</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
