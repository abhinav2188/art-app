import React, { useEffect, useState } from "react";
import DealQuery from "./dealQuery/DealQuery";
import DealAttachments from "./deal-attachment/DealAttachments";
import ActionButton from "../../components/button/ActionButton";
import { ScrollView, Text, View } from "react-native";
import NativeTextInput from "../input/NativeTextInput";
import { Attachment, Meeting, User } from "../../svgIcons";
import { getDeal } from "../../services/dealService";
import GoBackButton from "../button/GoBackButton";
import MenuButton from "../button/MenuButton";
import DealSection1 from "./deal-sections/DealSection1";
import DealSection2 from "./deal-sections/DealSection2";
import DealSection3 from "./deal-sections/DealSection3";
import DealSection4 from "./deal-sections/DealSection4";

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

const UpdateDeal = ({ navigation, route }) => {
  const [dealId, setDealId] = useState(route.params.dealId);

  const [dealDetails, setDealDetails] = useState(initialData);

  const [loading, setLoading] = useState(false);

  const [flag, setFlag] = useState(true);

  useEffect(() => {
    setDealId(route.params.dealId);
  }, [route.params.dealId]);

  useEffect(() => {
    console.log(flag);
    if (!dealId) return;
    setLoading(true);
    getDeal(dealId).then((response) => {
      if (response) {
        setDealDetails(response.data);
      }
      setLoading(false);
    });
  }, [dealId, flag]);

  const ReloadDealButton = (
    <ActionButton
      type="reload"
      loading={loading}
      onClick={() => setFlag((f) => !f)}
    />
  );

  return (
    <ScrollView className="flex">
      <View className="flex p-4 space-y-4">
        <GoBackButton navigation={navigation} />
        <NativeTextInput
          value={dealId}
          label="deal id"
          onChange={(n, v) => setDealId(v)}
          name="dealId"
          inputType="integer"
        />
        {dealId ? (
          <View className="flex flex-col space-y-4">
            <DealSection1
              dealId={dealId}
              setDealDetails={setDealDetails}
              data={dealDetails.cardDetails}
              reloadDealButton={ReloadDealButton}
            />
            <DealQuery dealId={dealId} />
            <DealSection2
              dealId={dealId}
              setDealDetails={setDealDetails}
              data={dealDetails.productDetails}
            />
            <DealSection3
              dealId={dealId}
              setDealDetails={setDealDetails}
              data={dealDetails.commonDetails}
            />
            <DealSection4
              dealId={dealId}
              setDealDetails={setDealDetails}
              data={dealDetails.additionalDetails}
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
          <View className="flex flex-col">
            <Text>Select a deal from list</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default UpdateDeal;
