import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import ImageView from "react-native-image-viewing";

const ImageGallery = ({ images, style }) => {
  const [visible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageClick = (idx) => {
    setCurrentIndex(idx);
    setIsVisible(true);
  };

  return (
    <View className="flex w-full" style={style}>
      <View className="flex flex-row flex-wrap w-full border border-gray-400 rounded-xl p-2">
        {images.map((image, idx) => (
          <TouchableOpacity onPress={() => imageClick(idx)} className="w-1/2 flex p-2">
            <Image
              source={{ uri: image.uri }}
              className="w-full h-32 rounded-xl"
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
      <ImageView
        images={images}
        imageIndex={currentIndex}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </View>
  );
};

export default ImageGallery;
