import "../styles/OurFamily.scss";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import photo from "../assets/Photo.svg";
export const OurFamily = () => {
  return (
    <div className="max-w-5xl mx-auto overflow-x-auto">
      <table className="w-full bordersOurFamily border-r">
        <thead>
          <tr className="bg-[#2d404e]">
            <th className="headOurFamily">Image</th>
            <th className="headOurFamily border-r">Name</th>
            <th className="headOurFamily">Job title</th>
            <th className="headOurFamily">Description</th>
            <th className="headOurFamily">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bordersOurFamily">
            <td className="bodyOurFamily">
              <img
                src={photo}
                alt="Item"
                className="w-12 h-12 object-cover rounded"
              />
            </td>
            <td className="px-4 py-2 bordersOurFamily border-r">Danyal</td>
            <td className="px-4 py-2 bordersOurFamily">Project Manager</td>
            <td className="bodyOurFamily">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </td>
            <td className="px-4 py-2 bordersOurFamily">
              <div className="flex items-center justify-center">
                <button className="editOurFamily">
                  <RiEdit2Line />
                </button>
                <button className="deleteOurFamily">
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
