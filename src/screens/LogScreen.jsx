import React, { useState } from "react";
import { Image, View } from "react-native";
import BottomModal from "../components/BottomModal";
import Login from "../components/preauth/Login";
import logo from "../../assets/logo.png";
import { StatusBar } from "expo-status-bar";
import Register from "../components/preauth/Register";

function LogScreen({ navigation }) {
  const [viewLogin, setViewLogin] = useState(true);
  const [viewRegister, setViewRegister] = useState(false);

  function toggleRegister() {
    setViewLogin(false);
    setViewRegister(true);
  }

  function toggleLogin() {
    setViewRegister(false);
    setViewLogin(true);
  }

  return (
 <View className="flex-1 flex bg-blue-art rounded-t-2xl" >
    <StatusBar style="auto" />
      <Image
        source={logo}
        className="h-24 w-24 self-center rounded-lg mt-24 shadow"
        resizeMode="contain"
      />
      <View>
        <BottomModal
          modalVisible={viewLogin}
          setModalVisible={setViewLogin}
          closeable={false}
        >
          <Login toggleRegister={toggleRegister} />
        </BottomModal>
        <BottomModal
          modalVisible={viewRegister}
          setModalVisible={setViewRegister}
          closeable={false}
        >
          <Register toggleLogin={toggleLogin} />
        </BottomModal>
      </View>
    </View>
  );
}

export default LogScreen;
