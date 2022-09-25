import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { DashboardScreen } from "./DashboardScreen";
import { MyDealsScreen } from "./MyDealsScreen";
import ProfileScreen from "./ProfileScreen";
import HomeNavBar from "./HomeNavBar";

const HomeNavigator = ({ navigation }) => {

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator tabBar={HomeNavBar}>
      <Tab.Screen name="dashboard" component={DashboardScreen} />
      <Tab.Screen name="myDeals" component={MyDealsScreen} />
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
