import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Info } from "../../svgIcons";
import colors from "tailwindcss/colors";
import Popover from "react-native-popover-view";

const InputInfo = ({ errorMsg, description, style }) => (
  <View style={style}>
    {!!errorMsg ? (
      <Popover
        from={
          <TouchableOpacity className="w-6 h-6">
            <Info fill={colors.red[800]} />
          </TouchableOpacity>
        }
      >
        <Text className="px-1 text-red-800 ">{errorMsg}</Text>
      </Popover>
    ) : (
      !!description && (
        <Popover
          from={
            <TouchableOpacity className="w-6 h-6">
              <Info fill={colors.sky[600]} />
            </TouchableOpacity>
          }
        >
          <Text className="px-1 text-sky-600">{description}</Text>
        </Popover>
      )
    )}
  </View>
);

export default InputInfo;