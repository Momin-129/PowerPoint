import { useState } from "react";
import { CrimsonNoir } from "./assets/templates/CrimsonNoir";
import InputContainer from "./components/input/InputContainer";
import SlideContainer from "./components/presentation/SlideContainer";
import HomeButtons from "./components/HomeButtons";

const Home = () => {
  const saved = JSON.parse(localStorage.getItem("saved")) ?? null;

  const [template, setTemplate] = useState(saved ? saved : CrimsonNoir);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDuplicate = () => {
    setTemplate((prev) => {
      const newTemplate = [...prev];
      const originalSlide = newTemplate[currentSlide];
      const duplicateSlide = JSON.parse(JSON.stringify(originalSlide));
      newTemplate.splice(currentSlide + 1, 0, duplicateSlide);
      return newTemplate;
    });
  };

  const handleDelete = () => {
    setTemplate((prev) => {
      const newTemplate = [...prev];
      newTemplate.splice(currentSlide, 1);
      return newTemplate;
    });
  };

  const handleSave = () => {
    localStorage.setItem("saved", JSON.stringify(template));
  };

  const homeButtons = {
    handleDelete: handleDelete,
    handleDuplicate: handleDuplicate,
    handleSave: handleSave,
  };

  return (
    <div className="p-3 w-full h-full bg-primary">
      <div className="grid lg:grid-cols-2 h-full">
        <div className="flex flex-col justify-center items-center p-2 gap-3">
          <InputContainer
            template={template}
            currentSlide={currentSlide}
            setTemplate={setTemplate}
          />
        </div>
        <div className="flex flex-col justify-center items-center p-2 gap-3">
          <SlideContainer
            template={template}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
          <HomeButtons {...homeButtons} template={template} />
        </div>
      </div>
    </div>
  );
};

export default Home;
