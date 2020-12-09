import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StatusBar, ScrollView, ToastAndroid, Modal, TouchableHighlight, ActivityIndicator, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Checkbox } from 'react-native-paper';
import NetInfo from "@react-native-community/netinfo";

//styles
import { styles } from './styles'

//react hook
import { useDispatch, useSelector } from 'react-redux'

//root store
import { RootStore } from '../../redux/store'

//company code action
import { checkCredential } from '../../redux/login/Action'

//service
import { setItem, getItem } from './service'

//constants
import * as constants from '../../constants'


export function LoginScreen({ navigation }: any) {
    React.useEffect(() => {
        getItem(RememberMe)
    }, [])
    const [netInfo, setNetInfo] = React.useState('');
    React.useEffect(() => {
        // Subscribe to network state updates
        const unsubscribe = NetInfo.addEventListener((status) => {
            setNetInfo(
                `Connection type: ${status.type}
        Is connected?: ${status.isConnected}`,
            );
        });

        return () => {
            // Unsubscribe to network state updates
            unsubscribe();
        };
    }, []);

    const getNetInfo = () => {
        // To get the network state once
        NetInfo.fetch().then((status) => {
            if (status.isConnected == true) {
                if (state.UserName.length > 0) {
                    if (state.password.length > 0) {
                        //console.log('vasanth')
                        dispatch(checkCredential(state.UserName, state.password,
                            Url, Code, SetStates, !state.checked, RememberMe, navigation))
                    } else {
                        setState({ ...state, Warn_Enter_Pass: constants.Labels.enter_password, Warn_Enter_Name: constants.Labels.empty })
                    }
                } else {
                    setState({ ...state, Warn_Enter_Name: constants.Labels.enter_username, Warn_Enter_Pass: constants.Labels.empty })
                }
            } else {
                ToastAndroid.show(constants.Labels.network_error, ToastAndroid.SHORT)
            }
        });
    };
    const [state, setState] = React.useState({
        hidePassword: true,
        UserName: constants.Labels.empty,
        password: constants.Labels.empty,
        Warn_Enter_Name: constants.Labels.empty,
        Warn_Enter_Pass: constants.Labels.empty,
        Warn_Invalid_Cred: constants.Labels.empty,
        checked: false,
        modalVisible: false,
    })

    //get from service 
    const SetStates = (invalidCred: string, enterName: string, enterPass: string) => {
        setState({ ...state, Warn_Invalid_Cred: invalidCred, Warn_Enter_Name: enterName, Warn_Enter_Pass: enterPass })
    }


    const RememberMe = (username: any, pass: any, check: boolean) => {
        setState({ ...state, UserName: username, password: pass, checked: check })
    }

    const dispatch = useDispatch()

    //states from compaycode redux store
    const code = useSelector((state: RootStore) => state.companyCode.Code_Data?.CompanyCode)
    var Code = code.toUpperCase()
    const Url = useSelector((state: RootStore) => state.companyCode.Code_Data?.CompanyUrl)

    //states from loginScreen redux store
    const loading = useSelector((state: RootStore) => state.login.loading)

    //manage password visibility
    const managePasswordVisibility = () => {
        setState({ ...state, hidePassword: !state.hidePassword });
    }

    return (
        <View style={styles.backgroundContainer}>
            <StatusBar backgroundColor={constants.Colors.black} />
            <View style={styles.loadingContainer}>
                {loading == true ? (<ActivityIndicator size="large" color={constants.Colors.light_blue} />) : (<Text></Text>)}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={state.modalVisible}
                onRequestClose={() => {
                    setState({ ...state, modalVisible: false })
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{constants.Labels.fields_cannot_be_empty}</Text>
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: constants.Colors.light_strong_blue }}
                        onPress={() => {
                            setState({ ...state, modalVisible: !state.modalVisible })
                        }}
                    >
                        <Text style={styles.textStyle}>{constants.Labels.close}</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.menuIconContainer}>
                        <TouchableOpacity onPress={() => navigation.push(constants.ScreenName.settings)}>
                            <AntDesign
                                name={constants.Icons.Menu_bar}
                                size={30}
                                color={constants.Colors.themecolor}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>{Code}</Text>
                </View>
                <View style={styles.errorContainer}>
                    {state.Warn_Enter_Name.length > 0 && state.Warn_Enter_Pass.length == 0 ?
                        (<Text style={styles.err_text}>{state.Warn_Enter_Name}</Text>) :

                        state.Warn_Enter_Pass.length > 0 && state.Warn_Enter_Name.length == 0 ?
                            (<Text style={styles.err_text}>{state.Warn_Enter_Pass}</Text>) :

                            state.Warn_Invalid_Cred.length > 0 && state.Warn_Enter_Name.length == 0 && state.Warn_Enter_Pass.length == 0 ?
                                (<Text style={styles.err_text}>{state.Warn_Invalid_Cred}</Text>) :
                                (<Text></Text>)}
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Username"
                        style={styles.textInput}
                        spellCheck={false}
                        autoCorrect={false}
                        onChangeText={(username) => {
                            setState({ ...state, UserName: username })
                        }}
                        value={state.UserName}
                    />
                    <FontAwesome
                        style={styles.iconUser}
                        name={constants.Icons.User}
                        size={25}
                        color={constants.Colors.themecolor}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        spellCheck={false}
                        autoCorrect={false}
                        underlineColorAndroid={constants.Colors.transparent} secureTextEntry={state.hidePassword}
                        onChangeText={(pass) => {
                            setState({ ...state, password: pass })
                        }}
                        value={state.password}
                    />
                    <FontAwesome
                        style={styles.iconPass}
                        name={constants.Icons.password}
                        size={25}
                        color={constants.Colors.themecolor}
                    />
                    <TouchableOpacity style={styles.eye}
                        onPress={managePasswordVisibility}>
                        {state.hidePassword ? (<FontAwesome
                            name={constants.Icons.hide}
                            size={20}
                            color={constants.Colors.themecolor}
                        />) : (<FontAwesome
                            name={constants.Icons.unhide}
                            size={20}
                            color={constants.Colors.themecolor}
                        />)}
                    </TouchableOpacity>
                    <View style={styles.checkBoxContainer}>
                        <Checkbox
                            status={state.checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                if (state.UserName.length > 0 && state.password.length > 0) {
                                    if (state.checked) {
                                        setState({ ...state, checked: false })
                                    } else {
                                        setState({ ...state, checked: true })
                                    }
                                } else if (state.UserName.length == 0 && state.password.length == 0 && state.checked == true) {
                                    setState({ ...state, checked: false })
                                } else if (state.UserName.length > 0 && state.password.length == 0 && state.checked == true) {
                                    setState({ ...state, checked: false })
                                } else if (state.UserName.length == 0 && state.password.length > 0 && state.checked == true) {
                                    setState({ ...state, checked: false })
                                } else {
                                    setState({ ...state, modalVisible: true })
                                }
                            }}
                            color={constants.Colors.themecolor}
                        />
                        <Text>{constants.Labels.rememberme}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {
                        getNetInfo()
                    }
                    }>
                        <LinearGradient colors={[constants.Blue_family_gradient.color_one, constants.Blue_family_gradient.color_two]} start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }} style={styles.gradient}>
                            <Text style={styles.btnText}>{constants.Labels.login}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.adaptive}>{constants.Labels.dev}</Text>
            </View>
        </View>
    );
}
