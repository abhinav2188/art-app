import React, { useContext, useEffect } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import colors from "tailwindcss/colors";
import UserContext from "../context/UserContext";
import { localStorage } from "../localStorage";
import { Logout } from "../svgIcons";

const ProfileScreen = ({navigation}) => {

    const userContext = useContext(UserContext);

    useEffect(() => {
        if (!!!userContext.user) {
          navigation.navigate("login");
        }
    }, [userContext.user]);

    const logout = (() => {
        userContext.setUser(null);
        localStorage.removeData("userDetails");
    })
        
    return (
        <View className="flex flex-1 items-center py-4 ">
            <View className="flex p-4 w-11/12 rounded-lg border border-gray-400">
           {
                userContext.user &&
                <View className="flex flex-row items-center justify-between">
                    <Text>{userContext.user.email}</Text>
                    <TouchableHighlight className="w-6 h-6" onPress={logout}>
                        <Logout fill={colors.red[800]}/>
                    </TouchableHighlight>
                    </View>
            }
            </View>
        </View>
    );

}

export default ProfileScreen;