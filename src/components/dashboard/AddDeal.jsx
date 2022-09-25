import React, { useEffect, useState } from "react";
import DealSection1 from "./deal-sections/DealSection1";
import DealSection3 from "./deal-sections/DealSection3";
import DealSection2 from "./deal-sections/DealSection2";
import DealSection4 from "./deal-sections/DealSection4";
import { ScrollView, View } from "react-native";
import { Attachment, Meeting, Star, User } from "../../svgIcons";
import GoBackButton from "../button/GoBackButton";
import MenuButton from "../button/MenuButton";
import DealQuery from "./dealQuery/DealQuery";
import SubmitButton2 from "../button/SubmitButton2";

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
    nfud: "",
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
        <DealSection1
          dealId={dealId}
          setDealId={setDealId}
          setDealDetails={setDealDetails}
          data={dealDetails.cardDetails}
          edit
        />
        {dealId ? (
          <View className="flex flex-col space-y-4">
            <SubmitButton2
              onClick={() => {
                setDealDetails(initialData);
                setDealId(null);
              }}
            >
              Add New Deal
            </SubmitButton2>
            <DealQuery dealId={dealId} />
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
            <MenuButton
              onPress={() =>
                navigation.jumpTo("dealContacts", { dealId: dealId })
              }
              Icon={User}
              title1="Deal"
              title2="Contacts"
            />
            <MenuButton
              onPress={() =>
                navigation.jumpTo("dealConsultants", { dealId: dealId })
              }
              Icon={User}
              title1="Deal"
              title2="Consultants"
            />
            <MenuButton
              onPress={() =>
                navigation.jumpTo("dealInteractions", { dealId: dealId })
              }
              Icon={Meeting}
              title1="Deal"
              title2="Interactions"
            />
            <MenuButton
              onPress={() =>
                navigation.jumpTo("dealAttachments", { dealId: dealId })
              }
              Icon={Attachment}
              title1="Deal"
              title2="Attachments"
            />
          </View>
        ) : (
          <MenuButton
            title1="add"
            title2="new party"
            onPress={() => navigation.navigate("addParty")}
            Icon={Star}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default AddDeal;
