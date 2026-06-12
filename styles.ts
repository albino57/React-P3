import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        paddingTop: 60,
        paddingHorizontal: 30,
    },

    textButtonLogin: {
        color: "#ffffff",
        fontSize: 18,
    },
    textbuttonLocalConnec: {
        color: "#288cff",
        fontSize: 18,
    },
    textEmoje: {
        paddingRight: 20,
    },
    textInput: {
        fontSize: 16,
    },
    textSwitchPhone:{
        color: "#288cff",
        paddingTop: 7,
        alignSelf: 'stretch',
    },
    textFooter:{
        paddingRight: 25,
        color: "#288cff",
        fontSize: 16,
    },
    textFooter2:{
        color: "#288cff",
        fontSize: 16,
    },

    buttonLogin: {
        backgroundColor: "#288cff",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        alignSelf: "stretch",
    },
    buttonLocalConnec: {
        backgroundColor: "#84afff5d",
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#288cff",
        alignItems: "center",
        marginTop: 20,
        alignSelf: "stretch",
    },

    image: {
        resizeMode: 'contain',
        width: 450,
        height: 225,
    },

    lineView: {
        height: 1,
        backgroundColor: '#cecece58',
        alignSelf: 'stretch',
        marginTop: 10,
    },

    View1: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    View2: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 30,
    },
    ViewFooter: {
        flexDirection: 'row',
        paddingTop: 45,
    }
})