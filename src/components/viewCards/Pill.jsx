import React from "react";
import { Text } from "react-native";

const Pill = ({children, style}) => (
    <Text className="rounded-full py-1 px-2 bg-gray-600 font-light text-white" style={style}>
      {children}
    </Text>
);


export default Pill;