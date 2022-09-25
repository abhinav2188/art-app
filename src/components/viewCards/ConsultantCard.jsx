import { Text, View } from "react-native";
import { Contact, Mail, Phone } from "../../svgIcons";
import CardRow from "./CardRow";
import Pill from "./Pill";

const ConsultantCard = ({ consultant, style }) => (
  <View
    className="flex border border-gray-400 rounded-xl px-2 space-y-1 py-1"
    style={style}
  >
    <Text className="border-b border-gray-400 pb-1 my-1 ">
      Consultant#{consultant.id}
    </Text>
    <CardRow Icon={Contact}>
      <View className="flex flex-row items-center">
        <Text className="flex-1">{consultant.name}</Text>
        <Pill>{consultant.designation}</Pill>
      </View>
    </CardRow>
    <CardRow Icon={Mail}>
        <Text>{consultant.email}</Text>
    </CardRow>
    <CardRow Icon={Phone}>
        <Text>{consultant.mobile}</Text>
    </CardRow>
  </View>
);

export default ConsultantCard;
