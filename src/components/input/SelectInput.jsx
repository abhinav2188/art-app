import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import InputInfo from "./InputInfo";

const SelectInput = ({
  name,
  value,
  label,
  optionsList,
  onChange,
  description,
  errorMsg,
  style,
  clazzName,
}) => {

  const [selectedOption, setSelectedOption] = useState(value);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions([
      ...optionsList.map((option) => ({
        value: option.value,
        label: option.value,
      })),
      {
        value: "",
        label: "NONE",
      },
    ]);
  }, [optionsList]);

  function handleSelectChange(selectedItem) {
    console.log(selectedItem);
    setSelectedOption(selectedItem);
    onChange(name, selectedItem);
  }

  return (
    <View className={`flex flex-col ${clazzName}`} style={style}>
      <View className="flex flex-row items-center h-6">
      <Text className="font-bold uppercase text-sky-800">{label}</Text>
      <InputInfo description={description} errorMsg={errorMsg} />
      </View>
      <View 
      className={`border border-gray-400 rounded-lg focus:border-gray-400 focus:bg-gray-200 text-base ${errorMsg && "border-red-500"}`}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) => handleSelectChange(itemValue)}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
      </View>
    </View>
  );

};

export default SelectInput;
