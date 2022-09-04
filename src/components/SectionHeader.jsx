import React from "react";
import { Text, View } from "react-native";

const SectionHeader = ({title, totalCount, actions, style}) => (
  <View className="flex flex-row justify-between border border-gray-400 px-2 items-center rounded-xl py-2" style={style}>
    <View className="flex flex-row space-x-1 items-center">
      <Text>{title}</Text>
      <Text className="px-1 bg-sky-800 text-white rounded">
        {totalCount}
      </Text>
    </View>
    <View className="flex flex-row space-x-2">
        {actions}
    </View>
  </View>
);

export default SectionHeader;