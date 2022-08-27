import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner";
import { Add, Delete, Edit, Reload } from "../../svgIcons";
import {
  ActivityIndicator,
  Image,
  TouchableNativeFeedback,
  View,
} from "react-native";
import colors from "tailwindcss/colors";

const buttons = {
  add: (
    <View className="h-6 w-6">
      <Add fill={colors.green[500]} />
    </View>
  ),
  edit: (
    <View className="h-6 w-6 ">
      <Edit fill={colors.amber[500]} />
    </View>
  ),
  delete: (
    <View className="h-6 w-6 ">
      <Delete fill={colors.red[500]} />
    </View>
  ),
  reload: (
    <View className="h-6 w-6">
      <Reload fill={colors.sky[500]} />
    </View>
  ),
};

const ActionButton = (props) => {
  

  return (
    <TouchableNativeFeedback disabled={props.loading} onPress={props.onClick}>
      {props.loading ? (
        <ActivityIndicator color={colors.gray[600]}/>
      ) : !!props.type ? (
        buttons[props.type]
      ) : (
        props.children
      )}
    </TouchableNativeFeedback>
  );
};

ActionButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ActionButton;
