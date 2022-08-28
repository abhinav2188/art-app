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
    name: "mobile",
    label: "Mobile",
    type: "text",
    inputType: "mobile"
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
];

export default function Register({toggleLogin}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile:"",
    confirmPassword:""
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

  const validateFormData = () => {
    let errors = [];
    if(formData.confirmPassword !== formData.password){
        errors.push("confirm password should be same as password")
    }
    return errors.length > 0 ? errors : null;
  }

  return (
    <View>
      <Form
        fields={formFields}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        loading={loading}
        title="Register New User"
        validateFormData={validateFormData}
      />
      <View className="flex p-4">
      <TouchableOpacity onPress={toggleLogin} className="border border-sky-500 py-4 items-center rounded-lg">
        <Text className="font-bold text-sky-500">Existing User? Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
