import React from "react";
import DateInput from "./input/DateInput";
import NativeTextArea from "./input/NativeTextArea";
import NativeTextInput from "./input/NativeTextInput";
import NativeTextPassword from "./input/NativeTextPassword";
import SelectInput from "./input/SelectInput";

const CustomInput = ({
  field,
  value,
  errorMsg,
  dropdowns,
  handleChange,
  clazzName,
  style,
}) => {
  switch (field.type) {
    case "text":
      return (
        <NativeTextInput
          name={field.name}
          label={field.label}
          description={field.description}
          inputType={field.inputType}
          value={value}
          errorMsg={errorMsg}
          onChange={handleChange}
          clazzName={clazzName}
          style={style}
        />
      );
    case "password":
      return (
        <NativeTextPassword
          name={field.name}
          label={field.label}
          description={field.description}
          value={value}
          errorMsg={errorMsg}
          onChange={handleChange}
          clazzName={clazzName}
          style={style}
        />
      );
    case "dropdown":
      return (
        <SelectInput
          name={field.name}
          label={field.label}
          description={field.description}
          optionsList={dropdowns[field.dropdownType].values}
          value={value}
          errorMsg={errorMsg}
          onChange={handleChange}
          clazzName={clazzName}
          style={style}
        />
      );
    case "textArea":
      return (
        <NativeTextArea
          name={field.name}
          label={field.label}
          description={field.description}
          value={value}
          errorMsg={errorMsg}
          onChange={handleChange}
          clazzName={clazzName}
          style={style}
        />
      );
    case "date":
      return (
        <DateInput
          name={field.name}
          label={field.label}
          description={field.description}
          value={value}
          errorMsg={errorMsg}
          onChange={handleChange}
          clazzName={clazzName}
          style={style}
        />
      );
  }
};

export default CustomInput;

// case "dropdown2":
//     return (
//         <SelectInput label={field.label} name={field.name} onChange={handleChange}
//             optionsList={dropdowns[field.dropdownType].values}
//             value={value} />
//     );
// case "boolean":
//     return (
//         <BoolSelectInput label={field.label} name={field.name} onChange={handleChange} value={value} />
//     );
// case "number":
//     return (
//         <NumberInput label={field.label} name={field.name} onChange={handleChange} value={value} />
//     );
// case "file":
//     return (
//         <FileInput label={field.label} name={field.name} onChange={handleChange2} accept={field.accept} />
//     );
