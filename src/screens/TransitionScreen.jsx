import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import colors from 'tailwindcss/colors';

const TransitionScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
        <ActivityIndicator color={colors.gray[800]} />
    </View>
  )
}

export default TransitionScreen;