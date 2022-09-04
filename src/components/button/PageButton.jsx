import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";
import { LeftArrow, RightArrow } from "../../svgIcons";

const PageButton = (props) => {
    return (
        <View className="flex items-center border rounded-full h-5">
            <TouchableOpacity className="w-5" onClick={() => {
                props.setPageNo(prevPageNo => (prevPageNo - 1) < 0 ? prevPageNo : prevPageNo - 1);
            }}><LeftArrow /></TouchableOpacity>
            <Text className="px-1">{props.pageNo + 1}</Text>
            <TouchableOpacity className="w-5" onClick={() => {
                props.setPageNo(prevPageNo => (prevPageNo + 1) >= props.totalPagesCount ? prevPageNo : prevPageNo + 1);
            }}><RightArrow/></TouchableOpacity>
        </View>
    )
}

PageButton.propTypes = {
    pageNo: PropTypes.number,
    setPageNo: PropTypes.func,
    totalPagesCount: PropTypes.number
}

export default PageButton;