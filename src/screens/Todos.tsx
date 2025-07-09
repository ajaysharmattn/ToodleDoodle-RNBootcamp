import { StyleSheet, View } from "react-native";
import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";
import { RootState } from "../utility/Store/Store";
import { useMemo } from "react";

export default function TodosScreen() {
    const currentUserId = useSelector((state: RootState) => state.appReducer.currentUserPhone);
    const allTodos = useSelector((state: RootState) => state.appReducer.todos);
    const todos = useMemo(() => (
        currentUserId !== null
            ? allTodos
                  .filter(todo => Object.keys(todo).includes(currentUserId))
                  .flatMap(todo => todo[currentUserId])
            : []
    ), [allTodos, currentUserId]);

    console.log('Todos:', todos);

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
