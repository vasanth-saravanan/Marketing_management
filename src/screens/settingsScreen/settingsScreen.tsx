import React, {useState} from 'react';
import { Text,Alert, View, TouchableOpacity,ActivityIndicator, Modal,TextInput,TouchableHighlight,  Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NetInfo from "@react-native-community/netinfo";

//styles
import {styles} from './styles'

//serice from company code service
import { check_code } from '../../redux/compayCode/Action'

//root store
import {RootStore} from '../../redux/store'

//costants
import * as constants from '../../constants'

//react hooks
import {useDispatch, useSelector} from 'react-redux'

export function SettingsScreen({navigation} : any) {
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
        if(status.isConnected == true){
            if(state.code.length > 0){
                dispatch(check_code(state.code , SetStates  , state.screenName , navigation))
            }else {
                setState({...state , InvalidCode : 'Input field is empty'})
            }
        }else {
            Alert.alert(constants.Labels.network_error)
        }
    });
  };
    //get company code from company code redux store
    const code = useSelector((state : RootStore) => state.companyCode.Code_Data?.CompanyCode)
    const loading = useSelector((state : RootStore) => state.companyCode.loading)

    //dispatch
    const dispatch = useDispatch()

    const [state , setState] = useState({
        code : code,
        InvalidCode : '',
        focus : '',
        modalVisible : false,
        screenName : 'settings'
    })
    
    const SetStates = (unWanted : any , invalidCode : string) => {
        setState({...state , InvalidCode : invalidCode})
    }

    const onfocus = () => {
        setState({...state, focus : 'focused'})
    }
    const onblur = () => {
        setState({...state, focus : ''})
    }

    
    return (
        <ScrollView>
        <View style={styles.backgroundContainer}>
        <View style={styles.loadingContainer}>
            {loading == true ? (<ActivityIndicator size="large" color={constants.Colors.light_blue} />) : (<Text></Text>)}
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={state.modalVisible}
        onRequestClose={() => {
            setState({...state , modalVisible : false})
        }}
      >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{constants.Labels.app_name}</Text>
            <Text style={styles.versionText}>{constants.Labels.version}</Text>
            <Text style={styles.crText}>{constants.Labels.copy_right}</Text>
            <Text style={styles.allrText}>{constants.Labels.rights}</Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: constants.Colors.themecolor }}
              onPress={() => {
                setState({...state , modalVisible : !state.modalVisible})
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
      </Modal>
            <View style={styles.backIconContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign
                        name={constants.Icons.left_chevron}
                        size={25}
                        color={constants.Colors.black}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>{constants.ScreenName.settings}</Text>
            <Text style={styles.invalidCode}>{state.InvalidCode}</Text>
            <Text style={state.focus.length > 0 ? {...styles.name , color : constants.Colors.light_blue} : styles.name}>Enter Company Code</Text>
            <TextInput
                onBlur={ () => onblur() }
                onFocus={ () => onfocus() }
                style={styles.textInput}
                onChangeText={(code) => setState({...state, code : code})}
                value={state.code}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.btncont1}>
                    <Button
                    onPress={() => {
                        setState({...state , modalVisible : true})
                      }}
                        //={styles.btn}
                        title="About"
                        color={constants.Colors.themecolor}
                    />
                </View>
                <View style={styles.btncontCenter}></View>
                <View style={styles.btncont2}>
                    <Button
                        //style={styles.btn}
                        title="Ok"
                        color={constants.Colors.themecolor}
                        onPress={() => {
                            getNetInfo()
                        }}
                    />
                </View>

            </View>
        </View>
        </ScrollView>
    );
}

