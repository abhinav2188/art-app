import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyAppsProviders from './MyAppProviders';

export default function App() {
  return (
    <MyAppsProviders>
      <SafeAreaView className="flex-1 py-10 bg-gray-400">
        <View className="flex">
          <Text className="font-bold">AR Thermosets 2</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </MyAppsProviders>
  );
}

