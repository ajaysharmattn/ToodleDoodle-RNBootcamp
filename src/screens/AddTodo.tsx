import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import { AppButton } from "../components/AppButton";
import { useTodo } from "../utility/todo-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../utility/Navigator";


type AddTodoScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'AddTodo'>;

export default function AddTodoScreen({navigation}: AddTodoScreenNavigationProps) {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const addTodoFn = async () => {
        if(todo.trim() === "") return;
        addTodo(todo.trim());
        setTodo("");
        Alert.alert("Todo Added", "Your todo has been added successfully!", [
            { text: "OK", onPress: () => navigation.navigate('Home') }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a new Todo 😉</Text>
            <TextInput value={todo} onChangeText={text => setTodo(text)} placeholder="Enter your todo here" style={styles.input} />
            <AppButton text="Add Todo" onPress={addTodoFn} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6dcdc',
        borderRadius: 40,
        padding: 20,
        margin: 20,
    },
    title: {
        fontSize: 18,
        color: '#1b1616',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 0,
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 18,
        marginVertical: 12,
        fontSize: 17,
        backgroundColor: '#f7f5fa',
        color: '#1b1616'
    }
});
