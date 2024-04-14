import "../styles/AddCourse.scss";
export const AddCourses = () => {
  return (
    <form className="max-w-5xl mx-auto">
      <div className="mb-6">
        <label htmlFor="imageFile" className="labelCourse">
          Upload Image
        </label>
        <input
          type="file"
          id="imageFile"
          name="imageFile"
          className="inputCourse focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="title" className="labelCourse">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="inputCourse focus:outline-none"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="labelCourse">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="inputCourse focus:outline-none"
          placeholder="Enter description"
          rows="4"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="submitCourse">
          Submit
        </button>
      </div>
    </form>
  );
};
