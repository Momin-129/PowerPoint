import { Line } from "react-pptx";

const LineContainer = ({ item }) => {
  return (
    <Line
      x1={item.x}
      x2={item.w}
      y1={item.y}
      y2={item.y}
      style={{
        color: item.line.color,
        width: item.line.width,
      }}
    />
  );
};

export default LineContainer;
