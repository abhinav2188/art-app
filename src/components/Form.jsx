import React from "react";
import { Alert, Text, View } from "react-native";
import ActionButton from "./button/ActionButton";
import SubmitButton from "./button/SubmitButton";
import CustomInput from "./CustomInput";

const Form = ({
  clazzName,
  fields,
  setFormData,
  onSubmit,
  formData,
  loading,
  dropdowns,
  multipart,
  title,
  reloadDropdown,
  validateFormData,
  errors,
  setErrors,
}) => {

  const setError = (name, errorMsg) => {
    // set field error
    setErrors((prevData) => ({
      ...prevData,
      [name]: errorMsg,
    }));
  };

  function handleChange(name, newVal) {
    // set field data
    setFormData((prevData) => ({
      ...prevData,
      [name]: newVal,
    }));
    // validate field data
    let formField = fields
    .filter((field) => field.name === name)[0];
    console.log(formField);
    console.log(formField[name]);
    formField.validateFunc(name, newVal, setError);
  }

  function handleSubmit() {
    // check if each form field has no errors
    const errorMsg = "";
    for(const field in formData){
        if(!!errors[field]) errorMsg.concat(errors[field]+", ")
    }
    if(!!errorMsg){
      Alert.alert("invalid form data", errorMsg);
      return;
    }
    // onSubmit 
    onSubmit();
  }

  return (
    <View className="flex flex-col w-full rounded-xl p-4">
      <View className="flex mb-3 border-b border-gray-400">
        <Text className="text-lg font-bold text-gray-800 uppercase">
          {title}
        </Text>
        {!!reloadDropdown && (
          <ActionButton type="reload" onClick={reloadDropdown} />
        )}
      </View>
      <View className={`flex flex-col ${clazzName}`}>
        {fields.map((field) => (
          <CustomInput
            key={field.name}
            field={field}
            value={formData[field.name]}
            handleChange={handleChange}
            dropdowns={dropdowns}
            clazzName="py-2"
            errorMsg={errors[field.name]}
          />
        ))}
        <SubmitButton clazzName="mt-4" onClick={handleSubmit} loading={loading}>
          Submit
        </SubmitButton>
      </View>
    </View>
  );
};

export default Form;
