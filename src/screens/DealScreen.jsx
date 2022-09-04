import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AddParty from "../components/dashboard/AddParty";
import { DashboardMenu } from "../components/dashboard/DashboardMenu";
import DealConsultants from "../components/dashboard/deal-consultants/DealConsultants";
import DealContacts from "../components/dashboard/deal-contacts/DealContacts";
import AddDeal from "../components/dashboard/deal/AddDeal";
import UpdateDeal from "../components/dashboard/deal/UpdateDeal";
import ViewDeals from "../components/dashboard/deal/ViewDeals";

export const DealScreen = ({route}) => {

  const DealNavigator = createBottomTabNavigator();

  return (
    <DealNavigator.Navigator initialRouteName="dashboardMenu" tabBar={() => <></>}
    screenOptions={{headerShown:false}}>
      <DealNavigator.Screen name="deal" component={UpdateDeal}/>
      <DealNavigator.Screen name="dealContacts" component={DealContacts} />
      <DealNavigator.Screen name="dealConsultants" component={DealConsultants} />
    </DealNavigator.Navigator>
  );
};
