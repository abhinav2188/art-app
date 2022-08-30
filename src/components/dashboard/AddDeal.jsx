import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const AddDeal = ({ navigation }) => (
    <View>
      <TouchableOpacity onPress={() => navigation.jumpTo("dashboardMenu")}>
        <Text>Menu</Text>
      </TouchableOpacity>
      <Text>addDeal</Text>
    </View>
);


export default AddDeal;