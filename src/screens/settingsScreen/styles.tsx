import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        marginBottom : "20%"
    },
    topContainer: {
        height: "50%",
        width: "100%",
        backgroundColor: "pink"
    },
    text: {
        color: "#00a1e5",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "7%",
        fontFamily : "NunitoSans-SemiBold"
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "#00a1e5",
        width: "90%",
        marginLeft: "5%",
        fontSize : 15
    },
    name: {
        color: "gray",
        fontSize: 15,
        marginTop: "2%",
        marginLeft: "5%",
        fontFamily : "NunitoSans-SemiBold"
    },
    invalidCode : {
        padding : "2%",
        top : "1%",
        textAlign : 'center',
        color : "red",
        fontSize : 15,
        fontFamily : "NunitoSans-SemiBold"
    },
    username : {
        color: "blue",
        fontSize: 18,
        marginTop: "15%",
        marginLeft: "5%",
        fontFamily : "NunitoSans-SemiBold"
    },
    backIconContainer: {
        height: "10%",
        width: "20%",
        justifyContent: "center",
        marginLeft: "5%",
        marginTop : "5%"
    },
    buttonContainer: {
        width: "100%",
        height: "20%",
        flexDirection: "row",
        marginTop : "5%"
    },
    btncont1: {
        flex: 1,
        justifyContent: "center",
        marginLeft: "5%"
    },
    btncontCenter: {
        flex: 1
    },
    btncont2: {
        flex: 1,
        justifyContent: "center",
        marginRight: "5%"
    },
    btn : {
        fontFamily : "NunitoSans-SemiBold"
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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
        fontSize : 23,
        fontFamily : "NunitoSans-SemiBold"
      },
      versionText: {
        marginBottom: 20,
        textAlign: "center",
        color : "#000",
        fontSize : 15,
      },
      crText: {
        textAlign: "center",
        color : "#959595",
        fontSize : 14,
      },
      allrText: {
        marginTop : 30,
        textAlign: "center",
        color : "#959595",
        fontSize : 14,
      },
      loadingContainer : {
        position : 'absolute', 
        height : '20%',
        width : '100%',
        //backgroundColor : 'red',
        marginTop : '28%'
    }
})