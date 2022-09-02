import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { emailValidation, mobileValidation, primaryEmailValidation, requiredValidation } from "../../inputValidations";
import { getDropdownValues } from "../../services/dropdownService";
import { postParty } from "../../services/partyService";
import Form from "../Form";

const formFields = [
    {
        name: "partyName",
        label: "Party Name",
        type: "text",
        validateFunc: requiredValidation
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
        validateFunc: requiredValidation
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
    }
]

const initialData = {
    partyName: "",
    address: "",
    authority: "",
    mobile: "",
    email: ""
}

const AddParty = ({ navigation }) => {

    const [formData, setFormData] = useState(initialData);
    const [dropdowns, setDropdowns] = useState({
        AUTHORITY_TYPE: {
            values: []
        }
    });
    const [errors, setErrors] = useState(initialData);

    const [flag, setFlag] = useState(true);

    const reloadDropdown = () => setFlag(f => !f);

    useEffect(() => {
        getDropdownValues(null, "PARTY_DETAILS", null).then(
            response => {
                if (response) {
                    setDropdowns(response.dropdownKeyDetailsMap)
                }
            }
        )
    }, [flag])

    let [loading, setLoading] = useState(false);

    function handleSubmit() {
        setLoading(true);
        postParty(formData).then(response => {
            console.log(response);
            if (!!response) {
                console.log(response.data);
            }
            setLoading(false);
            setFormData(initialData);
        })
    }

    return (
        <View className="flex py-8 px-4">
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
        </View>
    );
}

  export default AddParty;