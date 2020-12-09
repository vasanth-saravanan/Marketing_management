//it takes height and width of mobile screen automatically
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//it is core component of React native
import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        //backgroundColor: "red",
        marginBottom: hp("0%")
    },
    footer: {
        padding: hp("2.5%"),
        //backgroundColor: "yellow",
        borderTopWidth: 1,
        borderTopColor: "#c1c1c1",
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        height: hp('10%'),
        width: wp('100%'),
        //backgroundColor: "green",
        alignItems: "flex-end",
    },
    menuIconContainer: {
        height: hp('10%'),
        width: wp("20%"),
        //backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center"
    },
    headingContainer: {
        padding: hp("3%"),
        width: wp("100%"),
       // backgroundColor: "cyan",
        alignItems: "center",
        justifyContent: "center"
    },
    heading: {
        color: "#00a1e5",
        fontSize: 25,
        fontFamily: "NunitoSans-Bold",
        fontWeight: "bold"
    },
    errorContainer: {
        padding : '2%',
        width : '100%',
        justifyContent : "center",
        alignItems : "center"
        //backgroundColor: 'green'
    },
    err_text: {
        color: "red",
        fontSize: 14,
        fontFamily: "NunitoSans-Bold",
    },
    inputContainer: {
        width: wp("100%"),
       // backgroundColor: "orange",
        alignItems: "center",
    },
    textInput: {
        width: wp("80%"),
        borderBottomColor: "#00a1e5",
        borderBottomWidth: 2,
        paddingHorizontal: 30,
        marginBottom: hp(".5%"),
    },
    iconUser: {
        position: "absolute",
        left: '10%',
        top: '7%',
    },
    iconPass: {
        position: "absolute",
        left: '10%',
        top: '45%',
    },
    checkBoxContainer: {
        width: wp("100%"),
       // backgroundColor: "cyan",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: wp('7.5%'),
    },
    buttonContainer: {
        height: hp("15%"),
        width: wp("100%"),
        //backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    gradient: {
        width: wp('80%'),
        height: "65%",
        borderRadius: wp('100%'),
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: "#ffffff",
        fontFamily: 'JosefinSansLight-ZVELL',
        //fontFamily : 'RobotoSlabMedium-vmAEA',
        //fontFamily : 'JosefinSansBold',
        fontSize: 15,
        fontWeight: "bold"
    },
    adaptive: {
        fontSize: 15,
        color: "#4000eb"
    },
    loadingContainer : {
        position : 'absolute', 
        height : '20%',
        width : '100%',
        //backgroundColor : 'red',
        marginTop : '25.5%',
        alignItems : "center",
        justifyContent : "center"
    },
    eye : {
        position: "absolute",
        top : '49%',
        left : wp('85%')
    },
    modalView: {
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 40,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop : hp('100%') - hp('30%')
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 2,
        padding: 10,
        elevation: 2,
        marginTop : 20
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 5,
        textAlign: "center",
        color : "#000",
        fontSize : 15,
        fontFamily : "NunitoSans-SemiBold"
      },
      
})