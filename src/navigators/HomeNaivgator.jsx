import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { DashboardNavigator } from "./DashboardNavigator";
import { MyDealsNavigator } from "./MyDealsNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import HomeNavBar from "../components/HomeNavBar";

const HomeNavigator = ({ navigation }) => {

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator tabBar={HomeNavBar}>
      <Tab.Screen name="dashboard" component={DashboardNavigator} />
      <Tab.Screen name="myDeals" component={MyDealsNavigator} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;

// screenOptions={({ route }) => ({
//   tabBarIcon: ({ color, size }) => {
//     console.log(size);
//     let icon = null;
//     switch (route.name) {
//       case "profile":
//         icon = <User fill={color} />;
//         break;
//       case "myDeals":
//         icon = <Document fill={color} />;
//         break;
//       case "dashboard":
//         icon = <Home fill={color} />;
//     }
//     return <View className="w-6 h-6">{icon}</View>;
//   },
//   tabBarShowLabel: false,
//   tabBarActiveTintColor: colors.sky[800],
//   tabBarInactiveTintColor: colors.gray[300],
// })}
