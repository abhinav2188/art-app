import { Text, TouchableOpacity, View } from "react-native";

const DealCard = ({ data, style, onClick }) => (
  <TouchableOpacity
    className="flex rounded-xl p-2 border border-gray-400 w-full space-y-1"
    style={style}
    onPress={onClick}
  >
    <Text className="border-b border-gray-400">Deal#{data.dealId}</Text>
    <View className="flex flex-row justify-between">
      <Text className="font-bold">{data.dealName}</Text>
      {!!data.dealStage && (
        <Text className="px-1 rounded-full bg-sky-300 capitalize font-light">
          {data.dealStage}
        </Text>
      )}
    </View>
    <View>
      <Text>Party : {data.partyName}</Text>
    </View>
    <Text className="rounded-full px-1 self-start bg-gray-400">
      Opening Date: {data.openingDate}
    </Text>
  </TouchableOpacity>
);

export default DealCard;
