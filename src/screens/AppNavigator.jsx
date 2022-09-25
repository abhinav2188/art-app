import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import LogScreen from "./LogScreen";
import HomeNavigator from "./HomeNaivgator";
import UserContext from "../context/UserContext";
import TransitionScreen from "./TransitionScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const userContext = useContext(UserContext);

  return userContext.userContextLoading ? (
    <TransitionScreen />
  ) : (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!!userContext.user ? (
            <Stack.Screen name="home" component={HomeNavigator} />
          ) : (
            <Stack.Screen name="login" component={LogScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigator;
