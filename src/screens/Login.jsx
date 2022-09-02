import React, { useContext, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Form from "../components/Form";
import UserContext from "../context/UserContext";
import {
  primaryEmailValidation,
  requiredValidation,
} from "../inputValidations";
import { localStorage } from "../localStorage";
import { loginUser } from "../services/authService";

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
    <View className="flex">
      <Form
          fields={formFields}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          onSubmit={handleSubmit}
          loading={loading}
          title="Login User"
          buttonTitle="Login"
      />
      <View className="px-4 py-12">
        <TouchableOpacity
          onPress={toggleRegister}
          className="border border-sky-500 py-4 items-center rounded-lg"
        >
          <Text className="font-bold text-sky-500">New User? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
