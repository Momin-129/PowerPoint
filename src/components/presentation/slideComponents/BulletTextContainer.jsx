import { Text } from "react-pptx";

const BulletTextContainer = ({ bullet, item, each }) => {
  return (
    <Text
      style={{
        ...item,
        verticalAlign: item.valign,
        backgroundColor: item.fill ? item.fill.color : each[0].slideColor,
      }}
    >
      {bullet.map((value, index) => (
        <Text.Bullet type="number" key={index}>
          {String.fromCharCode("8226") + "   " + value}
        </Text.Bullet>
      ))}
    </Text>
  );
};

export default BulletTextContainer;
