import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
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
    textSwitchPhone: {
        color: "#288cff",
        paddingTop: 7,
        alignSelf: 'stretch',
    },
    textFooter: {
        paddingRight: 25,
        color: "#288cff",
        fontSize: 16,
    },
    textFooter2: {
        color: "#288cff",
        fontSize: 16,
    },
    textLink: {
        color: '#0066cc',
        textDecorationLine: 'underline',
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
    lineViewDropDown: {
        height: 1,
        backgroundColor: '#cecece58',
        alignSelf: 'stretch',
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
    },


    dropdownMain: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 30,
    },
    dropdownMain2: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 10,
    },

    dropdownWrapper: {
        flex: 1,
    },
    dropdownWrapper2: {
        flex: 1,
    },
    dropdown: {
        height: 50,
        backgroundColor: '#fff',
    },
    dropdownTextSelected: {
        fontSize: 16,
        color: '#7a7a7a',
    },
    dropdownMenuList: {
        borderRadius: 8,
        backgroundColor: '#ededed',
    },
    dropdownItemText: {
        fontSize: 16,
        color: '#595959',
    },

    checkboxSection: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 20,
        marginBottom: 10,
    },
    checkboxSection2: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginBottom: 30,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderColor: '#8a8a8a',
        backgroundColor: '#ffffff',
    },
    checkboxText: {
        marginLeft: 10,
        fontSize: 14,
        color: '#595959',
    },
})