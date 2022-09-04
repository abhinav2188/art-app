import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";
import colors from "tailwindcss/colors";
import { getAllDealContacts } from "../../../services/contactService";
import { Contact, LeftArrow, Mail, Phone } from "../../../svgIcons";
import ActionButton from "../../button/ActionButton";
import AddDealContact from "./AddDealContact";

const viewFields = [
  {
    label: "Contact Id",
    name: "id",
  },
  {
    label: "Full Name",
    name: "name",
  },
  {
    label: "Email-Pri",
    name: "email1",
  },
  {
    label: "Email-Sec",
    name: "email2",
  },
  {
    label: "Mobile-Pri",
    name: "mobile1",
  },
  {
    label: "Mobile-Sec",
    name: "mobile2",
  },
  {
    label: "Designation",
    name: "designation",
  },
];

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

  const tableActions = (
    <View className="flex">
      <ActionButton type="add" onClick={() => setViewAddForm((f) => !f)} />
    </View>
  );

  const ContactCard = ({ contact, style }) => (
    <View
      className="flex border border-gray-400 rounded-xl px-2 space-y-1 py-1"
      style={style}
    >
      <Text className="border-b border-gray-400 pb-1 my-1 ">
        Contact#{contact.id}
      </Text>
      <View className="flex flex-row gap-x-1 items-center">
        <View className="h-5 w-5">
          <Contact fill={colors.gray[400]} />
        </View>
        <Text className="flex-1">{contact.name}</Text>
        <Text className="bg-gray-400 rounded-full px-1 uppercase">
          {contact.designation}
        </Text>
      </View>
      <View className="flex flex-row gap-x-1 items-center">
        <View className="h-5 w-5">
          <Mail fill={colors.gray[400]} />
        </View>
        <Text>{contact.email1}</Text>
        <Text>{contact.email2}</Text>
      </View>
      <View className="flex flex-row gap-x-1">
        <View className="h-5 w-5">
          <Phone fill={colors.gray[400]} />
        </View>
        <Text>{contact.mobile1}</Text>
        <Text>{contact.mobile2}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView className="flex">
      <View className="flex flex-col space-y-4 px-2 py-4">
        {/* back button */}
        <TouchableOpacity
          className="w-8 h-8 bg-gray-400 rounded-full"
          onPress={() => navigation.jumpTo("dashboardMenu")}
        >
          <LeftArrow fill={colors.sky[800]} />
        </TouchableOpacity>

        {/* section header */}
        <View className="flex flex-row justify-between border border-gray-400 px-2 items-center rounded-xl py-2">
          <View className="flex flex-row gap-x-2 items-center">
            <Text>Deal Contacts</Text>
            <Text className="p-1 bg-sky-800 text-white font-bold rounded">
              {data.totalCount}
            </Text>
          </View>
          <View>{tableActions}</View>
        </View>

        {/* enteries list*/}
        <View className="flex space-y-4">
          {data.contacts.map((contact) => (
            <ContactCard contact={contact} />
          ))}
        </View>

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
      </View>
    </ScrollView>
  );
};

export default DealContacts;
