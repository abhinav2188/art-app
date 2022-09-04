import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AddParty from "../components/dashboard/AddParty";
import { DashboardMenu } from "../components/dashboard/DashboardMenu";
import DealConsultants from "../components/dashboard/deal-consultants/DealConsultants";
import DealContacts from "../components/dashboard/deal-contacts/DealContacts";
import AddDeal from "../components/dashboard/deal/AddDeal";
import UpdateDeal from "../components/dashboard/deal/UpdateDeal";
import ViewDeals from "../components/dashboard/deal/ViewDeals";
import { DealScreen } from "./DealScreen";

export const MyDealsScreen = () => {

  const MyDealsNavigator = createBottomTabNavigator();

  return (
    <MyDealsNavigator.Navigator initialRouteName="dashboardMenu" tabBar={() => <></>}
    screenOptions={{headerShown:false}}>
      <MyDealsNavigator.Screen name="viewDeals" component={ViewDeals} />        
      <MyDealsNavigator.Screen name="addDeal" component={AddDeal} />
      <MyDealsNavigator.Screen name="updateDeal" component={DealScreen} />
    </MyDealsNavigator.Navigator>
  );
};
