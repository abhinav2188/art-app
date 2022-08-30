import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import AddDeal from "../components/dashboard/AddDeal";
import AddParty from "../components/dashboard/AddParty";
import { DashboardMenu } from "../components/dashboard/DashboardMenu";
import { Document, User } from "../svgIcons";

export const DashboardScreen = () => {

  const DashboardNavigator = createBottomTabNavigator();

  return (
    <DashboardNavigator.Navigator initialRouteName="dashboardMenu" tabBar={() => <></>}
    screenOptions={{headerShown:false}}>
      <DashboardNavigator.Screen name="dashboardMenu" component={DashboardMenu} />
      <DashboardNavigator.Screen name="addParty" component={AddParty} />
      <DashboardNavigator.Screen name="addDeal" component={AddDeal} />
    </DashboardNavigator.Navigator>
  );
};
