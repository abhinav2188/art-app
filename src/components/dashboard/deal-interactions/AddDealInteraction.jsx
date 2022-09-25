import React, { useEffect, useState } from "react";
import { meetingDetailsValidation, requiredValidation } from "../../../inputValidations";
import { addDealInteraction } from "../../../services/dealInteractionsService";
import { getDropdownValues } from "../../../services/dropdownService";
import Form from "../../Form";

const formName = "DEAL_INTERACTIONS";

const initialData = {
    meetingDate: "",
    meetingLocation: "",
    meetingDetails: "",
    contacts: "",
    consultants: "",
    handlers: ""
};

const formFields = [
    {
        label: "Meeting Date",
        name: "meetingDate",
        type: "date",
        isTimed: true
    },
    {
        label: "Meeting Location",
        name: "meetingLocation",
        type: "location",
        validateFunc:requiredValidation

    },
    {
        label: "Contacts",
        name: "contacts",
        type: "multi-dropdown",
        dropdownType: "MEETING_CONTACT",
        validateFunc:requiredValidation
    },
    {
        label: "Consultants",
        name: "consultants",
        type: "multi-dropdown",
        dropdownType: "MEETING_CONSULTANT",
        multiple: true
    },
    {
        label: "Handlers",
        name: "handlers",
        type: "multi-dropdown",
        dropdownType: "MEETING_HANDLER",
        validateFunc:requiredValidation
    },
    {
        label: "Meeting Details",
        name: "meetingDetails",
        type: "textArea",
        validateFunc:meetingDetailsValidation
    }
];


const AddDealInteraction = ({ dealId, addInteractionToView, setDisplay, style }) => {

    const [formData, setFormData] = useState(initialData);

    const [dropdowns, setDropdowns] = useState({
        MEETING_CONTACT: {
            values: []
        },
        MEETING_CONSULTANT: {
            values: []
        },
        MEETING_HANDLER: {
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
                if (!!response) {
                    setDropdowns(response.dropdownKeyDetailsMap)
                }
            }
        )
    }, [flag])


    const handleSubmit = () => {
        setLoading(true);
        addDealInteraction(dealId, formData).then(
            response => {
                console.log("handlesubmit", response);
                if (response) {
                    addInteractionToView(response.data);
                }
                setFormData(initialData);
                setDisplay(false);
                setLoading(false);
            }
        )
    }

    return (
        <Form
            title="ADD Deal-Interaction"
            fields={formFields}
            formData={formData}
            dropdowns={dropdowns}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
            reloadDropdown={reloadDropdown}
            errors={errors}
            setErrors={setErrors}
            buttonTitle="add interaction"
            style={style}
        />
    );

}

export default AddDealInteraction;