import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";
import { LeftArrow } from "../../svgIcons";

const GoBackButton = ({ navigation }) => (
  <TouchableOpacity
    className="w-8 h-8 bg-gray-200 rounded-full"
    onPress={() => navigation.goBack()}
  >
    <LeftArrow fill={colors.sky[500]} />
  </TouchableOpacity>
);

export default GoBackButton;
