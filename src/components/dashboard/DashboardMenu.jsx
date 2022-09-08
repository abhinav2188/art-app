import React from "react";
import { View } from "react-native";
import { Document, Star, User } from "../../svgIcons";
import MenuButton from "../button/MenuButton";

export const DashboardMenu = ({ navigation }) => (
  <View className="flex flex-1 items-center w-full py-6">
    <View className="flex w-11/12 rounded-lg gap-y-4">
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
