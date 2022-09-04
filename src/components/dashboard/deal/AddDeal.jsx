import React, { useEffect, useState } from "react";
import DealSection1 from "./DealSection1";
import DealSection3 from "./DealSection3";
import DealSection2 from "./DealSection2";
import DealSection4 from "./DealSection4";
import DealContacts from "../deal-contacts/DealContacts";
import DealOwners from "./DealOwners";
import DealConsultants from "../deal-consultants/DealConsultants";
import DealInteractions from "../deal-interactions/DealInteractions";
import DealQuery from "../dealQuery/DealQuery";
import DealAttachments from "../deal-attachment/DealAttachments";
import { Text, TouchableOpacity, View } from "react-native";
import { LeftArrow, Star } from "../../../svgIcons";
import colors from "tailwindcss/colors";
import { ScrollView } from "react-native-gesture-handler";
import GoBackButton from "../../button/GoBackButton";
import MenuButton from "../MenuButton";
import SubmitButton2 from "../../button/SubmitButton2";

const initialData = {
  cardDetails: {
    createTimestamp: "",
    updateTimestamp: "",
    dealId: "",
    dealName: "",
    partyName: "",
    partyId: "",
    dealStage: "",
    openingDate: "",
    isActive: "",
  },
  productDetails: {
    productType: "",
    subCategoryProduct: "",
    unitOfQuantity: "",
    orderSizeFactor: "",
    typeOfWork: "",
    roadDetails: "",
  },
  commonDetails: {
    siteLocation: "",
    cateredByVertical: "",
    paymentType: "",
    openingDate: "",
    expectedCloseDate: "",
    actualCloseDate: "",
    expectedNumberOfDays: "",
    expectedDeliveryAddress: "",
    lastPurchaseDetails: "",
    competitorsInfo: "",
    remarks: "",
  },
  additionalDetails: {
    dealStage: "",
    isActive: "",
    dealValueInCr: "",
    paymentTerms: "",
    paymentFactor: "",
    ownerFocus: "",
    dealProbability: "",
    expectedTurnover: "",
    proximityFromBase: "",
  },
  authorizationDetails: {
    owner: "",
    coOwners: [],
  },
};

const AddDeal = ({ navigation }) => {
  const [dealId, setDealId] = useState(null);

  const [dealDetails, setDealDetails] = useState(initialData);

  return (
    <ScrollView>
      <View className="flex flex-col space-y-4 py-4 px-4 ">
        <View>
          <GoBackButton navigation={navigation} />
        </View>
        <MenuButton
          title1="add"
          title2="new party"
          onPress={() => navigation.navigate("addParty")}
          Icon={Star}
        />
        <DealSection1
          setDealId={setDealId}
          setDealDetails={setDealDetails}
          data={dealDetails.cardDetails}
          edit
        />
        {dealId ? (
          <View className="flex flex-col space-y-4">
            <DealSection2
              dealId={dealId}
              setDealDetails={setDealDetails}
              data={dealDetails.productDetails}
              edit
            />
            <DealSection3
              dealId={dealId}
              setDealDetails={setDealDetails}
              data={dealDetails.commonDetails}
              edit
            />
            <DealSection4
              dealId={dealId}
              setDealDetails={setDealDetails}
              data={dealDetails.additionalDetails}
              edit
            />
          </View>
        ) : (
          <Text></Text>
        )}
      </View>
    </ScrollView>
  );
};

export default AddDeal;

{
  /* 
<DealQuery dealId={dealId} /> 
<DealOwners dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.authorizationDetails} />
<DealContacts dealId={dealId} />
<DealConsultants dealId={dealId} />
<DealInteractions dealId={dealId} />
<DealAttachments dealId={dealId} />
*/
}
