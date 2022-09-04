import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";

const SubmitButton2 = (props) => {
  return (
    <TouchableOpacity
      disabled={props.loading}
      style={props.style}
      className={`flex items-center border border-sky-500 py-4 px-8 rounded-lg disabled:border-gray-400 disabled:hover:border-gray-400 ${props.clazzName} `}
      onPress={props.onClick}
    >
      <Text className="text-sky-500 uppercase font-bold">
        {props.loading ? (
        <ActivityIndicator color={colors.sky[500]}/>
        ) : !!props.children ? (
          props.children
        ) : (
          "Submit"
        )}
      </Text>
    </TouchableOpacity>
  );
};

SubmitButton2.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SubmitButton2;
