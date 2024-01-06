const TextArea = ({ handleContentSepration }) => {
  return (
    <textarea
      placeholder="Paste summary points here."
      className="textarea textarea-bordered textarea-lg w-full max-w-xs"
      onChange={(e) => handleContentSepration(e.target.value)}
    ></textarea>
  );
};

export default TextArea;
