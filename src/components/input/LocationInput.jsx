import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LocationIcon, User } from "../../svgIcons";
import InputInfo from "./InputInfo";
import * as Location from "expo-location";
import colors from "tailwindcss/colors";

const LocationInput = ({
  name,
  value,
  label,
  onChange,
  description,
  errorMsg,
  clazzName,
  style,
}) => {
  function onChangeHandler(newVal) {
    onChange(name, newVal);
  }

  const [fetching, setFetching] = useState(false);
  //   const [errorMsg, setErrorMsg] = useState(null);

  const fetchCurrentLocation = async () => {
    setFetching(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      setFetching(false);
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    console.log(JSON.stringify(response[0]));
    for (let item of response) {
      let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}, ${item.region}, ${item.country}`;
      onChange(name, address);
      break;
    }
    setFetching(false);
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
        <TextInput
          className="text-base flex-1"
          onChangeText={onChangeHandler}
          value={String(value)}
          multiline={true}
        />
        <View>
          {fetching ? (
            <ActivityIndicator color={colors.gray[600]} />
          ) : (
            <TouchableOpacity
              onPress={fetchCurrentLocation}
              className="w-6 h-6"
            >
              <LocationIcon fill={colors.gray[400]} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

// LocationInput.propTypes = {
//   name: PropTypes.string,
//   label: PropTypes.string,
//   value: PropTypes.string,
//   inputType: PropTypes.string,
//   onChange: PropTypes.func,
//   clazzName: PropTypes.string,
//   description: PropTypes.string,
//   errorMsg: PropTypes.string,
// };

export default LocationInput;
