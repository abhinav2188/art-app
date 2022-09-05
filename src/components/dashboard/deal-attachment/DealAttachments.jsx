
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getAllDealAttachments } from "../../../services/attachmentService";
import ActionButton from "../../button/ActionButton";
import AddAttachment from "./AddAttachment";
import DeleteAttachment from "./DeleteAttachment";

const DealAttachments = ({ dealId , style}) => {

    const [data, setData] = useState({
        totalCount: 0,
        attachments: []
    });

    useEffect(() => {
        getAllDealAttachments(dealId).then(response => {
            if (response) {
                setData(response.data);
            }
        })
    }, [dealId])

    function addAttachmentToView(attachment) {
        setData(prevState => ({
            ...prevState,
            attachments: [
                attachment,
                ...prevState.attachments
            ]
        }));
    }

    function removeAttachmentFromView(attachmentId) {
        setData(prevState => ({
            ...prevState,
            attachments: prevState.attachments.filter(att => att.id != attachmentId)
        }));
    }

    const [viewAddForm, setViewAddForm] = useState(false);

    return (
        <View className="flex flex-col space-y-4 border rounded-xl px-2" style={style}>
            <View className="flex flex-col">
                <View className="flex flex-row justify-between border-b items-center py-1">
                    <Text>Deal Attachments</Text>
                    <ActionButton type="add" onClick={() => setViewAddForm(true)} />
                </View>
                <View className="flex flex-row flex-wrap gap-2 py-4">
                    {
                        data.attachments.map(attachment =>
                            <View className="border rounded-lg flex items-center">
                                <Text className="px-2">
                                    {attachment.path}
                                    {/* <a className="text-sm text-sky-600" href={attachment.path} target="_blank">{attachment.documentName}</a> */}
                                </Text>
                                {/* <DeleteAttachment attachment={attachment} dealId={dealId}
                                    removeAttachmentFromView={removeAttachmentFromView} /> */}
                            </View>
                        )
                    }
                </View>
            </View>
            <View>
            {
                viewAddForm &&
                <AddAttachment dealId={dealId} addAttachmentToView={addAttachmentToView}
                    setDisplay={setViewAddForm} />
            }

            </View>
        </View>
    );

}

export default DealAttachments;
