import React, { useEffect } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { Star } from "../svgIcons";
import ActionButton from "./button/ActionButton";
import SubmitButton from "./button/SubmitButton";
import CustomInput from "./CustomInput";
import FormTitle from "./FormTitle";

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
  style,
}) => {
  useEffect(() => {
    console.log("form loaded");
  }, []);

  // function to set field error
  const setError = (name, errorMsg) => {
    setErrors((prevData) => ({
      ...prevData,
      [name]: errorMsg,
    }));
  };

  // function to handle input change and call validate function
  function handleChange(name, newVal) {
    setFormData((prevData) => ({
      ...prevData,
      [name]: newVal,
    }));
    // validate field data
    let formField = fields.filter((field) => field.name === name)[0];
    if (!!formField.validateFunc) {
      formField.validateFunc(name, newVal, setError);
    }
  }

  // function to handle form submit
  function handleSubmit() {
    // form data validationss
    const errors = [];
    // check if each form field has no errors
    fields.map((field) => {
      if(!!!field.validateFunc) return;
      const err = field.validateFunc(
        field.name,
        formData[field.name],
        setError
      );
      console.log(err);
      if (!!err) {
        const msg = field.label + " : " + err + "\n";
        errors.push(msg);
      }
    });
    let errorMsg = errors.join("");
    if (!!errorMsg) {
      Alert.alert("invalid form data", errorMsg);
      return;
    }
    // additional form validations requiring more than one fields
    if (!!otherFormValidations) {
      errorMsg = otherFormValidations();
      if (!!errorMsg) {
        Alert.alert("invalid form data", errorMsg);
        return;
      }
    }
    // onSubmit
    onSubmit();
  }

  return (

    <View className="rounded-xl space-y-4 flex flex-col border border-gray-400 pb-4" style={style}>

      {
        !!title &&
      <View className="border-b border-gray-400 p-2">
        <View className="flex flex-row items-center gap-x-2">
          <Text className="text-lg font-light capitalize">
            {title}
          </Text>
          <View>
            {!!reloadDropdown && (
              <ActionButton type="reload" onClick={reloadDropdown} />
            )}
          </View>
        </View>
      </View>
      }

      <View className="flex flex-col gap-y-4 px-2">
        {fields.map((field) => (
          <CustomInput
            key={field.name}
            field={field}
            handleChange={handleChange}
            value={formData[field.name]}
            errorMsg={!!errors ? errors[field.name] : ""}
            dropdowns={dropdowns}
          />
        ))}
      </View>

      <View className="px-2">
        <SubmitButton onClick={handleSubmit} loading={loading}>
          {!!buttonTitle ? buttonTitle : "Submit"}
        </SubmitButton>
      </View>

    </View>

  );
};

export default Form;
