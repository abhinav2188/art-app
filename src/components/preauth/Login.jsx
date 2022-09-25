import React, { useContext, useState } from "react";
import { View } from "react-native";
import SubmitButton2 from "../button/SubmitButton2";
import Form from "../Form";
import UserContext from "../../context/UserContext";
import {
  primaryEmailValidation,
  requiredValidation,
} from "../../inputValidations";
import { localStorage } from "../../localStorage";
import { loginUser } from "../../services/authService";

const formFields = [
  {
    name: "email",
    label: "Email",
    type: "text",
    inputType: "email",
    description: "enter your email address!",
    validateFunc: primaryEmailValidation,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    description: "enter your password!",
    validateFunc: requiredValidation,
  },
];

export default function Login({ toggleRegister }) {
  const userContext = useContext(UserContext);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    loginUser(formData).then((response) => {
      console.log(response);
      setLoading(false);
      if (!!response.data) {
        userContext.setUser(response.data);
        localStorage.storeData("userDetails", response.data);
        setFormData({
          email: "",
          password: "",
        });
      }
    });
  };

  return (
    <View className="flex pt-4 pb-8 space-y-4 px-2 border rounded-t-xl border-gray-400">
      <Form
        fields={formFields}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        onSubmit={handleSubmit}
        loading={loading}
        buttonTitle="Login"
        className="border-0"
      />
      <View className="px-2">
        <SubmitButton2 onClick={toggleRegister}>
          New User? Register
        </SubmitButton2>
        {/* <TouchableOpacity
          onPress={toggleRegister}
          className="border border-sky-500 py-4 items-center rounded-lg"
        >
          <Text className="font-bold text-sky-500"></Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
