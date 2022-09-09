import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MultiSelect from "react-native-multiple-select";
import colors from "tailwindcss/colors";
import { DownArrow } from "../../svgIcons";
import BottomModal from "../BottomModal";
import CenterModal from "../CenterModal";
import InputInfo from "./InputInfo";

const MultipleSelectInput = ({
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
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setOptions(
      optionsList.map((option) => ({
        value: option.value,
        label: option.value,
      }))
    );
  }, [optionsList]);

  useEffect(() => {
    console.log(value);
    if (!!value) {
      let vals = value.split(",");
      setSelectedOptions(vals);
    }
  }, [value]);

  function handleSelectChange(selectedItems) {
    console.log(selectedItems);
    setSelectedOptions(selectedItems);
    let selectedValue = selectedItems.join(",");
    onChange(name, selectedValue);
  }

  return (
    <View className={`flex flex-col ${clazzName}`} style={style}>
      <View className="flex flex-row items-center h-6">
        <Text className="font-bold uppercase text-sky-600">{label}</Text>
        <InputInfo description={description} errorMsg={errorMsg} />
      </View>
      <View
        className={`flex flex-row items-center py-2 px-2  justify-between border border-gray-400 rounded-lg focus:border-gray-400 focus:bg-gray-200 text-base ${
          errorMsg && "border-red-500"
        }`}
      >
        <Text className="flex-1">{String(value)}</Text>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          className="w-6 h-6"
        >
          <DownArrow fill={colors.gray[400]} />
        </TouchableOpacity>
      </View>
      <CenterModal
        modalVisible={showModal}
        setModalVisible={setShowModal}
        closeable
      >
        <View className="flex p-4 rounded-t-xl">
          <MultiSelect
            hideTags
            items={options}
            uniqueKey="value"
            displayKey="label"
            onSelectedItemsChange={handleSelectChange}
            selectedItems={selectedOptions}
            selectText="Select Items"
            //   searchInputPlaceholderText="Search Items..."
            //   onChangeInput={(text) => console.log(text)}
            //   tagRemoveIconColor={colors.red[400]}
            //   tagBorderColor={colors.sky[600]}
            //   tagTextColor={colors.sky[600]}
            //   selectedItemTextColor={colors.sky[600]}
            //   selectedItemIconColor={colors.sky[600]}
            //   itemTextColor="#000"
            //   searchInputStyle={{ color: "#CCC" }}
            submitButtonColor={colors.sky[800]}
            submitButtonText="Select"
          />
        </View>
      </CenterModal>
    </View>
  );
};

export default MultipleSelectInput;
