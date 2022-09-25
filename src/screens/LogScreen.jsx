import React, { useContext, useEffect, useState } from "react";
import { Image, View } from "react-native";
import BottomModal from "../components/BottomModal";
import Login from "./Login";
import Register from "./Register";
import logo from "../../assets/icon.png";
import UserContext from "../context/UserContext";

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
    <View className="flex-1 flex bg-sky-800 rounded-t-2xl">
      <Image
        source={logo}
        className="w-24 h-24 self-center rounded-lg mt-12 shadow"
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
