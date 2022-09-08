import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AddDeal from "../components/dashboard/AddDeal";
import ViewDeals from "../components/dashboard/ViewDeals";
import { AddDealScreen } from "./AddDealScreen";
import { DealScreen } from "./DealScreen";

export const MyDealsScreen = () => {

  const MyDealsNavigator = createBottomTabNavigator();

  return (
    <MyDealsNavigator.Navigator initialRouteName="dashboardMenu" tabBar={() => <></>}
    screenOptions={{headerShown:false}}>
      <MyDealsNavigator.Screen name="viewDeals" component={ViewDeals} />        
      <MyDealsNavigator.Screen name="addDeal" component={AddDealScreen} />
      <MyDealsNavigator.Screen name="updateDeal" component={DealScreen} />
    </MyDealsNavigator.Navigator>
  );
};
