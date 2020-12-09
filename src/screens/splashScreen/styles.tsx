import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    backContainer : {
        flex : 1,
        backgroundColor : "#fff",
        alignItems : "center",
    },
    contentContainer : {
        height : "50%",
        width : "80%",
        alignItems : "center",
        justifyContent : "center"
    },
    logoContainer : {
        height : "70%",
        width : "100%",
        alignItems : "center",
        justifyContent : "flex-end"
    },
    textContainer : {
        height : "30%",
        width : "100%",
        alignItems : "center",
    },
    text : {
        paddingTop : 20,
        fontSize : 23,
        color :"#fff",
        fontWeight : "bold",
        fontFamily : "MomcakeBold"
        },
    logo : {
        height : 100,
        width : 100,
    }
});