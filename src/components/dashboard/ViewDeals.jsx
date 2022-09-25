import React, { useEffect, useState } from "react";
import { getAllDeals } from "../../services/dealService";
import { ScrollView, Text, View } from "react-native";
import ActionButton from "../button/ActionButton";
import DealCard from "../viewCards/DealCard";
import { Document } from "../../svgIcons";
import MenuButton from "../button/MenuButton";
import SubmitButton2 from "../button/SubmitButton2";

const ViewDeals = ({ navigation }) => {
  const [pageNo, setPageNo] = useState(0);

  const [data, setData] = useState({
    totalCount: 0,
    totalPages: 0,
    deals: [],
  });

  const [flag, setFlag] = useState(false);

  const [loading, setLoading] = useState(false);

  const loadData = (pageNo) => {
    console.log("getAllDeals()");
    setLoading(true);
    getAllDeals(pageNo, {}).then((response) => {
      if (!!response) {
        if (pageNo == 0) {
          setData(response.data);
        } else {
          setData((prevData) => ({
            ...prevData,
            deals: [...prevData.deals, ...response.data.deals],
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

  return (
    <ScrollView>
      <View className="flex flex-col w-full py-4 px-4 space-y-4">
        <MenuButton
          title1="add"
          title2="new deal"
          onPress={() => navigation.jumpTo("addDeal")}
          Icon={Document}
        />
        <View className="flex flex-row justify-between border border-gray-400 rounded-xl p-2 items-center">
          <View className="flex flex-row space-x-1">
            <Text>My Deals</Text>
            <Text className="px-1 rounded bg-sky-800 text-white">
              {data.totalCount}
            </Text>
          </View>
          <ActionButton
            type="reload"
            loading={loading}
            onClick={() => setFlag((f) => !f)}
          />
        </View>
        <View className="flex space-y-4">
          {data.deals.map((deal) => (
            <DealCard
              data={deal}
              key={deal.dealId}
              onClick={() => {
                navigation.navigate("updateDeal", {
                  screen: "deal",
                  params: { dealId: deal.dealId },
                });
              }}
            />
          ))}
        </View>

        <View>
          {pageNo + 1 < data.totalPages && (
            <SubmitButton2
              loading={loading}
              onClick={() => {
                setPageNo((prev) =>
                  prev + 1 < data.totalPages ? prev + 1 : prev
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

export default ViewDeals;
