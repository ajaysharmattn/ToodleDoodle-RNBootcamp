import { StyleSheet, Text, View } from "react-native";
import TodoList from "../components/TodoList";
import { useTodo } from "../utility/todo-context";

export default function TodosScreen() {
    const { todos } = useTodo();

    if (!todos || todos.length === 0) {
        return (
            <View>
                <Text>No Todos available. Please add some!</Text>
            </View>
        );
    }

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
