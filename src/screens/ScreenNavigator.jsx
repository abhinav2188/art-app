import React from "react";
import { Text, View,TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";
import { Document, Home, ListIcon, User } from "../svgIcons";

const ScreenNavigator = (props) => {

    console.log(props);

    const {navigation} = props;

  return (
    <View className="flex flex-col px-4 my-2">
      <View className="w-full flex flex-row px-4 py-3 bg-sky-800 justify-between items-center rounded-xl border border-gray-400">
        <View className="flex flex-row space-x-2">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("dashboard");
          }}
          className="w-8 h-8"
          >
          <ListIcon fill={colors.gray[100]} />
            </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("myDeals");
          }}
          className="w-8 h-8"
        >
          <Document fill={colors.gray[100]} />
        </TouchableOpacity>

        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("profile");
          }}
          className="w-8 h-8"
        >
          <User fill={colors.gray[100]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenNavigator;
