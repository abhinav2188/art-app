import React, { useState } from "react";
import { Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import Form from "../components/Form";

const formFields = [
  {
    name: "email",
    label: "Email",
    type: "text",
    inputType: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

export default function Login({toggleRegister}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(formData);
      alert(new String(formData));
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
      />
      <View className="flex p-4">
      <TouchableOpacity onPress={toggleRegister} className="border border-sky-500 py-4 items-center rounded-lg">
        <Text className="font-bold text-sky-500">New User? Register</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
