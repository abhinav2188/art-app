import React from "react";
import { Text, View } from "react-native";

const ViewDetails = ({ data, viewFields, actions, title, style }) => {

    return (
        <View className="border border-gray-400 rounded-xl flex flex-col overflow-hidden" style={style}>
            <View className="flex flex-row justify-between items-center px-2 py-2">
                <Text className="capitalize text-lg font-light">{title}</Text>
                <View className="flex">{actions}</View>
            </View>
            {
                viewFields.map(viewField =>
                    <View className="flex border-t border-gray-400 py-2 px-2 ">
                        <Text className="text-sm uppercase text-sky-600 font-bold">{viewField.label}</Text>
                        <Text>{String(data[viewField.name])}</Text>
                    </View>
                )
            }
        </View>
    );

}

export default ViewDetails;