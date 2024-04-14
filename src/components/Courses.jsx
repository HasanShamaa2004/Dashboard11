import logo from "../assets/logo.jpeg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import "../styles/Courses.scss";
export const Courses = () => {
  return (
    <div className="max-w-5xl mx-auto ">
      <table className="w-full bordersCourse border-r">
        <thead>
          <tr className="bg-[#2d404e]">
            <th className="headCourse">Image</th>
            <th className="headCourse">Title</th>
            <th className="headCourse">Description</th>
            <th className="headCourse">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bordersCourse">
            <td className="bodyCourse">
              <img
                src={logo}
                alt="Item"
                className="w-12 h-12 object-cover rounded"
              />
            </td>
            <td className="px-4 py-2 bordersCourse">Sample Title</td>
            <td className="bodyCourse">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </td>
            <td className="px-4 py-2 bordersCourse">
              <div className="flex items-center justify-center">
                <button className="editCourse">
                  <RiEdit2Line />
                </button>
                <button className="deleteCourse">
                  <RiDeleteBin5Fill />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
