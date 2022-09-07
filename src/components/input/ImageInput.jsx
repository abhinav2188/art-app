import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Calenlar, CameraIcon, GalleryIcon } from "../../svgIcons";
import InputInfo from "./InputInfo";
import colors from "tailwindcss/colors";
import ImageGallery from "../ImageGallery";

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

  const options = {
    mediaType: "photo",
  };

  const pickImage = async (mode) => {
    setFetching(true);
    let result = null;

    if (mode == "gallery") {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
    } else {
      let cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
      if (cameraPermission.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
      result = await ImagePicker.launchCameraAsync();
    }

    if (!!result) {
      const date = new Date();
      const fileName = "image" + date.getMilliseconds();
      const file = {
        uri: result.uri,
        name: fileName,
        type: "image/jpeg",
      };
      onChange(name, file);
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
    setFetching(false);
  };

  return (
    <View className={`flex flex-col ${clazzName}`} style={style}>
      <View className="flex flex-row items-center h-6">
        <Text className="text-sky-600 font-bold uppercase ">{label}</Text>
        <InputInfo description={description} errorMsg={errorMsg} />
      </View>
      <View className="flex flex-row border border-gray-400 rounded-lg py-2 px-2 justify-between items-center w-full">
        <Text className="flex-1">{image}</Text>
        <View>
          {fetching ? (
            <ActivityIndicator color={colors.gray[600]} />
          ) : (
            <View className="flex flex-row space-x-1">
              <TouchableOpacity onPress={()=>pickImage("gallery")} className="w-6 h-6">
                <GalleryIcon fill={colors.gray[400]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>pickImage("camera")} className="w-6 h-6">
                <CameraIcon fill={colors.gray[400]} />
              </TouchableOpacity>
            </View>
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
