import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, Text, TextInput, View } from "react-native";

const NativeTextPassword = (props) => {

  function onChangeHandler(newVal) {
    props.onChange(props.name, newVal); 
  }
  return (
    <View className={`flex flex-col ${props.clazzName}`}>
      <Text className="text-sky-800 font-bold uppercase">{props.label}</Text>
      <TextInput
        className="border border-gray-400 rounded-lg px-1 py-2 focus:border-gray-400 focus:bg-gray-200 text-base"
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
  clazzName:PropTypes.string
};

export default NativeTextPassword;