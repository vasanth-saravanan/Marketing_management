import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    backgorundContainer: {
        flex: 1,
        backgroundColor: "#e7e2e9",
    },
    contentContainer: {
        padding : '5%',
        width: wp('100%') ,
        alignItems: "center",
        marginTop : hp('25%'),
       // backgroundColor : "red"
    },
    adaptiveContainer: {
        flexDirection: "row",
    },
    error: {
        width: wp('100%'),
        padding: '2%',
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor : 'cyan'
    },
    enterCode: {
        color: "red",
        fontSize: 14,
        fontFamily : "NunitoSans-SemiBold"
    },
    adaptive: {
        color: "#0075c8",
        fontSize: 27,
        fontFamily : "NunitoSans-SemiBold"
    },
    bizBi: {
        color: "#009900",
        fontSize: 27,
        fontWeight: "100",
        fontFamily : "NunitoSans-SemiBold"
    },
    companyCodeText: {
        fontSize: 15,
        color: "#000",
        fontFamily : "NunitoSans-SemiBold"
    },
    companyCodeTextContainer: {
        paddingBottom: '2%',
    },
    inputBoxContainer: {
        padding : '.5%',
        width: wp('100%'),
       // backgroundColor : "green",
        alignItems: "center",
        justifyContent: "center"
    },
    inputBox: {
        width: wp('95%'),
        paddingVertical: 0,
        paddingHorizontal: wp('3%'),
        height: hp('7.5%'),
        margin: 0,
        fontSize: 15.5,
        borderWidth: 1.5,
        borderColor: '#009900',
        backgroundColor: 'white',
      
    },
    btnContainer: {
        paddingTop: hp('2%'),
        width : wp('100%'),
        //backgroundColor : 'red',
        alignItems : "center"
    },
    touch: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('16%'),
        height: wp('16%'),
        backgroundColor: '#009900',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    loadingContainer : {
        position : 'absolute', 
        height : '20%',
        width : '100%',
        //backgroundColor : 'red',
        marginTop : '15.5%'
    },
});