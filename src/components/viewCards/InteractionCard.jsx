import { Text, View } from "react-native";
import colors from "tailwindcss/colors";
import { Contact, Mail, Phone } from "../../svgIcons";

const InteractionCard = ({ interaction, style }) => (
  <View
    className="flex border border-gray-400 rounded-xl px-2 space-y-1 py-1"
    style={style}
  >
    <Text>{interaction.meetingLocation}</Text>
    <Text>{JSON.stringify(interaction)}</Text>
  </View>
);

export default InteractionCard;
