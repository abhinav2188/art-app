import React from "react";
import { Text, View } from "react-native";

const Pill = ({children, style}) => (
  <View className="rounded-full py-1 px-2 bg-gray-600" style={style}>
    <Text className="font-light text-white">
      {children}
    </Text>
  </View>
);


export default Pill;