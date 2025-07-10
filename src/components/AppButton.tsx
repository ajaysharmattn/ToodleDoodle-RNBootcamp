import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { Colors } from "../utility/Constants"

export const AppButton = ({text, onPress}: {text: string, onPress: () => void}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.PRIMARY, 
        padding: 20,
        borderRadius: 40,
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: Colors.BORDER,
    },
    buttonText: {   
        color: Colors.TEXT_PRIMARY,
        fontSize: 16,
        fontWeight: 'bold',
    }
})