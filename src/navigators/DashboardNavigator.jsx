import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AddParty from "../components/dashboard/AddParty";
import { DashboardMenu } from "../components/dashboard/DashboardMenu";

export const DashboardNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="dashboardMenu" tabBar={() => <></>}
    screenOptions={{headerShown:false}}>
      <Tab.Screen name="dashboardMenu" component={DashboardMenu} />
      <Tab.Screen name="addParty" component={AddParty} />
    </Tab.Navigator>
  );
};
