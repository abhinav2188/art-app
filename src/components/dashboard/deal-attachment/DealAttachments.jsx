import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getAllDealAttachments } from "../../../services/attachmentService";
import ActionButton from "../../button/ActionButton";
import SectionHeader from "../../SectionHeader";
import AddAttachment from "./AddAttachment";
import ImageGallery from "../../ImageGallery";
import GoBackButton from "../../button/GoBackButton";
import { ScrollView } from "react-native-gesture-handler";

const DealAttachments = ({ route, navigation, style }) => {
  const [data, setData] = useState({
    totalCount: 0,
    attachments: [],
  });

  const [dealId, setDealId] = useState(route.params.dealId);

  const [images, setImages] = useState([]);

  const [flag, setFlag] = useState(false);

  const [loading, setLoading] = useState(false);

  const [viewAddForm, setViewAddForm] = useState(false);

  useEffect(() => {
    setDealId(route.params.dealId);
  }, [route.params.dealId]);

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
  useEffect(() => {
    let uris = data.attachments.map((attachment) => ({
      uri: attachment.path,
    }));
    setImages(uris);
  }, [data]);

  function addAttachmentToView(attachment) {
    setData((prevState) => ({
      ...prevState,
      totalCount: prevState.totalCount + 1,
      attachments: [attachment, ...prevState.attachments],
    }));
  }

  return (
    <ScrollView>
      <View className="flex space-y-4 p-4" style={style}>
        <GoBackButton navigation={navigation} />

        <SectionHeader
          title="Attachments"
          totalCount={data.totalCount}
          actions={[
            <ActionButton
              type="add"
              onClick={() => setViewAddForm((f) => !f)}
            />,
            <ActionButton
              type="reload"
              loading={loading}
              onClick={() => setFlag((f) => !f)}
            />,
          ]}
        />
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
    </ScrollView>
  );
};

export default DealAttachments;
