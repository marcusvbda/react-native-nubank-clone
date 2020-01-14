import AsyncStorage from '@react-native-community/async-storage';
export default {
    set: async (index, val) => await AsyncStorage.setItem(index, val),
    get: async (index) => await AsyncStorage.getItem(index),
    remove: async (index) => await AsyncStorage.removeItem(index)
}