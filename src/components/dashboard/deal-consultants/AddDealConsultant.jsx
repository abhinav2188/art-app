import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import { primaryEmailValidation, requiredMobileValidation, requiredValidation } from "../../../inputValidations";
import { addDealConsultant } from "../../../services/consultantService";
import { getDropdownValues } from "../../../services/dropdownService";

const formName = "DEAL_CONSULTANTS";

const formFields = [
    {
        label: "Full Name",
        name: "name",
        type: "text",
        validateFunc: requiredValidation
    },
    {
        label: "Email",
        name: "email",
        type: "text",
        inputType:"email",
        validateFunc: primaryEmailValidation
    },
    {
        label: "Mobile",
        name: "mobile",
        type: "text",
        inputType:"integer",
        validateFunc: requiredMobileValidation
    },
    {
        label: "Designation",
        name: "designation",
        type: "dropdown",
        dropdownType: "CONSULTANT_DESIGNATION"
    }
]

const initialData = {
    name: "",
    email: "",
    mobile: "",
    designation: ""
};

const AddDealConsultant = ({ dealId, addConsultantToView, setDisplay }) => {

    const [formData, setFormData] = useState(initialData);

    const [errors, setErrors] = useState(initialData);

    const [dropdowns, setDropdowns] = useState({
        CONSULTANT_DESIGNATION: {
            values: []
        }
    });

    const [flag, setFlag] = useState(true);

    const reloadDropdown = () => setFlag(f => !f);

    useEffect(() => {
        getDropdownValues(null, formName, dealId).then(
            response => {
                if (response) {
                    console.log(response.dropdownKeyDetailsMap);
                    setDropdowns(response.dropdownKeyDetailsMap)
                }
            }
        )
    }, [flag])

    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        addDealConsultant(dealId, formData).then(
            response => {
                console.log("handlesubmit", response);
                if (response) {
                    addConsultantToView(response.data);
                }
                setFormData(initialData);
                setDisplay(false);
                setLoading(false);
            }
        )
    }

    return (
        <Form
            title="ADD Deal-Consultant"
            fields={formFields}
            formData={formData}
            dropdowns={dropdowns}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
            reloadDropdown={reloadDropdown}
            errors={errors}
            setErrors={setErrors}
            buttonTitle="Add Consultant"
        />
    );

}

export default AddDealConsultant;