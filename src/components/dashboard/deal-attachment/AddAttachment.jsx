import React, { useState } from "react";
import { Alert } from "react-native";
import { requiredValidation } from "../../../inputValidations";
import { addDealAttachment } from "../../../services/attachmentService";
import Form from "../../Form";

const formFields = [
  {
    label: "Image Name",
    name: "fileName",
    type: "text",
    validateFunc: requiredValidation,
  },
  {
    label: "Image File",
    name: "file",
    type: "image",
    validateFunc: requiredValidation,
  },
];

const initialData = {
  fileName: "",
  file: "",
};

const AddAttachment = ({ dealId, addAttachmentToView, setDisplay , style}) => {
  const [formData, setFormData] = useState(initialData);

  const [errors, setErrors] = useState(initialData);

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    const formDataa = new FormData();
    formDataa.append("file", {
      uri: formData.file.uri,
      name: formData.fileName,
      type: "image/jpeg",
    });

    addDealAttachment(dealId, formDataa)
      .then((response) => {
        console.log("handlesubmit", response);
        if (response) {
          addAttachmentToView(response.data);
        }
        setFormData(initialData);
        setDisplay(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error saving file", JSON.stringify(error));
        Alert.alert("error saving file");
        setLoading(false);
      });
  };

  return (
    <Form
      title="ADD Attachment"
      fields={formFields}
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      loading={loading}
      errors={errors}
      setErrors={setErrors}
      buttonTitle="Save image"
      style={style}
    />
  );
};

export default AddAttachment;
