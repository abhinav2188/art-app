import React from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View } from "react-native";
import InputInfo from "./InputInfo";

const NativeTextPassword = ({
  name,
  value,
  label,
  onChange,
  description,
  errorMsg,
  clazzName,
  style
}) => {

  function onChangeHandler(newVal) {
    onChange(name, newVal);
  }

  return (
    <View className={`flex flex-col ${clazzName}`} style={style}>
      <View className="flex flex-row items-center h-6">
        <Text className="text-sky-600 font-bold uppercase">{label}</Text>
        <InputInfo description={description} errorMsg={errorMsg} />
      </View>
      <TextInput
        className={`border border-gray-400 rounded-lg px-1 py-2 focus:border-gray-400 focus:bg-gray-200 text-base ${
          errorMsg && "border-red-500"
        }`}
        onChangeText={onChangeHandler}
        value={value}
        secureTextEntry={true}
      />
    </View>
  );
};

// NativeTextPassword.propTypes = {
//   name: PropTypes.string,
//   label: PropTypes.string,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
//   clazzName: PropTypes.string,
//   description: PropTypes.string,
//   errorMsg: PropTypes.string,
// };

export default NativeTextPassword;
