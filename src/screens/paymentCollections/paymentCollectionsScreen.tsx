import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, ActivityIndicator,ToastAndroid } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SegmentedControl from '@react-native-community/segmented-control';
import NetInfo from "@react-native-community/netinfo";

//react hook
import { useDispatch, useSelector } from 'react-redux'

//styles
import { styles } from '../salesScreen/styles'

//services
import * as Action from '../../redux/Payment_Collections/Action'

//constants
import * as constants from '../../constants'

//root store
import { RootStore } from '../../redux/store'


export function PaymentCollectionsScreen({ navigation } : any) {

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
  
    const getNetInfo = (CompanyUrl : any, BusinessUnitId : any, pageno : number , SetState : any) => {
      // To get the network state once
      NetInfo.fetch().then((status) => {
          if(status.isConnected == true){
            dispatch(Action.getPaymentCollections(CompanyUrl, BusinessUnitId, pageno, SetState))
          }else {
              ToastAndroid.show(constants.Labels.network_error, ToastAndroid.SHORT)
          }
      });
    };


    useEffect(() => {
        dispatch(Action.getPaymentCollections(CompanyUrl, BusinessUnitId, 0, SetState))
    }, [])

    const [state, setState] = useState({
        selectedIndex: 0,
        status: false,
        TotalAmount : 0.00,
    })

    //for local
    const SetState = (index : any, STATUS : any, Totalamount : number) => {
        setState({ ...state, status: STATUS, selectedIndex: index , TotalAmount : Totalamount})
    }

    const CompanyUrl = useSelector((state: RootStore) => state.companyCode.Code_Data?.CompanyUrl)

    //get user from login redux store
    const BusinessUnitId = useSelector((state: RootStore) => state.login.Login_Data?.businessUnitId)
    const sales = useSelector((state: RootStore) => state.sales.Sales_Data)
    const loading = useSelector((state: RootStore) => state.sales.loading)
    const TotalAmount = useSelector((state: RootStore) => state.sales.TAMT)

    //dispatch
    const dispatch = useDispatch();

    function point(value : any) {
        var n = value.toFixed(2);
        var str = n.toString();
        return str;
    }

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.header}>
                <View style={styles.headerRight}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign
                                name={constants.Icons.left_chevron}
                                size={25}
                                color= {constants.Colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.salesDetails}>{constants.Labels.payment_collections}</Text>
                </View>
            </View>
            <SegmentedControl
                values={['1 D', '7 D', '1 M', '3 M', '1 Y']}
                selectedIndex={state.selectedIndex}
                tintColor={constants.Colors.themecolor}
                fontStyle={{ color: constants.Colors.black , fontSize: 15,}}
                activeFontStyle={{ color: constants.Colors.white , fontSize: 17 }}
                onChange={(event) => {
                    setState({ ...state, selectedIndex: event.nativeEvent.selectedSegmentIndex });
                    getNetInfo(CompanyUrl, BusinessUnitId, event.nativeEvent.selectedSegmentIndex, SetState) 
                }}
            />
            <View style={styles.totalAmountBoxContainer}>
                    <View style={styles.totalAmountBox}>
                        <Text style={styles.TotalAmount}>$ {Action.numberWithCommas(TotalAmount)}</Text>
                    </View>
            </View>
            {loading == true ? (<ActivityIndicator size="large" color={constants.Colors.light_blue} />) :
                state.status == true ? (
                    <View style={styles.bodyContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {sales?.map((data, key) => {
                                return (
                                    <View key={key}>

                                        <View style={styles.dateContainer}>
                                            <View style={styles.dateflex}>
                                                <Text style={styles.date}>{Action.dateFormat(data.Date)}</Text>
                                            </View>
                                            <View style={styles.amountflex}>
                                                <Text style={styles.totalamount}>$ {Action.numberWithCommas(point(data.Totalamount))}</Text>
                                            </View>
                                        </View>
                                        {data.list.map((element, key) => {
                                            return (
                                                <View key={key}>
                                                    <View style={styles.companyContainer}>
                                                        <View style={styles.companyflex1}>
                                                            <FontAwesome
                                                                name={constants.Icons.User}
                                                                size={25}
                                                                color={constants.Colors.themecolor}
                                                            />
                                                        </View>
                                                        <View style={styles.companyflex2}>
                                                            <View style={styles.companyflex21}>
                                                                <Text style={styles.customer}>{element.CustomerName}</Text>
                                                            </View>
                                                            <View style={styles.companyflex22}>
                                                                <Text style={styles.id}>{element.PaymentNo}</Text>
                                                            </View>
                                                        </View>
                                                        <View style={styles.companyflex3}>
                                                            <Text style={styles.amount}>$ {Action.numberWithCommas(point(element.Amount))}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        })}

                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>
                ) : (
                        <View style={styles.bodyContainer}>
                            <View style={styles.noResultContainer}>
                                <Text style={styles.noResult}>{constants.Labels.no_results}</Text>
                            </View>
                        </View>
                    )
            }
        </View>
    );
}

