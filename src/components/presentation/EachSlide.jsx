import { Slide, Text } from "react-pptx";
import LineContainer from "./slideComponents/LineContainer";
import BulletTextContainer from "./slideComponents/BulletTextContainer";
import TextContainer from "./slideComponents/TextContainer";

const EachSlide = ({ each }) => {
  return (
    <Slide style={{ backgroundColor: each[0].slideColor }}>
      {each.map((item, index) => {
        if (item.hasOwnProperty("type")) {
          if (item.type == "line") {
            return <LineContainer key={index} item={item} />;
          }
        } else if (item.hasOwnProperty("text")) {
          if (item.hasOwnProperty("bullet")) {
            const bullet = item.text.split("\n");
            return (
              <BulletTextContainer
                key={index}
                bullet={bullet}
                item={item}
                each={each}
              />
            );
          }
          return <TextContainer key={index} item={item} each={each} />;
        }
      })}
    </Slide>
  );
};

export default EachSlide;
