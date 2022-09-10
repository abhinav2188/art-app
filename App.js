import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import MyAppsProviders from "./src/MyAppProviders";
import LogScreen from "./src/screens/LogScreen";
import HomeNavigator from "./src/screens/HomeNaivgator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MyAppsProviders>
      <View className="flex-1 pt-8 bg-gray-100">
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="home"
          > 
            <Stack.Screen name="home" component={HomeNavigator} />
            <Stack.Screen name="login" component={LogScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </MyAppsProviders>
  );
}