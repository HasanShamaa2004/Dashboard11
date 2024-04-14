import "../styles/AddServices.scss";
export const AddServices = () => {
  return (
    <form className="max-w-5xl mx-auto">
      <div className="mb-6">
        <label htmlFor="imageFile" className="labelServices">
          Upload Image
        </label>
        <input
          type="file"
          id="imageFile"
          name="imageFile"
          className="inputServices focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="title" className="labelServices">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="inputServices focus:outline-none"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="labelServices">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="inputServices focus:outline-none"
          placeholder="Enter description"
          rows="4"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="submitServices">
          Submit
        </button>
      </div>
    </form>
  );
};
