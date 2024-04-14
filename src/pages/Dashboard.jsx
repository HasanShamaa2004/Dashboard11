import { Outlet } from "react-router";
import { SideBar } from "../components/SideBar";
import { TopBar } from "../components/TopBar";
import { Courses } from "../components/Courses";

export const Dashboard = () => {
  return (
    <div className="overflow-hidden">
      <TopBar />
      <div className="flex">
        <SideBar />
        <div className="lg:w-[80%] overflow-x-auto w-full p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
