import React from 'react'
import { View, Text,Animated,StatusBar,ScrollView, ActivityIndicator,ToastAndroid,} from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import { TextInput, TouchableOpacity} from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'

//hooks
import { useSelector  , useDispatch} from 'react-redux'

//constants
import * as constants from '../../constants'

//styles 
import {styles} from './styles'

//root store
import {RootStore} from '../../redux/store'

//service
import * as service from './service'

//company code action
import {check_code} from '../../redux/compayCode/Action'

export function CompanyCodeScreen({navigation} : any) {

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
            if (state.code.length > 0) {
                dispatch(check_code(state.code , SetStates , state.screenName, navigation))
            }else{
                setState({...state,invalidCode: constants.Labels.empty , enterCode: constants.Labels.enter_companycode })
            }
        }else {
            ToastAndroid.show(constants.Labels.network_error, ToastAndroid.SHORT)
        }
    });
  };

  const fadeAnim = React.useRef(new Animated.Value(0)).current
  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1500,
        useNativeDriver : false
      }
    ).start();
  }, [fadeAnim])


    const [state, setState] = React.useState({
        code: constants.Labels.empty,
        enterCode: constants.Labels.empty,
        invalidCode: constants.Labels.empty,
        screenName : constants.ScreenName.company_code,
    })

    const SetStates = (enterCode : string , invalidCode : string) => {
        setState({...state ,enterCode : enterCode , invalidCode : invalidCode})
    }

    
    const loading = useSelector((state : RootStore) => state.companyCode.loading)
    
    const dispatch = useDispatch()

    return (
            <ScrollView style={{backgroundColor : constants.Colors.light_gray}}>
            <View style={styles.backgorundContainer}>
                <StatusBar backgroundColor={constants.Colors.black} />
                <View style={styles.contentContainer}>
                <View style={styles.loadingContainer}>
                {loading == true ? (<ActivityIndicator size="large" color={constants.Colors.light_blue} />) : (<Text></Text>)}
                </View>
                <Animated.View style={{...styles.adaptiveContainer , opacity : fadeAnim}}>
                        <Text style={styles.adaptive} selectable={true}>{constants.Labels.adaptive}</Text>
                        <Text style={styles.bizBi}>{constants.Labels.biz}</Text>
                        <Text style={styles.bizBi}>{constants.Labels.bi}</Text>
                </Animated.View>
                <View style={styles.error}>
                        {state.enterCode.length > 0  && state.invalidCode.length == 0 ?
                            (<Text style={styles.enterCode}>{state.enterCode}</Text>) :
                            (<Text style={styles.enterCode}>{state.invalidCode}</Text>)
                        }
                </View>
                <View style={styles.companyCodeTextContainer}>
                    <Text style={styles.companyCodeText}>{constants.Labels.company_code}</Text>
                </View>
                <View style={styles.inputBoxContainer}>
                        <TextInput
                            placeholder="Company Code"
                            style={styles.inputBox}
                            placeholderTextColor={constants.Colors.medium_strong_gray}
                            onChangeText={(code) => {
                                setState({ ...state, code: code })
                            }}
                           
                        />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                            style={styles.touch}
                            onPress={() => {
                                getNetInfo() 
                            }}>
                            <AntDesign
                                name={constants.Icons.right_chevron}
                                size={30}
                                color={constants.Colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
    );
}
