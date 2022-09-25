import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import DealConsultants from "../components/dashboard/deal-consultants/DealConsultants";
import DealContacts from "../components/dashboard/deal-contacts/DealContacts";
import DealInteractions from "../components/dashboard/deal-interactions/DealInteractions";
import AddDeal from "../components/dashboard/AddDeal";
import DealAttachments from "../components/dashboard/deal-attachment/DealAttachments";

export const AddDealNavigator = ({route}) => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="addDeal" tabBar={() => <></>}
    screenOptions={{headerShown:false}}>
      <Tab.Screen name="deal" component={AddDeal}/>
      <Tab.Screen name="dealContacts" component={DealContacts} />
      <Tab.Screen name="dealConsultants" component={DealConsultants} />
      <Tab.Screen name="dealInteractions" component={DealInteractions} />
      <Tab.Screen name="dealAttachments" component={DealAttachments} />
    </Tab.Navigator>
  );
};
