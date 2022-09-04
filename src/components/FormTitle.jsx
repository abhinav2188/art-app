import React from "react";
import { View } from "react-native";
import colors from "tailwindcss/colors";

const FormTitle = ({ Icon, children, style }) => (
  <View className="flex flex-row justify-between items-center border border-gray-400 rounded-xl overflow-hidden px-2" style={style}>
    <View className="flex">{children}</View>
    <View className="w-10 h-10">
      <View className="w-12 h-12 -rotate-12">
        <Icon fill={colors.gray[300]} />
      </View>
    </View>
  </View>
);

export default FormTitle;