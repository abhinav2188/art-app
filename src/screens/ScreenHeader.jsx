import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "tailwindcss/colors";
import logo from "../../assets/icon.png";
import { Document, Home, User } from "../svgIcons";

const ScreenHeader = (props) => (
  <View className="flex px-4 my-1">
    <View className="w-full flex flex-row px-4 py-1 bg-sky-800 justify-between items-center rounded-xl border border-gray-400">
      <Image source={logo} className="h-12 w-12 rounded-lg" />
      <Text className="text-gray-100 uppercase text-light">{props.options.title}</Text>
    </View>
  </View>
);

export default ScreenHeader;
