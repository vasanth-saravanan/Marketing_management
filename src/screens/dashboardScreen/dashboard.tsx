import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, ToastAndroid,Image,ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import NetInfo from "@react-native-community/netinfo";

//svg icons
import USER from "../../assets/icons/user.svg"
import SALES from "../../assets/icons/money.svg"
import APPROVAL from "../../assets/icons/approval.svg"
import EXP_INCOME from "../../assets/icons/money-01.svg"
import EXP_PAYABLE from "../../assets/icons/money-02.svg"
import PAYMENT_COLLECTIONS from "../../assets/icons/money-03.svg"
import CASH_FLOW from "../../assets/icons/cashflow.svg"
import GO from "../../assets/icons/arrow.svg"

//styles
import { styles } from './styles'

//service 
import * as Action from '../../redux/dashboard/Action'

//root store
import { RootStore } from '../../redux/store'

//constants
import * as constants from '../../constants'


//react hooks
import { useSelector, useDispatch } from 'react-redux'

export function Dashboard({ navigation }: any) {

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

    const getNetInfo = (i: number) => {
        // To get the network state once
        NetInfo.fetch().then((status) => {
            if (status.isConnected == true) {
                if (i == 0) {
                    (navigation.push(constants.navigation.stackNav, { screen: constants.ScreenName.sales }))
                } else if (i == 2) {
                    (navigation.push(constants.navigation.stackNav, { screen: constants.ScreenName.exp_income }))
                } else if (i == 3) {
                    (navigation.push(constants.navigation.stackNav, { screen: constants.ScreenName.exp_payable }))
                } else if (i == 4) {
                    (navigation.push(constants.navigation.stackNav, { screen: constants.ScreenName.payment_collections }))
                } else {
                    console.log('vasanth')
                }
            } else {
                ToastAndroid.show(constants.Labels.network_error, ToastAndroid.SHORT)
            }
        });
    };

    useEffect(() => {
        dispatch(Action.bankdetails(BusinessUnitId, CompanyUrl))
    }, [])


    //get company url from company redux store
    const CompanyUrl = useSelector((state: RootStore) => state.companyCode.Code_Data?.CompanyUrl)

    //get user from login redux store
    const BusinessUnitId = useSelector((state: RootStore) => state.login.Login_Data?.businessUnitId)
    const user = useSelector((state: RootStore) => state.login.Login_Data?.UserName)

     //get data from dashboard redux store
     const cash = useSelector((state: RootStore) => state.dashboard.dashboardData?.Cash_Amount)
     const bank = useSelector((state: RootStore) => state.dashboard.dashboardData?.Bank_Amount)
     const today = useSelector((state: RootStore) => state.dashboard.dashboardData?.Today_Sales)
     const month = useSelector((state: RootStore) => state.dashboard.dashboardData?.Month_sales)

    //get user from dashboard redux store
    const loading = useSelector((state: RootStore) => state.dashboard.loading)

    //useDispatch
    const dispatch = useDispatch()

    var doller = [];
    var buttons = [];


    for (let i = 0; i < 4; i++) {
        doller.push(
                < View style={styles.boxOutter} key={i}>
                    <View style={styles.boxInner}>
                        {loading==true ? (<View style={styles.boxInnerTop}>
                            <ActivityIndicator size="small" color={constants.Colors.light_blue} />
                        </View>) : 
                        i==0 ? (<View style={styles.boxInnerTop}>
                            <Text style={styles.doller}>{constants.Labels.$} {Action.numberWithCommas(today)}</Text>
                        </View>) :
                        i==1 ? (<View style={styles.boxInnerTop}>
                            <Text style={styles.doller}>{constants.Labels.$} {Action.numberWithCommas(month)}</Text>
                        </View>) :
                        i==2 ? (<View style={styles.boxInnerTop}>
                            <Text style={styles.doller}>{constants.Labels.$} {Action.numberWithCommas(cash)}</Text>
                        </View>) :
                        (<View style={styles.boxInnerTop}>
                            <Text style={styles.doller}>{constants.Labels.$} {Action.numberWithCommas(bank)}</Text>
                        </View>)}
                        <View style={styles.boxInnerBottom}>
                            {i==0 ? (<Text style={styles.doller_title}>{constants.Labels.Today_Sales}</Text>) :
                            i==1 ? (<Text style={styles.doller_title}>{constants.Labels.Last_30_days}</Text>) :
                            i==2 ? (<Text style={styles.doller_title}>{constants.Labels.Cash_Balance}</Text>) :
                            (<Text style={styles.doller_title}>{constants.Labels.Bank_Balance}</Text>)}
                        </View>
                    </View>
                </View >
        )
    }

    for(let i=0 ; i<6 ; i++){
        buttons.push(
            <View key={i}>
                    <TouchableOpacity onPress={() => getNetInfo(i)}>
                        <View style={styles.btnBox}>
                            <View style={styles.iconContainer}>
                                {i==0 ? (<SALES width={wp("8.5%")} height={wp("8.5%")}/>) :
                                i==1 ? (<APPROVAL width={wp("8.5%")} height={wp("8.5%")}/>) :
                                i==2 ? (<EXP_INCOME width={wp("8.5%")} height={wp("8.5%")}/>) :
                                i==3 ? (<EXP_PAYABLE width={wp("8%")} height={wp("8.5%")}/>) :
                                i==4 ? (<PAYMENT_COLLECTIONS width={wp("8.5%")} height={wp("8.5%")}/>) :
                                (<CASH_FLOW width={wp("8.5%")} height={wp("8.5%")}/>)}
                            </View>
                            <View style={styles.textContainer}>
                            {i==0 ? (<Text style={styles.btnText}>{constants.Labels.sales}</Text>) :
                                i==1 ? (<Text style={styles.btnText}>{constants.Labels.approval}</Text>) :
                                i==2 ? (<Text style={styles.btnText}>{constants.Labels.exp_income}</Text>) :
                                i==3 ? (<Text style={styles.btnText}>{constants.Labels.exp_payable}</Text>) :
                                i==4 ? (<Text style={styles.btnText}>{constants.Labels.payment_collections}</Text>) :
                                (<Text style={styles.btnText}>{constants.Labels.cash_flow}</Text>)}
                            </View>
                            <View style={styles.goContainer}>
                            <GO width={wp("8.5%")} height={wp("8.5%")}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
        )
    }
    return (
        <View style={styles.backgroundContainer}>
            <View style={{ flex: 0.9, }}>
                <View style={styles.topBlueContainer}>
                    <View style={styles.topBlueContentContainer}>
                        <View style={styles.profile_circle}>
                        <USER width="100%" height="100%"/>
                        </View>
                        <Text style={styles.userName}>Hi, {user}!</Text>
                    </View>
                </View>

                <View style={styles.restBlueContainer}>
                    <View style={styles.topWhiteContainer}>
                        {doller}
                    </View>
                </View>
            </View>
            <View style={styles.quickLinkContainer}>
                <Text style={styles.quickLink}>Quick Links</Text>
            </View>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.btnContainer}>
                {buttons}
                </View>
                <View style={{ width: wp('100%'), padding: wp('7%') }}></View>
            </ScrollView>
        </View>
    );
}