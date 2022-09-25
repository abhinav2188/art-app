import React from "react";
import { Modal, View, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";
import { Close } from "../svgIcons";

const CenterModal = ({
  modalVisible,
  setModalVisible,
  children,
  closeable,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        if (closeable) {
          setModalVisible(!modalVisible);
        }
      }}
    >
      <View className="flex relative flex-1 bg-gray-900/50 items-center justify-center px-4">
        <View className="flex w-full rounded-xl bg-gray-100 items-center overflow-hidden">
          {closeable && (
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="bg-gray-200 w-8 h-8"
            >
              <Close fill={colors.black} />
            </TouchableOpacity>
          )}
          <View className="w-full flex">{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default CenterModal;
