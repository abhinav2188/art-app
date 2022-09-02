import React from "react";
import { View } from "react-native";
import colors from "tailwindcss/colors";

const FormTitle = ({ Icon, children, style }) => (
  <View className="flex flex-row justify-between items-center shadow-xl bg-gray-400 rounded-t-xl overflow-hidden px-4" style={style}>
    <View className="flex">{children}</View>
    <View className="w-16 h-16">
      <View className="w-20 h-20 -rotate-12">
        <Icon fill={colors.gray[300]} />
      </View>
    </View>
  </View>
);

export default FormTitle;
