import { StyleSheet, View } from "react-native"
import TodoItem from "./TodoItem"

export default function TodoList({list}: {list: string[]}) {
    return(
        <View style={styles.container}>
            {list.map((todo, index) => (
                <TodoItem key={index} item={todo} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6dcdc',
        borderRadius: 40,
        padding: 20,
    }
})