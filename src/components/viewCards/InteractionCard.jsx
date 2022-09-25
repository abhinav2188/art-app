import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import { Calenlar, CommentIcon, LocationIcon, User } from "../../svgIcons";
import CardRow from "./CardRow";
import Pill from "./Pill";

const InteractionCard = ({ interaction, style }) => (
  <View
    className="flex border border-gray-400 rounded-xl px-2 space-y-1 py-1"
    style={style}
  >
    <Text className="border-b border-gray-400 py-1">
      Interaction#{interaction.id}
    </Text>

    <View className="flex flex-row flex-wrap items-center gap-1">
      <Pill>created at {interaction.createTimestamp}</Pill>
      <Pill className="bg-sky-600 text-white">
        stage: {interaction.dealStage}
      </Pill>
      <Pill>handlers: {interaction.handlers.split(",").join(", ")}</Pill>
    </View>

    <CardRow Icon={Calenlar}>
      <Text>{interaction.meetingDate}</Text>
    </CardRow>
    <CardRow Icon={LocationIcon}>
      <Text>{interaction.meetingLocation}</Text>
    </CardRow>
    <CardRow Icon={CommentIcon}>
      <Details value={interaction.meetingDetails} />
    </CardRow>
    <CardRow Icon={User}>
      <Text>
        {interaction.contacts.split(",").join(", ") +
          (!!interaction.consultants
            ? " || " + interaction.consultants.split(",").join(", ")
            : "")}
      </Text>
    </CardRow>

  </View>
);

const Details = ({ value, style }) => {
  const [show, setShow] = useState(false);
  return value.length <= 100 ? (
    <Text style={style}>{value}</Text>
  ) : (
    <View style={style} className="flex">
      <Text>{show ? value : value.substring(0, 100) + "..."}</Text>
      <TouchableOpacity onPress={() => setShow((f) => !f)}>
        <Text className="text-sky-600 font-bold underline">
          {show ? "show less" : "show more"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InteractionCard;
