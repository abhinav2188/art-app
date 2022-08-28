import React, { useState } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { alertMsgs } from "../alertMsgs";
import Form from "../components/Form";
import { primaryEmailValidation, requiredValidation } from "../inputValidations";


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
      setTimeout(() => {
        setLoading(false);
        alert(JSON.stringify(formData));
      }, 2000);
  };

  return (
    <View>
      <Form
        fields={formFields}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        loading={loading}
        title="Login User"
        errors={errors}
        setErrors={setErrors}
        buttonTitle="Login"
      />
      <View className="flex p-4">
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
