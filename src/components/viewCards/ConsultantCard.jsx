import { Text, View } from "react-native";
import colors from "tailwindcss/colors";
import { Contact, Mail, Phone } from "../../svgIcons";

const ConsultantCard = ({ consultant, style }) => (
  <View
    className="flex border border-gray-400 rounded-xl px-2 space-y-1 py-1"
    style={style}
  >
    <Text className="border-b border-gray-400 pb-1 my-1 ">
      Consultant#{consultant.id}
    </Text>
    <View className="flex flex-row gap-x-1 items-center">
      <View className="h-5 w-5">
        <Contact fill={colors.gray[400]} />
      </View>
      <Text className="flex-1">{consultant.name}</Text>
      <Text className="bg-gray-400 rounded-full px-1 uppercase">
        {consultant.designation}
      </Text>
    </View>
    <View className="flex flex-row gap-x-1 items-center">
      <View className="h-5 w-5">
        <Mail fill={colors.gray[400]} />
      </View>
      <Text>{consultant.email}</Text>
    </View>
    <View className="flex flex-row gap-x-1">
      <View className="h-5 w-5">
        <Phone fill={colors.gray[400]} />
      </View>
      <Text>{consultant.mobile}</Text>
    </View>
  </View>
);

export default ConsultantCard;
