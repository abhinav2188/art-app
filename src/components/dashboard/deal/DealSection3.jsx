import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { putDealSection3 } from "../../../services/dealService";
import { getDropdownValues } from "../../../services/dropdownService";
import ActionButton from "../../button/ActionButton";
import Form from "../../Form";
import ViewDetails from "../../ViewDetails";

const formFields = [
    {
        label: "Site Location",
        name: "siteLocation",
        type: "text"
    },
    {
        label: "Catered-by Vertical",
        name: "cateredByVertical",
        type: "dropdown",
        dropdownType: "VERTICAL"
    },
    {
        label: "Payment Type",
        name: "paymentType",
        type: "dropdown",
        dropdownType: "PAYMENT_TYPE"
    },
    {
        label: "Expected Close Date",
        name: "expectedCloseDate",
        type: "date"
    },
    {
        label: "Actual Close Date",
        name: "actualCloseDate",
        type: "date"
    },
    {
        label: "Expected Delivery Address",
        name: "expectedDeliveryAddress",
        type: "text"
    },
    {
        label: "Last Purchase Details",
        name: "lastPurchaseDetails",
        type: "textArea"
    },
    {
        label: "Competitors Info",
        name: "competitorsInfo",
        type: "textArea"
    },
    {
        label: "Remarks",
        name: "remarks",
        type: "textArea"
    },

]

const viewFields = [
    {
        label: "Site Location",
        name: "siteLocation",
    },
    {
        label: "Catered-by Vertical",
        name: "cateredByVertical",
    },
    {
        label: "Payment Type",
        name: "paymentType",
    },
    {
        label: "Opening Date",
        name: "openingDate",
    },
    {
        label: "Expected Close Date",
        name: "expectedCloseDate",
    },
    {
        label: "Expected Number of Days",
        name: "expectedNumberOfDays",
    },
    {
        label: "Actual Close Date",
        name: "actualCloseDate",
    },
    {
        label: "Expected Delivery Address",
        name: "expectedDeliveryAddress",
    },
    {
        label: "Last Purchase Details",
        name: "lastPurchaseDetails",
    },
    {
        label: "Competitors Info",
        name: "competitorsInfo",
    },
    {
        label: "Remarks",
        name: "remarks",
    },

]

const formName = "DEAL_DETAILS";

const DealSection3 = ({ dealId, setDealDetails, data, edit, style }) => {

    const [formData, setFormData] = useState({
        siteLocation: "",
        cateredByVertical: "",
        paymentType: "",
        openingDate: new Date(),
        expectedCloseDate: "",
        actualCloseDate: "",
        expectedNumberOfDays: "",
        expectedDeliveryAddress: "",
        lastPurchaseDetails: "",
        competitorsInfo: "",
        remarks: ""
    });

    useEffect(() => {
        if (!!data) {
            setFormData(data);
        }
    }, [data])


    const [flag, setFlag] = useState(true);

    const reloadDropdown = () => setFlag(f => !f);

    const [dropdowns, setDropdowns] = useState({
        VERTICAL: {
            values: []
        },
        PAYMENT_TYPE: {
            values: []
        }
    });

    useEffect(() => {
        getDropdownValues(null, formName, null).then(
            response => {
                if (response) {
                    console.log(response.dropdownKeyDetailsMap);
                    setDropdowns(response.dropdownKeyDetailsMap)
                }
            }
        )
    }, [flag])

    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        putDealSection3(dealId, formData).then(
            response => {
                console.log(response);
                setLoading(false);
                setDealDetails(prevState => ({
                    ...prevState,
                    commonDetails: formData
                }));
                setEditMode(false);
            }
        )
    }

    let [editMode, setEditMode] = useState(edit);

    const actions = <View className="flex" >
        <ActionButton type="edit" onClick={() => setEditMode(true)} />
    </View>

    return (
        editMode ?
            <Form 
                title="Common Details"
                fields={formFields}
                formData={formData}
                dropdowns={dropdowns}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                loading={loading}
                reloadDropdown={reloadDropdown}
                buttonTitle="update"
                style={style}
            />
            :
            <ViewDetails viewFields={viewFields} data={data} actions={actions} title="common details" style={style}/>
    );

}

export default DealSection3;