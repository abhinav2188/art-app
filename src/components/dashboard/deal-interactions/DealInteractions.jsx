import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import ActionButton from "../../../components/button/ActionButton";
import { getAllDealInteractions } from "../../../services/dealInteractionsService";
import GoBackButton from "../../button/GoBackButton";
import SubmitButton2 from "../../button/SubmitButton2";
import SectionHeader from "../../SectionHeader";
import InteractionCard from "../../viewCards/InteractionCard";
import AddDealInteraction from "./AddDealInteraction";

const DealInteractions = ({ route, navigation, add, style }) => {
  const [data, setData] = useState({
    totalCount: 0,
    totalPageCount: 0,
    interactions: [],
  });
  const [pageNo, setPageNo] = useState(0);

  const [dealId, setDealId] = useState(route.params.dealId);

  const [flag, setFlag] = useState(false);

  const [loading, setLoading] = useState(false);

  const [viewAddForm, setViewAddForm] = useState(add);

  useEffect(() => {
    setDealId(route.params.dealId);
  }, [route.params.dealId]);

  const loadData = (pageNo) => {
    setLoading(true);
    getAllDealInteractions(dealId, pageNo).then((response) => {
      if (!!response) {
        if (pageNo == 0) {
          setData(response.data);
        } else {
          setData((prevData) => ({
            ...prevData,
            interactions: [
              ...prevData.interactions,
              ...response.data.interactions,
            ],
          }));
        }
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    loadData(pageNo);
  }, [pageNo, dealId]);

  useEffect(() => {
    setPageNo(0);
    loadData(0);
  }, [flag]);

  function addInteractionToView(interaction) {
    setData((prevState) => ({
      ...prevState,
      totalCount: prevState.totalCount + 1,
      interactions: [interaction, ...prevState.interactions],
    }));
  }

  return (
    <ScrollView className="flex">
      <View className="flex space-y-4 p-4">
        {/* back button */}
        <GoBackButton navigation={navigation} />

        {/* section header */}
        <SectionHeader
          title="Deal Interactions"
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

        {/* add form */}
        <View className="flex">
          {viewAddForm && (
            <AddDealInteraction
              dealId={dealId}
              addInteractionToView={addInteractionToView}
              display={viewAddForm}
              setDisplay={setViewAddForm}
              style={style}
            />
          )}
        </View>

        {/* enteries list*/}
        <View className="flex">
          {data.interactions.length > 0 && (
            <View className="flex space-y-4">
              {data.interactions.map((interaction) => (
                <InteractionCard interaction={interaction} />
              ))}
            </View>
          )}
        </View>

        <View>
          {pageNo + 1 < data.totalPageCount && (
            <SubmitButton2
              loading={loading}
              onClick={() => {
                setPageNo((prev) =>
                  prev + 1 < data.totalPageCount ? prev + 1 : prev
                );
              }}
            >
              View More
            </SubmitButton2>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default DealInteractions;
