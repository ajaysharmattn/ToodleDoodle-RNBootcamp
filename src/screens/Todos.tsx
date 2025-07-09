import { StyleSheet, View } from "react-native";
import TodoList from "../components/TodoList";
import { useTodo } from "../utility/TodoContext";

export default function TodosScreen() {
    const { todos } = useTodo();

    return (
        <View style={styles.container}>
            <TodoList list={todos} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        padding: 20,
        backgroundColor: '#f9f9f9'
    }
});
