import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";
import { Close } from "../svgIcons";

const CenterModal = ({modalVisible, setModalVisible, children, closeable}) => {

  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          if(closeable){
            setModalVisible(!modalVisible);
          }
        }}
      >
        <View className="flex relative flex-1 bg-gray-900/50 items-center justify-center px-4">
        <View className="flex w-full rounded-xl bg-gray-100 items-center">
          {
            closeable &&
        <TouchableOpacity onPress={() => setModalVisible(false)} className="bg-gray-200 w-8 h-8">
          <Close fill={colors.black}/>
          </TouchableOpacity>
          }
          <View className="w-full flex">
            {children}
          </View>
        </View>

        </View>

      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default CenterModal;