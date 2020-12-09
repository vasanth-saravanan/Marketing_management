import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor : '#f0ecfd'
    },
    header: {
        width : wp('100%'),
        height : hp('8.5%'),
        backgroundColor: "#00a1e5",
        padding: "2%",
        flexDirection: "row"
    },
    headerLeft: {
        height: "100%",
        width: "10%",
        //backgroundColor : "cyan",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 0
    },
    headerRight: {
        height: "100%",
        width: "100%",
        //backgroundColor : "green",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    salesDetails: {
        fontSize: 20,
        color: "#fff",
    },
    BoxContainer: {
        flex: 1,
        backgroundColor: "#fff",
        borderRightWidth: 1,
        borderRightColor: "#00a1e5",
        justifyContent: "center",
        alignItems: "center"
    },
    innerText: {
        color: "#000",
        fontSize: 15,
        fontWeight: "bold"
    },
    innerTextActive: {
        color: "#00a1e5",
        fontSize: 15,
        fontWeight: "bold"
    },
    totalAmountBoxContainer : {
        height : hp('15%'),
        width : wp('100%'),
        //backgroundColor : 'red',
        alignItems : "center",
        justifyContent : "center",
        padding : '5%'
    },
    totalAmountBox : {
        height : '75%',
        width : '70%',
        backgroundColor : '#25ee02',
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "center",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    TotalAmount : {
        color : '#fff',
        fontSize : 20
    },
    bodyContainer : {
        height : hp('67%'),
        width : wp('100%'),
       // backgroundColor : 'cyan',
        alignItems : "center"
    },
    noResultContainer : {
        height : hp("10%"),
        width : wp('100%'),
        alignItems : "center",
        justifyContent : "center",
        //backgroundColor : 'red',
    },
    noResult : {
        color : '#181818',
        fontSize : 20
    },
    dateContainer : {
        width : wp('95%'),
        flexDirection : "row",
        justifyContent : "center",
        marginLeft : wp('2%'),
        padding : hp('.5%'),
        
    },
    dateflex : {
        width : '50%',
        //backgroundColor : 'green',
        justifyContent : "center",
        alignItems : "flex-start"
    },
    date : {
        fontSize : 12,
        color : '#02ABEE'
    },
    totalamount : {
        fontSize : 12,
        color : '#02ABEE'
    },
    amountflex : {
        width : '50%',
        //backgroundColor : 'yellow',
        justifyContent : "center",
        alignItems : "flex-end"
    },
    companyContainer : {
        width : wp('100%'),
        backgroundColor : '#fff',
        flexDirection : "row",
        padding : wp('3%')
    },
    companyflex1 : {
        width : '10%',
        justifyContent : "center",
        //backgroundColor : 'red'
    },
    companyflex2 : {
        width : '65%',
        justifyContent : "center"
    },
    companyflex21 : {
        width : '100%',
    },
    companyflex22 : {
        width : '100%',
    },
    companyflex3 : {
        width : '25%',
        justifyContent : "center",
        alignItems : "flex-end"
    },
    id : {
        fontSize : 13,
        color : '#9d9d9d'
    },
    customer : {
        fontSize : 14,
        fontWeight : "bold"
    },
    amount : {
        fontSize : 14,
        color : '#25ee02'
    }
})