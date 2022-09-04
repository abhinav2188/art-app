import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { getAllDealConsultants } from "../../../services/consultantService";
import ActionButton from "../../button/ActionButton";
import GoBackButton from "../../button/GoBackButton";
import SectionHeader from "../../SectionHeader";
import ConsultantCard from "../../viewCards/ConsultantCard";
import AddDealConsultant from "./AddDealConsultant";

const DealConsultants = ({ route, navigation, add, style }) => {
  const [data, setData] = useState({
    totalCount: 0,
    totalPageCount: 0,
    consultants: [],
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
    getAllDealConsultants(dealId, pageNo).then((response) => {
      if (!!response) {
        if (pageNo == 0) {
          setData(response.data);
        } else {
          setData((prevData) => ({
            ...prevData,
            contacts: [...prevData.contacts, ...response.data.contacts],
          }));
        }
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    loadData(pageNo);
  }, [pageNo,dealId]);

  useEffect(() => {
    setPageNo(0);
    loadData(0);
  }, [flag]);

  function addConsultantToView(consultant) {
    setData((prevState) => ({
      ...prevState,
      totalCount: prevState.totalCount+1,
      consultants: [consultant, ...prevState.consultants],
    }));
  }

  return (
    <ScrollView className="flex">
      <View className="flex space-y-4 p-4">
        {/* back button */}
        <GoBackButton navigation={navigation} />

        {/* section header */}
        <SectionHeader
          title="Deal Consultants"
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
            <AddDealConsultant
              dealId={dealId}
              addConsultantToView={addConsultantToView}
              display={viewAddForm}
              setDisplay={setViewAddForm}
              style={style}
            />
          )}
        </View>

        {/* enteries list*/}
        <View className="flex">
          {data.consultants.length > 0 && (
            <View className="flex space-y-4">
              {data.consultants.map((consultant) => (
                <ConsultantCard consultant={consultant} />
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

export default DealConsultants;
