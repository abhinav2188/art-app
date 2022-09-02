import React, { useEffect } from "react";
import { Alert, Text, View } from "react-native";
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

    <View className="rounded-xl flex flex-col gap-y-4" style={style}>

      <FormTitle Icon={Star}>
        <View className="flex flex-row items-center gap-x-2">
          <Text className="text-lg font-bold text-white uppercase">
            {title}
          </Text>
          <View>
            {!!reloadDropdown && (
              <ActionButton type="reload" onClick={reloadDropdown} />
            )}
          </View>
        </View>
      </FormTitle>

      <View className={`flex flex-col gap-y-4 px-4`}>
        {fields.map((field) => (
          <CustomInput
            key={field.name}
            field={field}
            handleChange={handleChange}
            value={formData[field.name]}
            errorMsg={errors[field.name]}
            dropdowns={dropdowns}
          />
        ))}
      </View>

      <View className="px-4">
        <SubmitButton onClick={handleSubmit} loading={loading}>
          {!!buttonTitle ? buttonTitle : "Submit"}
        </SubmitButton>
      </View>

    </View>

  );
};

export default Form;
