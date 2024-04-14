import "../styles/AddOurProject.scss";
export const AddOurProject = () => {
  return (
    <form className="max-w-5xl mx-auto">
      <div className="mb-6">
        <label htmlFor="imageFile" className="labelOurProject">
          Upload Image
        </label>
        <input
          type="file"
          id="imageFile"
          name="imageFile"
          className="inputOurProject focus:outline-none"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="title" className="labelOurProject">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="inputOurProject focus:outline-none"
          placeholder="Enter title"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="link" className="labelOurProject">
          Link
        </label>
        <input
          type="url"
          id="link"
          name="link"
          className="inputOurProject focus:outline-none"
          placeholder="Enter Link"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="labelOurProject">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="inputOurProject focus:outline-none"
          placeholder="Enter description"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="submitOurProject">
          Submit
        </button>
      </div>
    </form>
  );
};
