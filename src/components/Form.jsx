import React from "react";
import { Alert, Text, View } from "react-native";
import ActionButton from "./button/ActionButton";
import SubmitButton from "./button/SubmitButton";
import CustomInput from "./CustomInput";

const Form = ({
  fields,
  formData,
  setFormData,
  errors,
  setErrors,
  otherFormValidations,
  onSubmit,
  loading,
  dropdowns,
  reloadDropdown,
  title,
  buttonTitle,
  multipart,
  clazzName,
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
    formField.validateFunc(name, newVal, setError);
  }

  function handleSubmit() {
    const errors = [];
    // check if each form field has no errors
    fields.map(field => {
      const err = field.validateFunc(field.name, formData[field.name], setError);
      console.log(err);
      if(!!err){
        const msg = field.label + " : " + err + "\n";
        errors.push(msg);
      }
    });
    let errorMsg = errors.join("");
    if(!!errorMsg){
      Alert.alert("invalid form data", errorMsg);
      return;
    }
    if(!!otherFormValidations){
      // additional form validations requiring more than one fields
      errorMsg = otherFormValidations();
      if(!!errorMsg) {
        Alert.alert("invalid form data", errorMsg);
        return;
      }
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
          {!!buttonTitle ? buttonTitle : "Submit"}
        </SubmitButton>
      </View>
    </View>
  );
};

export default Form;
