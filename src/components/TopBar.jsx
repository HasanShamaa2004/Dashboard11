import logo from "../assets/logo.jpeg";
export const TopBar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-4 shadow-lg">
      <div className="w-[45px] h-[45px]">
        <img src={logo} alt="logo" className="rounded-[50%]" />
      </div>
      <div className="w-[200px] bg-[#42bdec] rounded-xl text-white flex items-center justify-center hover:bg-white hover:text-[#42bdec] transition duration-300 border border-[#42bdec]">
        <button className="px-6 py-4 capitalize font-medium">
          go to website
        </button>
      </div>
    </div>
  );
};
