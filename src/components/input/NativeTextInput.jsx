import React from "react";
import { Text, TextInput, View } from "react-native";
import InputInfo from "./InputInfo";

const inputTypeMap = {
  email: "email-address",
  integer: "number-pad",
  decimal: "decimal-pad",
  mobile: "phone-pad",
};

const NativeTextInput = ({
  name,
  value,
  label,
  onChange,
  description,
  errorMsg,
  inputType,
  clazzName,
  style
}) => {
  
  function onChangeHandler(newVal) {
    onChange(name, newVal);
  }

  return (
    <View className={`flex flex-col ${clazzName}`} style={style}>
      <View className="flex flex-row items-center h-6">
        <Text className="text-sky-600 font-bold uppercase ">
          {label}
        </Text>
        <InputInfo description={description} errorMsg={errorMsg} />
      </View>
      <TextInput
        className={`border border-gray-400 rounded-lg px-1 py-2 focus:border-gray-400 focus:bg-gray-200 text-base ${
          errorMsg && "border-red-500"
        }`}
        onChangeText={onChangeHandler}
        value={String(value)}
        keyboardType={inputTypeMap[inputType]}
      />
      </View>
  );
};

// NativeTextInput.propTypes = {
//   name: PropTypes.string,
//   label: PropTypes.string,
//   value: PropTypes.string,
//   inputType: PropTypes.string,
//   onChange: PropTypes.func,
//   clazzName: PropTypes.string,
//   description: PropTypes.string,
//   errorMsg: PropTypes.string,
// };

export default NativeTextInput;
