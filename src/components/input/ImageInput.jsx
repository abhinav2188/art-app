import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { CameraIcon, GalleryIcon } from "../../svgIcons";
import InputInfo from "./InputInfo";
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
  const [image, setImage] = useState(null);
  const [fetching, setFetching] = useState(false);

  const pickImage = async (mode) => {
    setFetching(true);

    // fetch image using camera or gallery
    let result = null;
    if (mode == "gallery") {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
    } else {
      let cameraPermission = await ImagePicker.requestCameraPermissionsAsync({
        allowsEditing: true,
      });
      if (cameraPermission.granted === false) {
        alert("Permission to access camera roll is required!");
        setFetching(false);
        return;
      }
      result = await ImagePicker.launchCameraAsync();
    }

    // set image to formData, view
    if (!!result && !result.cancelled) {
      setImage(result.uri);
      onChange(name, result);
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
        <Text className="flex-1 text-base">{image}</Text>
        <View>
          {fetching ? (
            <ActivityIndicator color={colors.gray[600]} />
          ) : (
            <View className="flex flex-row space-x-1">
              <TouchableOpacity
                onPress={() => pickImage("gallery")}
                className="w-6 h-6"
              >
                <GalleryIcon fill={colors.gray[400]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => pickImage("camera")}
                className="w-6 h-6"
              >
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
