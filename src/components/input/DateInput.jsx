import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import InputInfo from "./InputInfo";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calenlar, Clock } from "../../svgIcons";
import colors from "tailwindcss/colors";

const DateInput = ({
  name,
  value,
  label,
  onChange,
  description,
  errorMsg,
  clazzName,
  style,
  isTimed,
}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChangeHandler = (event, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
    onChange(name, selectedDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    setShow(true);
  };

  const showTimepicker = () => {
    showMode("time");
    setShow(true);
  };

  return (
    <View className={`flex flex-col ${clazzName}`} style={style}>
      <View className="flex flex-row items-center h-6">
        <Text className="text-sky-600 font-bold uppercase ">{label}</Text>
        <InputInfo description={description} errorMsg={errorMsg} />
      </View>
      <View
        className={`flex flex-row items-center py-2 px-2 space-x-2 justify-between border border-gray-400 rounded-lg focus:border-gray-400 focus:bg-gray-200 text-base ${
          errorMsg && "border-red-500"
        }`}
      >
        <Text className="flex-1 text-base">{String(value)}</Text>
        <View className="flex flex-row space-x-1">
          <TouchableOpacity onPress={showDatepicker} className="h-6 w-6">
            <Calenlar fill={colors.gray[400]} />
          </TouchableOpacity>
          {!!isTimed ? (
            <TouchableOpacity onPress={showTimepicker} className="h-6 w-6">
              <Clock fill={colors.gray[400]} />
            </TouchableOpacity>
          ) : (
            <Text></Text>
          )}
        </View>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChangeHandler}
        />
      )}
    </View>
  );
};

export default DateInput;
