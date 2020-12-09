import AsyncStorage from '@react-native-community/async-storage';


export const getItem = async (setStatus: any) => {
    try {
        const Code = await AsyncStorage.getItem('code');
        if (Code != null) {
            setStatus(Code)
        }
    } catch (error) {
        return null;
    }
};

export const setItem = async (code : any) => {
    try {
            await AsyncStorage.setItem('code', code);
    } catch (error) {
        //console.log("SetItem error ", error)
        return null;
    }
}
