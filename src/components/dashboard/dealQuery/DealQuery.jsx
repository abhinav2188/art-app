import React, { useState } from "react";
import { View } from "react-native";
import { Info } from "../../../svgIcons";
import BottomModal from "../../BottomModal";
import MenuButton from "../../button/MenuButton";
import AddDealQuery from "./AddDealQuery";

const DealQuery = ({ dealId, style }) => {
  const [viewAddForm, setViewAddForm] = useState(false);

  return (
    <View style={style}>
            <MenuButton
              onPress={() => setViewAddForm(true)}
              Icon={Info}
              title1="Send"
              title2="Deal Query"
            />
      <BottomModal
        setModalVisible={setViewAddForm}
        modalVisible={viewAddForm}
        closeable
      >
        <AddDealQuery setDisplay={setViewAddForm} dealId={dealId} />
      </BottomModal>
    </View>
  );
};

export default DealQuery;
