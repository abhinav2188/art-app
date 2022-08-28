import React from "react";
import NativeTextInput from "./input/NativeTextInput";
import NativeTextPassword from "./input/NativeTextPassword";

const CustomInput = ({ field, value, handleChange, dropdowns, clazzName, errorMsg }) => {
  switch (field.type) {
    case "text":
      return (
        <NativeTextInput
          label={field.label}
          name={field.name}
          onChange={handleChange}
          value={value}
          inputType={field.inputType}
          clazzName={clazzName}
          description={field.description}
          errorMsg={errorMsg}
        />
      );
    case "password":
      return (
        <NativeTextPassword
        label={field.label}
        name={field.name}
        onChange={handleChange}
        value={value}
        clazzName={clazzName}
        description={field.description}
        errorMsg={errorMsg}
      />
      );
    // case "date":
    //     return (
    //         <DateInput label={field.label} name={field.name} onChange={handleChange} value={value} />
    //     );
    // case "dropdown2":
    //     return (
    //         <SelectInput label={field.label} name={field.name} onChange={handleChange}
    //             optionsList={dropdowns[field.dropdownType].values}
    //             value={value} />
    //     );
    // case "dropdown":
    //     return (
    //         <SelectInput2 label={field.label} name={field.name} onChange={handleChange2}
    //             optionsList={dropdowns[field.dropdownType].values}
    //             value={value} multiple={field.multiple} />
    //     );
    // case "boolean":
    //     return (
    //         <BoolSelectInput label={field.label} name={field.name} onChange={handleChange} value={value} />
    //     );
    // case "textArea":
    //     return (
    //         <TextAreaInput label={field.label} name={field.name} onChange={handleChange} value={value} />
    //     );
    // case "number":
    //     return (
    //         <NumberInput label={field.label} name={field.name} onChange={handleChange} value={value} />
    //     );
    // case "file":
    //     return (
    //         <FileInput label={field.label} name={field.name} onChange={handleChange2} accept={field.accept} />
    //     );
  }
};

export default CustomInput;
