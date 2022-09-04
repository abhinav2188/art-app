import React, { useEffect, useState } from "react";
import { getAllDeals } from "../../../services/dealService";
import { Text, View } from "react-native";
import ActionButton from "../../button/ActionButton";
import DealCard from "../../viewCards/DealCard";
import MenuButton from "../MenuButton";
import { Document } from "../../../svgIcons";

const ViewDeals = ({ navigation }) => {
  const [pageNo, setPageNo] = useState(0);
  const [data, setData] = useState({
    totalCount: 0,
    totalPages: 0,
    deals: [],
  });

  const [flag, setFlag] = useState(false);

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
            deals: [prevData.deals, ...response.data.deals],
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

  const [loading, setLoading] = useState(false);

  return (
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
        {data.deals.length > 0 ? (
          data.deals.map((deal) => (
            <DealCard
              data={deal}
              key={deal.dealId}
              onClick={() => {
                navigation.navigate("updateDeal",{
                    screen:"deal", params : { dealId: deal.dealId }
                });
              }}
            />
          ))
        ) : (
          <Text>No enteries</Text>
        )}
      </View>
    </View>
  );
};

export default ViewDeals;
