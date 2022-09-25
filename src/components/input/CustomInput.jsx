import React from "react";
import DateInput from "./DateInput";
import ImageInput from "./ImageInput";
import LocationInput from "./LocationInput";
import MultipleSelectInput from "./MultiSelectInput";
import NativeTextArea from "./NativeTextArea";
import NativeTextInput from "./NativeTextInput";
import NativeTextPassword from "./NativeTextPassword";
import SelectInput from "./SelectInput";

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
        <MultipleSelectInput
          name={field.name}
          label={field.label}
          description={field.description}
          optionsList={dropdowns[field.dropdownType].values}
          value={value}
          errorMsg={errorMsg}
          onChange={handleChange}
          clazzName={clazzName}
          style={style}
          single={true}
        />
      );
    case "multi-dropdown":
      return (
        <MultipleSelectInput
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
          isTimed={field.isTimed}
        />
      );
    case "location":
      return (
        <LocationInput
          {...field}
          value={value}
          errorMsg={errorMsg}
          onChange={handleChange}
          clazzName={clazzName}
          style={style}
        />
      );
    case "image":
      return (
        <ImageInput
          {...field}
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
