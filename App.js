import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MyAppsProviders from "./src/MyAppProviders";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";

export default function App() {
  return (
    <MyAppsProviders>
      <View className="flex-1">
        <StatusBar style="auto" />
        <Home />
      </View>
    </MyAppsProviders>
  );
}
