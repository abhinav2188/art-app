import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import { requiredValidation } from "../../../inputValidations";
import { getDropdownValues } from "../../../services/dropdownService";
import { addDealQuery } from "../../../services/queryService";

const formName = "BROCHURES_QUERY";

const initialData = {
    brochures: "",
    recipients: ""
};

const formFields = [
    {
        label: "Recipients",
        name: "recipients",
        type: "multi-dropdown",
        dropdownType: "DEAL_RECIPIENTS",
        validateFunc:requiredValidation
    },
    {
        label: "Brochures",
        name: "brochures",
        type: "multi-dropdown",
        dropdownType: "BROCHURES_TYPE",
        validateFunc:requiredValidation
    }
];


const AddDealQuery = ({ dealId, setDisplay, style }) => {

    const [formData, setFormData] = useState(initialData);

    const [dropdowns, setDropdowns] = useState({
        BROCHURES_TYPE: {
            values: []
        },
        DEAL_RECIPIENTS: {
            values: []
        }
    });

    const [errors, setErrors] = useState(initialData);

    const [loading, setLoading] = useState(false);

    const [flag, setFlag] = useState(true);

    const reloadDropdown = () => setFlag(f => !f);

    useEffect(() => {
        getDropdownValues(null, formName, dealId).then(
            response => {
                if (response) {
                    setDropdowns(response.dropdownKeyDetailsMap)
                }
            }
        )
    }, [flag])


    const handleSubmit = () => {
        setLoading(true);
        addDealQuery(dealId, formData).then(
            response => {
                console.log("handlesubmit", response);
                if (!!response) {
                }
                setFormData(initialData);
                setDisplay(false);
                setLoading(false);
            }
        )
    }

    return (
        <Form
            title="SEND Deal-Query"
            fields={formFields}
            formData={formData}
            dropdowns={dropdowns}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
            reloadDropdown={reloadDropdown}
            errors={errors}
            setErrors={setErrors}
            buttonTitle="send query"
            style={style}
        />
    );

}

export default AddDealQuery;