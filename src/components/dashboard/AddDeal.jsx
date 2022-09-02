import React from "react";

const AddDeal = ({ navigation }) => (
    <View>
      <TouchableOpacity onPress={() => navigation.jumpTo("dashboardMenu")}>
        <Text>Menu</Text>
      </TouchableOpacity>
      <Text>addDeal</Text>
    </View>
);


export default AddDeal;