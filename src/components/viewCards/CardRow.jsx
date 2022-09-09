import { Text,  View } from "react-native";
import colors from "tailwindcss/colors";

const CardRow = ({ style, Icon, children }) => (
  <View className="flex flex-row items-center flex-1 space-x-1" style={style}>
    <View className="w-6 h-6">
      <Icon fill={colors.gray[600]} />
    </View>
    <View className="flex-1">{children}</View>
  </View>
);

export default CardRow;
