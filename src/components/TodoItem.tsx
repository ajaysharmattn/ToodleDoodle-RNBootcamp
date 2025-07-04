import { StyleSheet, Text, View } from "react-native";

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
        borderBottomColor: '#ccc'
    },
    todoText: {
        fontSize: 16,
        color: '#1b1616'
    }
})
