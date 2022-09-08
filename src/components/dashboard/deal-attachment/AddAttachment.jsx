import React, { useState } from "react";
import { addDealAttachment } from "../../../services/attachmentService";
import Form from "../../Form";

const formFields = [
    {
        label: "Image File",
        name: "file",
        type: "image"
    }
]

const initialData = {
    file: ""
};

const AddAttachment = ({ dealId, addAttachmentToView, setDisplay }) => {

    const [formData, setFormData] = useState(initialData);

    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        const formDataa = new FormData();
        formDataa.append('file',formData.file);
        setLoading(true);
        addDealAttachment(dealId, formDataa).then(
            response => {
                console.log("handlesubmit", response);
                if (response) {
                    addAttachmentToView(response.data);
                }
                setFormData(initialData);
                setDisplay(false);
                setLoading(false);
            }
        ).catch(error => {
            console.log("error saving file",JSON.stringify(error));
            setLoading(false);
        })
    }

    return (

        <Form
            title="ADD Deal Attachment"
            fields={formFields}
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
            buttonTitle="Save image"
        />

    );

}

export default AddAttachment;
