import React, { useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Info } from "../../svgIcons";
import colors from "tailwindcss/colors";
import Popover from "react-native-popover-view";

const NativeTextPassword = (props) => {

  function onChangeHandler(newVal) {
    props.onChange(props.name, newVal); 
  }

  return (
    <View className={`flex flex-col ${props.clazzName}`}>
      <View className="flex flex-row items-center">
        <Text className="text-sky-800 font-bold uppercase">{props.label}</Text>
        <Popover
          from={
            <TouchableOpacity className="w-6 h-6">
              <Info fill={props.errorMsg ? colors.red[800] : colors.sky[800]} />
            </TouchableOpacity>
          }
        >
          <Text className="p-1">{props.errorMsg ? props.errorMsg : props.description}</Text>
        </Popover>
      </View>
      <TextInput
        className={`border border-gray-400 rounded-lg px-1 py-2 focus:border-gray-400 focus:bg-gray-200 text-base ${props.errorMsg && "border-red-500"}`}
        onChangeText={onChangeHandler}
        value={props.value}
        secureTextEntry={true}
      />
    </View>
  );
};

NativeTextPassword.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  clazzName: PropTypes.string,
  description: PropTypes.string,
  errorMsg: PropTypes.string,
};

export default NativeTextPassword;
