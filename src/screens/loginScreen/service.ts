import AsyncStorage from '@react-native-community/async-storage';

export const getItem = async (RememberMe: any) => {
    try {
        const un = await AsyncStorage.getItem('name');
        const pass = await AsyncStorage.getItem('pass');
        const check = await AsyncStorage.getItem('check');

        if (un != null && pass != null) {
            //console.log(un, pass, check)
            RememberMe(un, pass, check)
        }
    } catch (error) {
        //console.log('error occured')
        return null;
    }
};

export const setItem = async (userName: any, Password: any, checked: any) => {
    try {
        if (checked) {
            await AsyncStorage.setItem('name', '');
            await AsyncStorage.setItem('pass', '');
            await AsyncStorage.setItem('check', 'false');
            //console.log('removed')
        } else {
            await AsyncStorage.setItem('name', userName);
            await AsyncStorage.setItem('pass', Password);
            await AsyncStorage.setItem('check', 'true');
            //console.log('set successfully')
        }

        //await AsyncStorage.setItem('check', 'true');
        //console.log('save check successfully')
    } catch (error) {
        //console.log("SetItem error ", error)
        return null;
    }
}
