import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
    },
    upperLayer: {
        height: hp('100%'),
        width: wp('100%')
    },
    Image: {
        height: hp('10%'),
        width: wp('10%'),
    },
    contentContainer: {
        height: hp('63.5%'),
        width: wp('100%'),
        backgroundColor: '#e6e7e8',
        marginTop: hp('9%'),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    labelBox: {
        position: "absolute",
        width: wp('93%'),
        //backgroundColor: '#fff',
        marginTop: hp('19%'),
        flexDirection: "row",
        marginLeft: wp('3.5%'),
        flexWrap: "wrap",
    },
    labelBoxInnerContainer: {
        width: '50%',
        //backgroundColor : 'red'
    },
    labelBoxInner: {
        width: '100%',
        //backgroundColor : 'green',
        padding: wp('1.5%')
    },
    box: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: wp('1%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    boxInnerTop : {
        width : '100%',
        //backgroundColor : 'red',
        justifyContent : "center",
        alignItems : "center",
        borderBottomWidth : 1,
        padding : wp('1.5%'),
        borderBottomColor : '#c2c2c2',
    },
    boxInnerBottom : {
        width : '100%',
        //backgroundColor : 'green',
        flexDirection : 'row',
        
    },
    boxInnerBottomLeft : {
        width : '30%',
        //backgroundColor : 'cyan',
        justifyContent : "center",
        alignItems : "center",
        padding : wp('1.5%'),
    },
    boxInnerBottomRight : {
        width : '70%',
        //backgroundColor : 'yellow',
        justifyContent : "center",
        alignItems : "center",
        padding : wp('1.5%'),
    },
    profile: {
        height: hp('10%'),
        width: hp('10%'),
        //backgroundColor: 'red',
        position: "absolute",
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#fff',
        top: hp('2%'),
        left: wp('40%'),
        alignItems: "center",
        justifyContent: "flex-end",
    },
    userText: {
        textAlign: "center",
        color: '#fff',
        fontSize: 18,
        marginTop: hp('13%'),
        fontWeight: "bold"
    },
    morePagesContianer: {
        width: wp('100%'),
        //backgroundColor : 'red',
        marginTop: '40%',
        alignItems: "center",
        padding: 10
    },
    morePagesBoxOutter: {
        height: hp('8%'),
        width: wp('90%'),
        backgroundColor: '#fff',
        padding: 5,
        marginBottom: '3.5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        flexDirection: "row"
    },
    InnerBox: {
        height: '100%',
        width: '60%',
        justifyContent: "center"
        //backgroundColor : 'green'
    },
    labelBoxText: {
        color: '#fff',
        fontSize: 11,
        marginBottom: 2,
        marginTop: 5
    },
    labelBoxDoller: {
        color: '#fff',
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
    },
    bottomText: {
        fontSize: 10
    }
})