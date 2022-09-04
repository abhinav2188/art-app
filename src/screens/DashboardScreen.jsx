import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AddParty from "../components/dashboard/AddParty";
import { DashboardMenu } from "../components/dashboard/DashboardMenu";
import DealConsultants from "../components/dashboard/deal-consultants/DealConsultants";
import DealContacts from "../components/dashboard/deal-contacts/DealContacts";
import AddDeal from "../components/dashboard/deal/AddDeal";
import UpdateDeal from "../components/dashboard/deal/UpdateDeal";

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
