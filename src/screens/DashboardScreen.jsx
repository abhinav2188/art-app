import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AddParty from "../components/dashboard/AddParty";
import { DashboardMenu } from "../components/dashboard/DashboardMenu";

export const DashboardScreen = () => {

  const DashboardNavigator = createBottomTabNavigator();

  return (
    <DashboardNavigator.Navigator initialRouteName="dashboardMenu" tabBar={() => <></>}
    screenOptions={{headerShown:false}}>
      <DashboardNavigator.Screen name="dashboardMenu" component={DashboardMenu} />
      <DashboardNavigator.Screen name="addParty" component={AddParty} />
    </DashboardNavigator.Navigator>
  );
};
