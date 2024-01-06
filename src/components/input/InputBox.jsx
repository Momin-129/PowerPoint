const InputBox = ({ index, item, handleInput }) => {
  return (
    <input
      id={index}
      type="text"
      defaultValue={item.text}
      className="input input-bordered input-neutral w-full max-w-xs"
      onChange={(e) => handleInput(e.target.id, e.target.value)}
    />
  );
};

export default InputBox;
