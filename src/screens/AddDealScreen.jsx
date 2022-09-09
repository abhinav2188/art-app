import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import DealConsultants from "../components/dashboard/deal-consultants/DealConsultants";
import DealContacts from "../components/dashboard/deal-contacts/DealContacts";
import DealInteractions from "../components/dashboard/deal-interactions/DealInteractions";
import AddDeal from "../components/dashboard/AddDeal";
import DealAttachments from "../components/dashboard/deal-attachment/DealAttachments";

export const AddDealScreen = ({route}) => {

  const AddDealNavigator = createBottomTabNavigator();

  return (
    <AddDealNavigator.Navigator initialRouteName="addDeal" tabBar={() => <></>}
    screenOptions={{headerShown:false}}>
      <AddDealNavigator.Screen name="deal" component={AddDeal}/>
      <AddDealNavigator.Screen name="dealContacts" component={DealContacts} />
      <AddDealNavigator.Screen name="dealConsultants" component={DealConsultants} />
      <AddDealNavigator.Screen name="dealInteractions" component={DealInteractions} />
      <AddDealNavigator.Screen name="dealAttachments" component={DealAttachments} />
    </AddDealNavigator.Navigator>
  );
};
