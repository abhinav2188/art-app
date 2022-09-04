import React from "react";
import PropTypes from "prop-types";
import { Add, Delete, Edit, Reload } from "../../svgIcons";
import { ActivityIndicator, TouchableNativeFeedback, View } from "react-native";
import colors from "tailwindcss/colors";

const buttons = {
  add: <Add fill={colors.green[500]} />,
  edit: <Edit fill={colors.amber[500]} />,
  delete: <Delete fill={colors.red[500]} />,
  reload: <Reload fill={colors.sky[500]} />,
};

const ActionButton = (props) => {
  return (
    <TouchableNativeFeedback
      disabled={props.loading}
      onPress={props.onClick}
      style={props.style}
    >
      <View className="h-8 w-8 p-1 bg-gray-200 rounded">
        {props.loading ? (
          <ActivityIndicator color={colors.gray[600]} />
        ) : !!props.type ? (
          buttons[props.type]
        ) : (
          props.children
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

ActionButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default ActionButton;
