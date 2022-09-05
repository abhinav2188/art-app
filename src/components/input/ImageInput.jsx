import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Calenlar, LocationIcon, User } from "../../svgIcons";
import InputInfo from "./InputInfo";
import * as Location from "expo-location";
import colors from "tailwindcss/colors";

const ImageInput = ({
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

  const [image, setImage] = useState(null);
  const [fetching, setFetching] = useState(false);

  function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    setFetching(true);  
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
    });

    // const file = _base64ToArrayBuffer(result.base64);
    onChange(name, result);
    console.log(result);
    console.log(result.base64);

    if (!result.cancelled) {
      setImage(result.uri);
    }
    setFetching(false);
  };


  return (
    <View className={`flex flex-col ${clazzName}`} style={style}>
      <View className="flex flex-row items-center h-6">
        <Text className="text-sky-600 font-bold uppercase ">{label}</Text>
        <InputInfo description={description} errorMsg={errorMsg} />
      </View>
      <View className="flex flex-row border border-gray-400 rounded-lg py-2 px-1 justify-between items-center w-full">
        <Text className="w-11/12">{image}</Text>
        <View>
          {fetching ? (
            <ActivityIndicator color={colors.gray[600]} />
          ) : (
            <TouchableOpacity onPress={pickImage} className="w-6 h-6">
              <Calenlar fill={colors.gray[400]}/>
            </TouchableOpacity>
          )}
        </View>      
        </View>
    </View>
  );
};

// ImageInput.propTypes = {
//   name: PropTypes.string,
//   label: PropTypes.string,
//   value: PropTypes.string,
//   inputType: PropTypes.string,
//   onChange: PropTypes.func,
//   clazzName: PropTypes.string,
//   description: PropTypes.string,
//   errorMsg: PropTypes.string,
// };

export default ImageInput;
