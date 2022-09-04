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
import { LeftArrow } from "../../../svgIcons";
import colors from "tailwindcss/colors";
import { ScrollView } from "react-native-gesture-handler";

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
        isActive: ""
    },
    productDetails: {
        productType: "",
        subCategoryProduct: "",
        unitOfQuantity: "",
        orderSizeFactor: "",
        typeOfWork: "",
        roadDetails: ""
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
        remarks: ""
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
        proximityFromBase: ""
    },
    authorizationDetails: {
        owner: "",
        coOwners: [
        ]
    }
}

const AddDeal = ({navigation}) => {

    const [dealId, setDealId] = useState(null);

    const [dealDetails, setDealDetails] = useState(initialData);

    return (
        <ScrollView className="flex flex-col gap-y-4 pt-4 px-4 ">
      <View>
        <TouchableOpacity
          className="w-8 h-8 bg-gray-400 rounded-full"
          onPress={() => navigation.jumpTo("dashboardMenu")}
        >
          <LeftArrow fill={colors.sky[800]} />
        </TouchableOpacity>
      </View>
            <DealSection1 setDealId={setDealId} setDealDetails={setDealDetails} data={dealDetails.cardDetails} edit />
            {
                dealId ?
                <View className="flex flex-col gap-8">
                    <DealSection2 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.productDetails} edit />
                    </View> : <Text></Text>
                }
        </ScrollView>
    );
}

export default AddDeal;

{/* 
<DealQuery dealId={dealId} /> 
<DealSection3 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.commonDetails} edit />
<DealSection4 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.additionalDetails} edit />
<DealOwners dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.authorizationDetails} />
<DealContacts dealId={dealId} />
<DealConsultants dealId={dealId} />
<DealInteractions dealId={dealId} />
<DealAttachments dealId={dealId} />
*/}