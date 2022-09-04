import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Button } from "react-native";
import { getAllDealContacts } from "../../../services/contactService";
import ActionButton from "../../button/ActionButton";
import GoBackButton from "../../button/GoBackButton";
import SubmitButton2 from "../../button/SubmitButton2";
import SectionHeader from "../../SectionHeader";
import ContactCard from "../../viewCards/ContactCard";
import AddDealContact from "./AddDealContact";

const DealContacts = ({ route, navigation, add, style }) => {
  const [data, setData] = useState({
    totalCount: 0,
    totalPageCount: 0,
    contacts: [],
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
    getAllDealContacts(dealId, pageNo).then((response) => {
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
  }, [pageNo]);

  useEffect(() => {
    setPageNo(0);
    loadData(0);
  }, [flag]);

  function addContactToView(contact) {
    setData((prevState) => ({
      ...prevState,
      contacts: [contact, ...prevState.contacts],
    }));
  }

  return (
    <ScrollView className="flex">
      <View className="flex space-y-4 p-4">
        {/* back button */}
        <GoBackButton navigation={navigation} />

        {/* section header */}
        <SectionHeader
          title="Deal Contacts"
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
            <AddDealContact
              dealId={dealId}
              addContactToView={addContactToView}
              display={viewAddForm}
              setDisplay={setViewAddForm}
              style={style}
            />
          )}
        </View>

        {/* enteries list*/}
        <View className="flex">
          {data.contacts.length > 0 && (
            <View className="flex space-y-4">
              {data.contacts.map((contact) => (
                <ContactCard contact={contact} />
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

export default DealContacts;
