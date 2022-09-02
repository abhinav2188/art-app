import React from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";

const SubmitButton = (props) => {
  return (
    <TouchableOpacity
      disabled={props.loading}
      style={props.style}
      className={`flex items-center bg-sky-800 py-4 px-8 rounded-lg disabled:bg-gray-400 disabled:hover:bg-gray-400 ${props.clazzName} `}
      onPress={props.onClick}
    >
      <Text className="text-white uppercase font-bold">
        {props.loading ? (
        <ActivityIndicator color={colors.gray[100]}/>
        ) : !!props.children ? (
          props.children
        ) : (
          "Submit"
        )}
      </Text>
    </TouchableOpacity>
  );
};

SubmitButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SubmitButton;
