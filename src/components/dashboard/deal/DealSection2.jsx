import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { putDealSection2 } from "../../../services/dealService";
import { getDropdownValues } from "../../../services/dropdownService";
import ActionButton from "../../button/ActionButton";
import Form from "../../Form";
import ViewDetails from "../../ViewDetails";

const formName = "DEAL_PRODUCT_REQUIREMENTS";

const formFields = [
    {
        label: "Product Type",
        name: "productType",
        type: "dropdown",
        dropdownType: "PRODUCT_TYPE"
    },
    {
        label: "Sub-category Product",
        name: "subCategoryProduct",
        type: "dropdown",
        dropdownType: "SUB_CATEGORY_PRODUCT"
    },
    {
        label: "Unit of Quantity",
        name: "unitOfQuantity",
        type: "dropdown",
        dropdownType: "UNIT_OF_QUANTITY"
    },
    {
        label: "Order Size Factor",
        name: "orderSizeFactor",
        type: "text",
        inputType:"integer"
    },
    {
        label: "Type of Work",
        name: "typeOfWork",
        type: "dropdown",
        dropdownType: "TYPE_OF_WORK"
    },
    {
        label: "Road Details",
        name: "roadDetails",
        type: "textArea"
    },
]


const viewFields = [
    {
        label: "Product Type",
        name: "productType"
    },
    {
        label: "Sub-category Product",
        name: "subCategoryProduct"
    },
    {
        label: "Unit of Quantity",
        name: "unitOfQuantity"
    },
    {
        label: "Order Size Factor",
        name: "orderSizeFactor"
    },
    {
        label: "Type of Work",
        name: "typeOfWork"
    },
    {
        label: "Road Details",
        name: "roadDetails"
    },
]

const initialData = {
    productType: "",
    subCategoryProduct: "",
    unitOfQuantity: "",
    orderSizeFactor: "",
    typeOfWork: "",
    roadDetails: ""
}

const DealSection2 = ({ dealId, setDealDetails, data, edit, style }) => {

    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState(initialData);

    useEffect(() => {
        if (!!data) {
            setFormData(data);
        }
    }, [data])

    const [flag, setFlag] = useState(true);

    const reloadDropdown = () => setFlag(f => !f);

    const [dropdowns, setDropdowns] = useState({
        PRODUCT_TYPE: {
            values: []
        },
        SUB_CATEGORY_PRODUCT: {
            values: []
        },
        UNIT_OF_QUANTITY: {
            values: []
        },
        TYPE_OF_WORK: {
            values: []
        },
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
        putDealSection2(dealId, formData).then(
            response => {
                console.log(response);
                setLoading(false);
                setDealDetails(prevState => ({
                    ...prevState,
                    productDetails: formData
                }));
                setEditMode(false);
            }
        )
    }

    let [editMode, setEditMode] = useState(edit);

    const actions = <View className="flex">
        <ActionButton type="edit" onClick={() => setEditMode(true)} />
    </View>

    return (
        editMode ?
            <Form
                title="Add Product Details"
                fields={formFields}
                formData={formData}
                setFormData={setFormData}
                dropdowns={dropdowns}
                onSubmit={handleSubmit}
                loading={loading}
                reloadDropdown={reloadDropdown}
                errors={errors}
                setErrors={setErrors}
                buttonTitle="add"
                style={style}
            />
            :
            <ViewDetails viewFields={viewFields} data={data} actions={actions} title="product details" style={style}/>
    );

}

export default DealSection2;