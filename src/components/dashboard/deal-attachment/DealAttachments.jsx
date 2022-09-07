import React, { useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { getAllDealAttachments } from "../../../services/attachmentService";
import ActionButton from "../../button/ActionButton";
import SectionHeader from "../../SectionHeader";
import AddAttachment from "./AddAttachment";
import ImageView from "react-native-image-viewing";
import ImageGallery from "../../ImageGallery";

const DealAttachments = ({ dealId, style }) => {

    const [data, setData] = useState({
    totalCount: 0,
    attachments: [],
  });

  const [images,setImages] = useState([]);
  
  const [flag, setFlag] = useState(false);
  
  const [loading, setLoading] = useState(false);
  
  const [viewAddForm, setViewAddForm] = useState(false);
  
  // fn to load data
  useEffect(() => {
    setLoading(true);
    getAllDealAttachments(dealId).then((response) => {
      if (response) {
        setData(response.data);
      }
      setLoading(false);
    });
  }, [dealId, flag]);

  // data to images format for ImageViewer
  useEffect(()=>{
    let uris = data.attachments.map(attachment => ({
        uri:attachment.path
    }));
    setImages(uris);
  },[data])

  function addAttachmentToView(attachment) {
    setData((prevState) => ({
      ...prevState,
      totalCount:prevState.totalCount+1,
      attachments: [attachment, ...prevState.attachments],
    }));
  }


  return (
    <View
      className="flex flex-col space-y-4"
      style={style}
    >
        <SectionHeader title="Attachments" totalCount={data.totalCount} actions={[
            <ActionButton type="add" onClick={() => setViewAddForm(f=>!f)} />,
            <ActionButton
              type="reload"
              loading={loading}
              onClick={() => setFlag((f) => !f)}
            />,
        ]}/>
        <ImageGallery images={images} />
      <View>
        {viewAddForm && (
          <AddAttachment
            dealId={dealId}
            addAttachmentToView={addAttachmentToView}
            setDisplay={setViewAddForm}
          />
        )}
      </View>
    </View>
  );
};

export default DealAttachments;
