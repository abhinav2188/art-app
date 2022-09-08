import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import DealConsultants from "../components/dashboard/deal-consultants/DealConsultants";
import DealContacts from "../components/dashboard/deal-contacts/DealContacts";
import DealInteractions from "../components/dashboard/deal-interactions/DealInteractions";
import UpdateDeal from "../components/dashboard/UpdateDeal";

export const DealScreen = ({route}) => {

  const DealNavigator = createBottomTabNavigator();

  return (
    <DealNavigator.Navigator initialRouteName="deal" tabBar={() => <></>}
    screenOptions={{headerShown:false}}>
      <DealNavigator.Screen name="deal" component={UpdateDeal}/>
      <DealNavigator.Screen name="dealContacts" component={DealContacts} />
      <DealNavigator.Screen name="dealConsultants" component={DealConsultants} />
      <DealNavigator.Screen name="dealInteractions" component={DealInteractions} />
    </DealNavigator.Navigator>
  );
};
