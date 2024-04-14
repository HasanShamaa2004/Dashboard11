import "../styles/AddOurFamily.scss";
export const AddOurFamily = () => {
  return (
    <form className="max-w-5xl mx-auto">
      <div className="mb-6">
        <label htmlFor="imageFile" className="labelOurFamily">
          Upload Image
        </label>
        <input
          type="file"
          id="imageFile"
          name="imageFile"
          className="inputOurFamily focus:outline-none"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="name" className="labelOurFamily">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="inputOurFamily focus:outline-none"
          placeholder="Enter Name"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="jobTitle" className="labelOurFamily">
          Job Title
        </label>
        <input
          type="text"
          id="name"
          name="jobTitle"
          className="inputOurFamily focus:outline-none"
          placeholder="Enter job title"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="labelOurFamily">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="inputOurFamily focus:outline-none"
          placeholder="Enter description"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="submitOurFamily">
          Submit
        </button>
      </div>
    </form>
  );
};
