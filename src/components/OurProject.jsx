import "../styles/OurProject.scss";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import project from "../assets/serve1.png";
export const OurProject = () => {
  return (
    <div className="max-w-5xl mx-auto overflow-x-auto">
      <table className="w-full bordersOurProject border-r">
        <thead>
          <tr className="bg-[#2d404e]">
            <th className="headOurProject">Image</th>
            <th className="headOurProject border-r">Title</th>
            <th className="headOurProject">Description</th>
            <th className="headOurProject">Link</th>
            <th className="headOurProject">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bordersOurProject">
            <td className="bodyOurProject">
              <img
                src={project}
                alt="Item"
                className="w-12 h-12 object-cover rounded"
              />
            </td>
            <td className="px-4 py-2 bordersOurProject">Our Project</td>
            <td className="bodyOurProject">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </td>
            <td className="px-4 py-2 bordersOurProject border-r">
              <li className="cursor-pointer underline list-none">
                <a href="mailto:hasan.shamaa10@gmail.com">
                  hasan.shamaa10@gmail.com
                </a>
              </li>
            </td>
            <td className="px-4 py-2 bordersOurProject">
              <div className="flex items-center justify-center">
                <button className="editOurProject">
                  <RiEdit2Line />
                </button>
                <button className="deleteOurProject">
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
