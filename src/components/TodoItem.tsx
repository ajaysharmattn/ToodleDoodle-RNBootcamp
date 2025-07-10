import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utility/Constants";

export default function TodoItem({item}: {item: string}) {
    return (
        <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    todoItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.BORDER
    },
    todoText: {
        fontSize: 16,
        color: Colors.TEXT_PRIMARY
    }
})
