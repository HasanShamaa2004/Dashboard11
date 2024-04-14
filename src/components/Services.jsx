import services from "../assets/laptop3.png";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import "../styles/Services.scss";
export const Services = () => {
  return (
    <div className="max-w-5xl mx-auto overflow-x-auto">
      <table className="w-full bordersServices border-r">
        <thead>
          <tr className="bg-[#2d404e]">
            <th className="headServices">Image</th>
            <th className="headServices">Title</th>
            <th className="headServices">Description</th>
            <th className="headServices">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bordersServices">
            <td className="bodyServices">
              <img
                src={services}
                alt="Item"
                className="w-12 h-12 object-cover rounded"
              />
            </td>
            <td className="px-4 py-2 bordersServices">Services Title</td>
            <td className="bodyServices">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </td>
            <td className="px-4 py-2 bordersServices">
              <div className="flex items-center justify-center">
                <button className="editServices">
                  <RiEdit2Line />
                </button>
                <button className="deleteServices">
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
