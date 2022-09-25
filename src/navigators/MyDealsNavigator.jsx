import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ViewDeals from "../components/dashboard/ViewDeals";
import { AddDealNavigator } from "./AddDealNavigator";
import { UpdateDealNavigator } from "./UpdateDealNavigator";

export const MyDealsNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="dashboardMenu" tabBar={() => <></>}
    screenOptions={{headerShown:false}}>
      <Tab.Screen name="viewDeals" component={ViewDeals} />        
      <Tab.Screen name="addDeal" component={AddDealNavigator} />
      <Tab.Screen name="updateDeal" component={UpdateDealNavigator} />
    </Tab.Navigator>
  );
};
