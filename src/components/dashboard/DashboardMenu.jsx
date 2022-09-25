import React from "react";
import { View } from "react-native";
import { Document, Star, User } from "../../svgIcons";
import MenuButton from "../button/MenuButton";

export const DashboardMenu = ({ navigation }) => (
  <View className="flex w-full p-4">
    <View className="flex w-full space-y-4">
      <MenuButton
        title1="add"
        title2="new party"
        onPress={() => navigation.jumpTo("addParty")}
        Icon={Star}
      />
      <MenuButton
        title1="My deals"
        onPress={() => navigation.navigate("myDeals")}
        Icon={Document}
      />
    </View>
  </View>
);
