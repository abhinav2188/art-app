import { Text, View } from "react-native";
import { Contact, Mail, Phone } from "../../svgIcons";
import CardRow from "./CardRow";
import Pill from "./Pill";

const ContactCard = ({ contact, style }) => (
  <View
    className="flex border border-gray-400 rounded-xl px-2 space-y-1 py-1"
    style={style}
  >
    <Text className="border-b border-gray-400 pb-1 my-1 ">
      Contact#{contact.id}
    </Text>
    <CardRow Icon={Contact}>
      <View className="flex flex-row items-center">
        <Text className="flex-1">{contact.name}</Text>
        <Pill>{contact.designation}</Pill>
      </View>
    </CardRow>
    <CardRow Icon={Mail}>
      <View className="flex flex-row items-center">
        <Text>{contact.email1}</Text>
        <Text>{contact.email2}</Text>
      </View>
    </CardRow>
    <CardRow Icon={Phone}>
      <View className="flex flex-row items-center">
        <Text>{contact.mobile1}</Text>
        <Text>{contact.mobile2}</Text>
      </View>
    </CardRow>
  </View>
);

export default ContactCard;
