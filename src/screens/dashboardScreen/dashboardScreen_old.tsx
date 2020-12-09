import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, ActivityIndicator,ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'
import NetInfo from "@react-native-community/netinfo";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//styles
import { styles } from './styles_old'

//service 
import * as Action from '../../redux/dashboard/Action'

//root store
import { RootStore } from '../../redux/store'

//constants
import * as constants from '../../constants'


//react hooks
import { useSelector, useDispatch } from 'react-redux'

export function DashboardScreen({ navigation }: any) {

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

  const getNetInfo = (i : number) => {
    // To get the network state once
    NetInfo.fetch().then((status) => {
        if(status.isConnected == true){
            if(i==0){
                (navigation.push('StackTwo', { screen: 'Sales' }))
            }else if(i==2){
                (navigation.push('StackTwo' , {screen : 'E_Income'}))
            }else if(i==3){
                (navigation.push('StackTwo' , {screen : 'E_Payable'}))
            }else if(i==4){
                (navigation.push('StackTwo' , {screen : 'Payment_collections'}))
            }else{
                console.log('vasanth')
            }
        }else {
            ToastAndroid.show('Check your network connectivity', ToastAndroid.SHORT)
        }
    });
  };

    useEffect(() => {
        dispatch(Action.bankdetails(BusinessUnitId, CompanyUrl))
    }, [])

    const [state, setState] = useState({
        cash: 0,
        bank: 0,
        month : 0,
        today : 0,
        modalVisible : false
    })

    const SetStates = (Cash: number, Bank: number , Month : number , Today : number) => {
        setState({ ...state, cash: Cash, bank: Bank , month : Month , today : Today})
    }

    //get company url from company redux store
    const CompanyUrl = useSelector((state: RootStore) => state.companyCode.Code_Data?.CompanyUrl)

    //get user from login redux store
    const BusinessUnitId = useSelector((state: RootStore) => state.login.Login_Data?.businessUnitId)
    const user = useSelector((state: RootStore) => state.login.Login_Data?.UserName)

    //get user from dashboard redux store
    const loading = useSelector((state: RootStore) => state.dashboard.loading)

    //useDispatch
    const dispatch = useDispatch()

    var footerBox = [];
    var labelBoxInner = [];
    var morePage = [];

    for (let i = 0; i < 3; i++) {
        footerBox.push(
            <View key={i}>
                <View>
                    <TouchableOpacity onPress={() => {
                        {
                            i == 2 ? navigation.push('StackOne', { screen: 'Login' }) : (<Text></Text>)
                        }
                    }}>
                        <Image source={
                            i == 0 ?
                                constants.Icons.HOME :
                                i == 1 ?
                                constants.Icons.ACCOUNTS :
                                    i == 2 ?
                                    constants.Icons.LOGOUT : (<Text></Text>)
                        } style={{ ...styles.Image, height: hp('5%') }} />
                    </TouchableOpacity>
                    {i == 0 ? (<Text style={{ ...styles.bottomText, color: 'red' }}>{constants.Labels.home}</Text>) :
                        i == 1 ? (<Text style={styles.bottomText}>{constants.Labels.accounts}</Text>) :
                    (<Text style={styles.bottomText}>{constants.Labels.logout}</Text>)}
                </View>
            </View>
        )
    }

    for (let i = 0; i < 4; i++) {
        labelBoxInner.push(
            <View style={styles.labelBoxInnerContainer} key={i}>
                <View style={styles.labelBoxInner}>
                    <View style={styles.box}>
                        <View style={styles.boxInnerTop}>
                            {i == 0 ? (<Text>{constants.Labels.Today_Sales}</Text>) :
                                i == 1 ? (<Text>{constants.Labels.Last_30_days}</Text>) :
                                    i == 2 ? (<Text>{constants.Labels.Cash_Balance}</Text>) :
                                        (<Text>{constants.Labels.Bank_Balance}</Text>)}
                        </View>
                        <View style={styles.boxInnerBottom}>
                            <View style={styles.boxInnerBottomLeft}>
                                <Image source={constants.Icons.MONEY_04} style={{ ...styles.Image, height: '50%' }} />
                            </View>
                            <View style={styles.boxInnerBottomRight}>
                                {loading == true ? (<ActivityIndicator size="small" color={constants.Colors.light_blue} />) :
                                    i == 0 ? (<Text>$ {Action.numberWithCommas(state.today)}</Text>) :
                                        i == 1 ? (<Text>$ {Action.numberWithCommas(state.month)}</Text>) :
                                            i == 2 ? (<Text>$ {Action.numberWithCommas(state.cash)}</Text>) :
                                                (<Text>$ {Action.numberWithCommas(state.bank)}</Text>)
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    for (let i = 0; i < 6; i++) {
        morePage.push(
            <View key={i}>
                <TouchableOpacity onPress={() => {
                    { i == 0 ? getNetInfo(0) : 
                    i == 2 ? getNetInfo(2) : 
                    i == 3 ? getNetInfo(3) :
                    i == 4 ? getNetInfo(4) :
                     (console.log('vasanth')) }
                }}>
                    <View style={styles.morePagesBoxOutter}>
                        <View style={{ ...styles.InnerBox, alignItems: "center", borderRightWidth: 1, width: '20%', borderRightColor: constants.Colors.medium_strong_gray }}>
                            {i == 0 ? (<Image source={constants.Icons.MONEY} style={{ ...styles.Image, height: 20 }} />) :
                                i == 1 ? (<Image source={constants.Icons.APPROVAL} style={{ ...styles.Image, height: 30 }} />) :
                                    i == 2 ? (<Image source={constants.Icons.MONEY_01} style={{ ...styles.Image, height: 30 }} />) :
                                        i == 3 ? (<Image source={constants.Icons.MONEY_03} style={{ ...styles.Image, height: 30 }} />) :
                                            i == 4 ? (<Image source={constants.Icons.MONEY_02} style={{ ...styles.Image, height: 30 }} />) :
                                                (<Image source={constants.Icons.CASH_FLOW} style={{ ...styles.Image, height: 30 }} />)}
                        </View>
                        <View style={{ ...styles.InnerBox, marginLeft: "5%" }}>
                            {i == 0 ? (<Text>{constants.Labels.sales}</Text>) :
                                i == 1 ? (<Text>{constants.Labels.approval}</Text>) :
                                    i == 2 ? (<Text>{constants.Labels.exp_income}</Text>) :
                                        i == 3 ? (<Text>{constants.Labels.exp_payable}</Text>) :
                                            i == 4 ? (<Text>{constants.Labels.payment_collections}</Text>) :
                                                (<Text>{constants.Labels.cash_flow}</Text>)}
                        </View>
                        <View style={{ ...styles.InnerBox, width: '20%' }}>
                            <Image source={constants.Icons.ARROW} style={{ ...styles.Image, height: '55%' }} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={styles.backgroundContainer}>
            <LinearGradient colors={[constants.dashboard_gradient.color_one, constants.dashboard_gradient.color_two]} start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }} style={styles.upperLayer}>
                <LinearGradient colors={[constants.dashboard_gradient.color_one, constants.dashboard_gradient.color_two]} start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }} style={styles.profile}>
                    <Image source={constants.Icons.USER} style={{ ...styles.Image, height: hp('8%'), width: wp('16%') }} />
                </LinearGradient>
                <Text style={styles.userText}>{constants.Labels.hi} {user} !</Text>
                <View style={styles.contentContainer}>
                    <View style={styles.morePagesContianer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {morePage}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.labelBox}>
                    {labelBoxInner}
                </View>
            </LinearGradient>
        </View>
    );
}

