import { Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import { Document, Star } from "../../svgIcons";
import CardRow from "./CardRow";
import Pill from "./Pill";

const DealCard = ({ data, style, onClick }) => (
  <TouchableOpacity
    className="flex rounded-xl p-2 border border-gray-400 w-full space-y-1"
    style={style}
    onPress={onClick}
  >
    <Text className="border-b border-gray-400">Deal#{data.dealId}</Text>
    <View className="flex flex-row flex-wrap gap-1">
      <Pill className="bg-sky-600">
        stage : {!!data.dealStage ? data.dealStage : "NA"}
      </Pill>
      <Pill>Updated at {data.updateTimestamp}</Pill>
      <Pill>Created at {data.createTimestamp}</Pill>
    </View>

    <CardRow Icon={Document}>
      <Text>{data.dealName}</Text>
    </CardRow>
    <CardRow Icon={Star}>
      <Text>{data.partyName}</Text>
    </CardRow>
  </TouchableOpacity>
);

export default DealCard;
