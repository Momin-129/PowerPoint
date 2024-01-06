import { Presentation } from "react-pptx";
import Preview from "react-pptx/preview";
import EachSlide from "./EachSlide.jsx";

const SlideContainer = ({ template, currentSlide, setCurrentSlide }) => {
  return (
    <>
      <div className="carousel w-full">
        {template.map((each, index) => (
          <div
            key={index}
            id={"slide" + (index + 1)}
            className="carousel-item w-full"
          >
            <Preview>
              <Presentation layout={{ width: 11.02, height: 6.2 }}>
                <EachSlide each={each} />;
              </Presentation>
            </Preview>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {template.map((_, index) => (
          <a
            key={index}
            href={"#slide" + (index + 1)}
            className="btn btn-circle"
            style={{
              backgroundColor: currentSlide == index ? "#04001D" : "white",
              color: currentSlide == index ? "white" : "#04001D",
            }}
            onClick={() => setCurrentSlide(index)}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
};

export default SlideContainer;
