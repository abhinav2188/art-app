import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import colors from 'tailwindcss/colors';

const TransitionScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-art">
        <StatusBar style="auto" />
        <ActivityIndicator color={colors.gray[100]} />
    </View>
  )
}

export default TransitionScreen;