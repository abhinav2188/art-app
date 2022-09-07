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
        // event.preventDefault();
        const formDataa = new FormData();
        // data.append('photo', {
        //     name: photo.fileName,
        //     type: photo.type,
        //     uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
        //   });        
        //   formDataa.append("file", {
        //     name: 'D'+dealId+'attachment',
        //     type: formData.file.type,
        //     uri: formData.file.uri,
        //   });
        console.log("formData.file",formData.file);
        formDataa.append('name',"abhinav");
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
            multipart
        />

    );

}

export default AddAttachment;
