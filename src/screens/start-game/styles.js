import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 15,
    },
    title: {
        fontSize: 18,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 20,
        fontFamily: 'Rubik-Bold',
    },
    inputContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    input: {
        fontFamily: 'Rubik-Regular',
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    label:{
        fontSize: 15,
        color: colors.text,
        paddingVertical: 4, 
        textAlign: 'center',
        fontFamily: 'Rubik-Regular',
    },
    confirmedContainer: {
        width: '70%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
    },
    confirmedTitle: {
        fontSize: 16,
        fontFamily: 'Rubik-Italic',

    }

})