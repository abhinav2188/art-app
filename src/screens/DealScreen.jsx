import React from "react";
import { Text, View } from "react-native";
import ViewDeals from "../components/dashboard/deal/ViewDeals";

export const DealScreen = ({navigation}) => {
    return (
        <View className="flex">
            <ViewDeals navigation={navi}/>
        </View>
    );
}