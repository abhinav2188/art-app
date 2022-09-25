import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { requiredValidation } from "../../../inputValidations";
import { postDeal } from "../../../services/dealService";
import { getDropdownValues } from "../../../services/dropdownService";
import Form from "../../Form";
import ViewDetails from "../../ViewDetails";

const formName = "PARTY_DEAL";

const formFields = [
  {
    label: "Party Name",
    name: "partyName",
    type: "dropdown",
    dropdownType: "PARTY",
    validateFunc: requiredValidation,
  },
  {
    label: "Deal Name",
    name: "dealName",
    type: "text",
    validateFunc: requiredValidation,
  },
];

const viewFields = [
  {
    label: "Party Name",
    name: "partyName",
  },
  {
    label: "Deal Name",
    name: "dealName",
  },
];

const initialData = {
  partyName: "",
  dealName: "",
  dealId: "",
};

const DealSection1 = ({
  dealId,
  setDealId,
  setDealDetails,
  data,
  edit,
  reloadDealButton,
  style,
}) => {
  const [formData, setFormData] = useState(initialData);

  const [errors, setErrors] = useState(initialData);

  const [dropdowns, setDropdowns] = useState({
    PARTY: {
      values: [],
    },
  });

  const [flag, setFlag] = useState(true);

  const reloadDropdown = () => setFlag((f) => !f);

  useEffect(() => {
    if (!!data) {
      setFormData(data);
    }
  }, [data]);

  useEffect(() => {
    getDropdownValues(null, formName, null).then((response) => {
      if (response) {
        console.log(response.dropdownKeyDetailsMap);
        setDropdowns(response.dropdownKeyDetailsMap);
      }
    });
  }, [flag]);

  let [loading, setLoading] = useState(false);

  let [editMode, setEditMode] = useState(edit);

  function submitAddDealForm() {
    setLoading(true);
    postDeal(formData).then((response) => {
      console.log(response);
      if (response) {
        setDealDetails((prevState) => ({
          ...prevState,
          cardDetails: response.data,
        }));
      }
      setLoading(false);
      setDealId(response.data.dealId);
      setEditMode(false);
    });
  }

  const actions = <View className="flex">{reloadDealButton}</View>;

  return !!!dealId ? (
    <Form
      title="Create Deal"
      fields={formFields}
      formData={formData}
      setFormData={setFormData}
      dropdowns={dropdowns}
      onSubmit={submitAddDealForm}
      loading={loading}
      reloadDropdown={reloadDropdown}
      errors={errors}
      setErrors={setErrors}
      buttonTitle="create deal"
      style={style}
    />
  ) : (
    <ViewDetails
      viewFields={viewFields}
      title={`Deal #${data.dealId}`}
      data={data}
      actions={actions}
      style={style}
    />
  );
};

export default DealSection1;
