import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "tailwindcss/colors";
import { Document, Star, User } from "../../svgIcons";
import MenuButton from "./MenuButton";

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
          title1="add"
          title2="new deal"
          onPress={() => navigation.jumpTo("addDeal")}
          Icon={Document}
        />
        <MenuButton
          title1="My deals"
          onPress={() => navigation.navigate("deals")}
          Icon={Document}
        />
      </View>
    </View>
  );

