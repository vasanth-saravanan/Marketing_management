import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    backgroundContainer: {
        height: hp('100%'),
        width: wp('100%'),
    },
    topBlueContainer: {
        width: wp('100%'),
        backgroundColor: '#00a1e5',
        paddingTop: wp('7%'),
        paddingBottom: wp('2%')
    },
    restBlueContainer: {
        width: wp('100%'),
        backgroundColor: '#00a1e5',
        paddingTop: wp('7%'),
        paddingBottom: wp('8%'),
    },
    topBlueContentContainer: {
        width: wp('90%'),
        flexDirection: "row",
        flexWrap: 'wrap',
        marginTop: wp('1%'),
        marginLeft: wp('10%')
    },
    profile_circle: {
        height: wp('10%'),
        width: wp('10%'),
        backgroundColor: "white",
        borderRadius: wp('100%'),
        alignItems: "center",
        justifyContent: "center",
    },
    userName: {
        color: '#fff',
        fontSize: wp('5.5%'),
        paddingTop: wp('1%'),
        paddingLeft: wp('2%')
    },
    topWhiteContainer: {
        width: wp('100%'),
        // backgroundColor : 'red',
        position: "absolute",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    boxOutter: {
        width: '50%',
        padding: '3%'
    },
    boxInner: {
        backgroundColor: '#fff',
        borderRadius: wp('2%'),
        borderBottomWidth: wp('1%'),
        borderBottomColor: '#00a1e5',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    boxInnerTop: {
        // backgroundColor: 'pink',
        padding: '7%'
    },
    boxInnerBottom: {
        // backgroundColor: 'green',
        padding: '7%'
    },
    quickLinkContainer: {
        width: wp('100%'),
        // backgroundColor : 'red',
        paddingLeft : wp('3%'),
        paddingBottom : wp('1%')
    },
    btnContainer: {
        width: wp('100%'),
        padding: wp('3%'),
        //backgroundColor: 'red',
        marginBottom: wp('2%')
    },
    btnBox: {
        width: wp('94%'),
        backgroundColor: '#fff',
        marginBottom: '5%',
        flexDirection: "row",
        borderRadius: wp('2%'),
        borderBottomWidth : wp('1%'),
        borderBottomColor : '#00a1e5',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    iconContainer: {
        flex: 0.5,
        //backgroundColor : 'yellow',
        alignItems: "center",
        padding: '2%',
        justifyContent: "center"
    },
    textContainer: {
        flex: 2,
        justifyContent : "center"
        // backgroundColor : 'orange'
    },
    goContainer: {
        flex: 0.5,
        //backgroundColor : 'pink'
        alignItems : "center",
        justifyContent : "center"
    },
    doller : {
        fontSize : wp('4%'),
        color : '#00a1e5'
    },
    doller_title : {
        fontSize : wp('4%'),
        color : '#000'
    },
    quickLink : {
        fontSize : wp('5%'),
        color : '#00a1e5',
    },
    btnText : {
        fontSize : wp('4.5%'),
        color : '#000'
    }
})