import React, { useEffect, useState } from "react";
import { View } from "react-native";
import colors from "tailwindcss/colors";
import {
  emailValidation,
  mobileValidation,
  requiredValidation,
} from "../../inputValidations";
import { getDropdownValues } from "../../services/dropdownService";
import { postParty } from "../../services/partyService";
import { Document, Done, LeftArrow } from "../../svgIcons";
import GoBackButton from "../button/GoBackButton";
import MenuButton from "../button/MenuButton";
import SubmitButton2 from "../button/SubmitButton2";
import Form from "../Form";

const formFields = [
  {
    name: "partyName",
    label: "Party Name",
    type: "text",
    validateFunc: requiredValidation,
  },
  {
    name: "address",
    label: "Address",
    type: "text",
  },
  {
    name: "authority",
    label: "Authority",
    type: "dropdown",
    dropdownType: "AUTHORITY_TYPE",
    description: "Any Govt or private Authority to which Party belongs",
    validateFunc: requiredValidation,
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    validateFunc: emailValidation,
  },
  {
    name: "mobile",
    label: "Mobile",
    type: "text",
    validateFunc: mobileValidation,
  },
];

const initialData = {
  partyName: "",
  address: "",
  authority: "",
  mobile: "",
  email: "",
};

const AddParty = ({ navigation }) => {
  const [formData, setFormData] = useState(initialData);
  const [dropdowns, setDropdowns] = useState({
    AUTHORITY_TYPE: {
      values: [],
    },
  });
  const [errors, setErrors] = useState(initialData);

  const [flag, setFlag] = useState(true);

  const reloadDropdown = () => setFlag((f) => !f);

  useEffect(() => {
    getDropdownValues(null, "PARTY_DETAILS", null).then((response) => {
      if (response) {
        setDropdowns(response.dropdownKeyDetailsMap);
      }
    });
  }, [flag]);

  let [loading, setLoading] = useState(false);

  function handleSubmit() {
    setLoading(true);
    postParty(formData).then((response) => {
      console.log(response);
      if (!!response) {
        console.log(response.data);
        setViewForm(false);
      }
      setLoading(false);
      setFormData(initialData);
    });
  }

  const [viewForm, setViewForm] = useState(true);

  return (
    <View className="flex p-4 space-y-4">
      <GoBackButton navigation={navigation} />
      {viewForm ? (
        <Form
          title="ADD New Party"
          fields={formFields}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          onSubmit={handleSubmit}
          loading={loading}
          dropdowns={dropdowns}
          reloadDropdown={reloadDropdown}
          className="border border-gray-400"
        />
      ) : (
        <View className="flex border border-gray-400 px-2 py-4 space-y-4 rounded-xl items-center">
          <View className="w-24 h-24">
            <Done fill={colors.sky[800]} />
          </View>
          <SubmitButton2 onClick={() => setViewForm(true)} className="w-full">
            Add more
          </SubmitButton2>
        </View>
      )}
      <MenuButton
        title1="Add deal"
        onPress={() => navigation.navigate("addDeal")}
        Icon={Document}
      />
    </View>
  );
};

export default AddParty;
