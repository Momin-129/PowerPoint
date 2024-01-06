import { useEffect, useState } from "react";
import { countContentBoxes } from "../../assets/countContentBoxes";
import { divideArray } from "../../assets/divideArray";
import InputBox from "./InputBox";
import TextArea from "./TextArea";

const InputContainer = ({ template, currentSlide, setTemplate }) => {
  const [copyTemplate, setCopyTemplate] = useState([]);
  const ContentBoxes = countContentBoxes(template[currentSlide]);

  useEffect(() => {
    setCopyTemplate(template);
  }, [template]);

  const handleInput = (targetId, value) => {
    setCopyTemplate((prev) => {
      const newTemplate = [...prev];
      newTemplate[currentSlide][targetId]["text"] = value;
      return newTemplate;
    });
  };

  const handleContentSepration = (value) => {
    const cleanedText = value.replace(/^\d+\.\s/gm, "").replace(/\n+/g, "\n");
    const sentences = cleanedText.split(/\.\s/);
    const result = divideArray(sentences, ContentBoxes);
    let i = 0;
    template[currentSlide].map((item, index) => {
      if (item.hasOwnProperty("bullet")) {
        const text = result[i].join(" \n");
        handleInput(index, text);
        i++;
      }
    });
  };

  const handleGenerateSlide = (e) => {
    e.preventDefault();
    setTemplate(copyTemplate);
    for (let i = 0; i < e.target.elements.length; i++) {
      const element = e.target.elements[i];
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.value = "";
      }
    }
  };

  let isTextArea = false;

  return (
    <form onSubmit={(e) => handleGenerateSlide(e)}>
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-xl font-bold">INPUT CONTAINER</p>
        {template[currentSlide].map((item, index) => {
          if (item.hasOwnProperty("text") && !item.hasOwnProperty("bullet")) {
            return (
              <InputBox
                key={index}
                index={index}
                item={item}
                handleInput={handleInput}
              />
            );
          } else if (
            item.hasOwnProperty("text") &&
            item.hasOwnProperty("bullet") &&
            !isTextArea
          ) {
            isTextArea = true;
            return (
              <TextArea
                key={index}
                handleContentSepration={handleContentSepration}
              />
            );
          }
        })}
        <button type="submit" className="btn btn-active btn-neutral">
          Generate Slide
        </button>
      </div>
    </form>
  );
};

export default InputContainer;
