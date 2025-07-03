import { StyleSheet, Text, TouchableOpacity } from "react-native"

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
        backgroundColor: '#e6dcdc', 
        padding: 20,
        borderRadius: 40,
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    buttonText: {   
        color: '#1b1616',
        fontSize: 16,
        fontWeight: 'bold',
    }
})