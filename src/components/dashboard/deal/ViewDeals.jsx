import React, { useEffect, useState } from "react";
import { getAllDeals } from "../../../services/dealService";
import { getDropdownValues } from "../../../services/dropdownService";
import { Text, TouchableOpacity, View } from "react-native";
import Table from "../../Table";
import ActionButton from "../../button/ActionButton";
import Form from "../../Form";
import { ScrollView } from "react-native-gesture-handler";
import { LeftArrow } from "../../../svgIcons";
import colors from "tailwindcss/colors";

const viewFields = [
  {
    label: "Id",
    name: "dealId",
  },
  {
    label: "Deal Name",
    name: "dealName",
  },
  {
    label: "Party Name",
    name: "partyName",
  },
  {
    label: "Deal Stage",
    name: "dealStage",
  },
  {
    label: "Opening Date",
    name: "openingDate",
  },
  {
    label: "Active",
    name: "isActive",
  },
];

const ViewDeals = ({ navigation }) => {
  const [pageNo, setPageNo] = useState(0);
  const [data, setData] = useState({
    totalCount: 0,
    totalPages: 0,
    deals: [],
  });

  const [dropdowns, setDropdowns] = useState({
    USER_EMAIL: {
      values: [],
    },
    PARTY_NAME: {
      values: [],
    },
    DEAL_NAME: {
      values: [],
    },
  });

  useEffect(() => {
    setLoading(true);
    getAllDeals(pageNo, {}).then((response) => {
      if (response) {
        setData(response.data);
      }
      setLoading(false);
    });
  }, []);

  const [loading, setLoading] = useState(false);

  const DealCard = ({ data, style }) => (
    <TouchableOpacity
      className="flex rounded-xl p-2 border border-gray-400 w-full gap-y-1"
      style={style}
      onPress={() => {
        navigation.navigate("updateDeal", { dealId: data.dealId });
      }}
    >
      <View className="flex flex-row justify-between">
        <Text className="font-bold">{data.dealName}</Text>
        <Text className="px-1 rounded-full bg-yellow-300 capitalize font-light">
          {data.dealStage}
        </Text>
      </View>
      <View>
        <Text>Party : {data.partyName}</Text>
      </View>
      <Text className="rounded-full px-1 self-start bg-gray-400">
        Opening Date: {data.openingDate}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex flex-col w-full py-4 px-4 gap-y-4">
      {data.deals.length > 0 ? (
        data.deals.map((deal) => <DealCard data={deal} key={deal.dealId} />)
      ) : (
        <Text>No enteries</Text>
      )}
    </ScrollView>
  );
};

export default ViewDeals;
