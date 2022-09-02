import React, { useState } from "react";
import {
  Alert,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import Form from "../components/Form";
import {
  mobileValidation,
  passwordValidation,
  primaryEmailValidation,
  requiredValidation,
} from "../inputValidations";
import { registerUser } from "../services/authService";

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
    <View>
      <Form
        fields={formFields}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        loading={loading}
        title="Register New User"
        errors={errors}
        setErrors={setErrors}
        otherFormValidations={otherFormValidations}
        buttonTitle="Register"
        buttonIcon
      />
      <View className="flex px-4 py-12">
        <TouchableOpacity
          onPress={toggleLogin}
          className="border border-sky-500 py-4 items-center rounded-lg"
        >
          <Text className="font-bold text-sky-500">Existing User? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
