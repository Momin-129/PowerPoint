import { Text } from "react-pptx";

const TextContainer = ({ item, each }) => {
  return (
    <Text
      style={{
        ...item,
        verticalAlign: item.valign,
        backgroundColor: item.fill ? item.fill.color : each[0].slideColor,
      }}
    >
      {item.text}
    </Text>
  );
};

export default TextContainer;
