import AsyncStorage from "@react-native-async-storage/async-storage";

export const localStorage = {
    
    storeData :  async (key, value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (e) {
        return Promise.reject("error fetching user data.");
      }
    },
    
    getData : async (key) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        return Promise.reject("error fetching user data.");
      }
    },

    removeData : async (key) => {
      try {
        await AsyncStorage.removeItem(key);
      } catch (e) {
        return Promise.reject("error fetching user data.");
      }
    }
    
    
}

