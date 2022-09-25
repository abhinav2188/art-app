import React from "react";
import { Modal, View, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";
import { Close } from "../svgIcons";

const BottomModal = ({
  modalVisible,
  setModalVisible,
  children,
  closeable,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        if (closeable) {
          setModalVisible(!modalVisible);
        }
      }}
    >
      <View className="flex w-full rounded-t-xl bg-gray-100 absolute bottom-0 items-center">
        {closeable && (
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            className="bg-gray-200 w-8 h-8 self-end mr-2"
          >
            <Close fill={colors.black} />
          </TouchableOpacity>
        )}
        <View className="w-full flex">{children}</View>
      </View>
    </Modal>
  );
};

export default BottomModal;
