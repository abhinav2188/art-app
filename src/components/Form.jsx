import React from "react";
import { Text, View } from "react-native";
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
}) => {

  function handleChange(name, newVal) {
    setFormData((prevData) => ({
      ...prevData,
      [name]: newVal,
    }));
  }

  return (
    <View className="flex flex-col w-full rounded-xl p-4">
      <View className="flex mb-3 border-b border-gray-400">
        <Text className="text-lg font-bold text-gray-800 uppercase">{title}</Text>
        {!!reloadDropdown && (
          <ActionButton type="reload" onClick={reloadDropdown} />
        )}
      </View>
      <View className={`flex flex-col ${clazzName}`}>
        {fields.map((field) => (
          <CustomInput
            field={field}
            value={formData[field.name]}
            handleChange={handleChange}
            dropdowns={dropdowns}
            clazzName="py-2"
          />
        ))}
        <SubmitButton clazzName="mt-4" onClick={onSubmit} loading={loading}>
          Submit
        </SubmitButton>
      </View>
    </View>
  );
};

export default Form;
