import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabActions, useLinkProps } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";
import UserContext from "../context/UserContext";
import { Document, Home, User } from "../svgIcons";
import { DashboardScreen } from "./DashboardScreen";
import { MyDealsScreen } from "./MyDealsScreen";
import ProfileScreen from "./ProfileScreen";


const HomeNavigator = ({ navigation }) => {

  const userContext = useContext(UserContext);

  const Tab = createMaterialTopTabNavigator();


  useEffect(() => {
    if (!!!userContext.user) {
      navigation.navigate("login");
    }
  }, [userContext.user]);

  return (
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({color,size}) => {
          console.log(size);
          let icon = null;
          switch(route.name){
            case "profile" : 
            icon = <User fill={color}/>
            break;
            case "myDeals":
            icon = <Document fill={color}/>    
            break;     
            case "dashboard" :
            icon = <Home fill={color}/>   
          }
          return <View className="w-6 h-6">{icon}</View>
        },
        tabBarShowLabel:false,
        tabBarActiveTintColor: colors.sky[800],
        tabBarInactiveTintColor: colors.gray[300],
      })}>
        <Tab.Screen name="dashboard" component={DashboardScreen} />
        <Tab.Screen name="myDeals" component={MyDealsScreen} />
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
};

export default HomeNavigator;

{/* <View className="flex flex-1 bg-gray-100 pt-12 items-center w-full">
<View className="flex flex-row w-11/12 bg-sky-800 px-4 py-3 rounded-lg justify-between">
  <View className="flex flex-row gap-2">
    <TouchableOpacity
      className="w-8 h-8"
      onPress={() => navigation.navigate("home")}
    >
      <Home fill={colors.gray[100]} />
    </TouchableOpacity>
  </View>
  <View className="flex flex-row gap-2">
    <TouchableOpacity className="w-8 h-8">
      <Document
        fill={colors.gray[100]}
        onPress={() => navigation.navigate("home", (screen = "deals"))}
      />
    </TouchableOpacity>
    <TouchableOpacity className="w-8 h-8">
      <User
        fill={colors.gray[100]}
        onPress={() => navigation.navigate("home", (screen = "profile"))}
      />
    </TouchableOpacity>
  </View>
</View>
</View> */}
