import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, Button } from "react-native";
import colors from "tailwindcss/colors";
import { getAllDealContacts } from "../../../services/contactService";
import { Contact, LeftArrow, Mail, Phone } from "../../../svgIcons";
import ActionButton from "../../button/ActionButton";
import GoBackButton from "../../button/GoBackButton";
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

  useEffect(() => {
    setDealId(route.params.dealId);
  }, [route.params.dealId]);

  useEffect(() => {
    getAllDealContacts(dealId, pageNo).then((response) => {
      if (response) {
        setData(response.data);
      }
    });
  }, [pageNo]);

  function addContactToView(contact) {
    setData((prevState) => ({
      ...prevState,
      contacts: [contact, ...prevState.contacts],
    }));
  }

  const [viewAddForm, setViewAddForm] = useState(add);

  return (
    <ScrollView className="flex">
      <View className="flex space-y-4 p-4">
        {/* back button */}
        <GoBackButton navigation={navigation} />

        {/* section header */}
        <SectionHeader title="Deal Contacts" totalCount={data.totalCount} actions={[
            <ActionButton
              type="add"
              onClick={() => setViewAddForm((f) => !f)}
            />

        ]}/>
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
          <Button
          title="view more"
          onPress={() => {
              setPageNo((prev) =>
              prev + 1 < data.totalPageCount ? prev + 1 : prev
              );
            }}
            />
            )}
      </View>
            </View>
    </ScrollView>
  );
};

export default DealContacts;
