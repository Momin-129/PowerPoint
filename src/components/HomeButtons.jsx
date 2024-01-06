import { GeneratePresentation } from "../assets/generatePPT";

const HomeButtons = ({
  handleDelete,
  handleDuplicate,
  handleSave,
  template,
}) => {
  return (
    <>
      <div className="flex justify-center items-center gap-3">
        <button className="btn btn-neutral" onClick={handleDuplicate}>
          Duplicate Slide
        </button>
        <button className="btn btn-neutral" onClick={handleDelete}>
          Delete Slide
        </button>
        <button className="btn btn-neutral" onClick={handleSave}>
          Save
        </button>
      </div>
      <div className="flex justify-center items-center gap-3">
        <button
          className="btn btn-neutral"
          onClick={() => GeneratePresentation(template)}
        >
          Generate Presentation
        </button>
      </div>
    </>
  );
};

export default HomeButtons;
