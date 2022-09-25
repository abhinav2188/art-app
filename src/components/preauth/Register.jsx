import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SubmitButton2 from "../button/SubmitButton2";
import Form from "../Form";
import {
  mobileValidation,
  passwordValidation,
  primaryEmailValidation,
  requiredValidation,
} from "../../inputValidations";
import { registerUser } from "../../services/authService";

const initialState = {
  email: "",
  password: "",
  mobile: "",
  confirmPassword: "",
};

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
    name: "mobile",
    label: "Mobile",
    type: "text",
    inputType: "mobile",
    description: "enter your mobile!",
    validateFunc: mobileValidation,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    description: "enter your password!",
    validateFunc: passwordValidation,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    description: "Confirm password, should be same as Password!",
    validateFunc: requiredValidation,
  },
];

export default function Register({ toggleLogin }) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const otherFormValidations = () => {
    let errors = [];
    if (formData.confirmPassword !== formData.password) {
      errors.push("confirm password should be same as password");
    }
    return errors.length > 0 ? errors.join(",") : null;
  };

  const handleSubmit = () => {
    setLoading(true);
    registerUser(formData).then((isSuccess) => {
      console.log(isSuccess);
      setLoading(false);
      if (isSuccess) {
        alert("login again with the credentials");
        setFormData(initialState);
      }
    });
  };

  return (
    <View className="flex pt-4 pb-8 space-y-4 px-2 border rounded-t-xl border-gray-400">
      <Form
        fields={formFields}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        loading={loading}
        errors={errors}
        setErrors={setErrors}
        otherFormValidations={otherFormValidations}
        buttonTitle="Register"
        buttonIcon
        className="border-0"
      />
      <View className="px-2">
        <SubmitButton2 onClick={toggleLogin}>
          Existing User? Login
        </SubmitButton2>
      </View>
    </View>
  );
}
