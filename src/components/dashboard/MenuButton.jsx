import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

const MenuButton = ({ title1, title2, Icon, onPress, style }) => {
    return (
      <TouchableOpacity
        className="flex flex-row w-full bg-gray-500 items-center justify-between py-4 px-6 rounded-2xl overflow-hidden"
        style={style}
        onPress={onPress}
      >
        <View className="flex">
          <Text className="font-bold uppercase text-xl text-gray-100 flex translate-y-1">
            {title1}
          </Text>
          <Text className="uppercase text-lg -translate-y-1  text-gray-100 flex">
            {title2}
          </Text>
        </View>
        <View className="w-16 h-16">
          <View className="w-24 h-24 -rotate-12">
            <Icon fill={colors.gray[400]} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
export default MenuButton;
