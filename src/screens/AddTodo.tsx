import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import { AppButton } from "../components/AppButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../utility/Navigator";
import { AppStrings, Colors, NavigatorScreenNames } from "../utility/Constants";
import { useAppDispatch } from "../utility/Store/Store";
import { addTodo } from "../utility/Store/AppSlice";


type AddTodoScreenNavigationProps = NativeStackScreenProps<RootStackParamList, NavigatorScreenNames.ADD_TODO>;

export default function AddTodoScreen({navigation}: AddTodoScreenNavigationProps) {
    const [todo, setTodo] = useState("");
    const dispatch = useAppDispatch();

    const addTodoFn = async () => {
        if(todo.trim() === "") return;
        dispatch(addTodo(todo));
        setTodo("");
        Alert.alert(AppStrings.ADD_TODO_ALERT_SUCCESS_TITLE, AppStrings.ADD_TODO_ALERT_SUCCESS_MESSAGE, [
            { text: AppStrings.ADD_TODO_ALERT_OK_TEXT, onPress: () => navigation.pop() }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{AppStrings.ADD_TODO_SCREEN_TITLE}</Text>
            <TextInput value={todo} onChangeText={text => setTodo(text)} placeholder={AppStrings.ADD_TODO_INPUT_PLACEHOLDER} style={styles.input} />
            <AppButton text={AppStrings.ADD_TODO_BUTTON_TEXT} onPress={addTodoFn} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PRIMARY,
        borderRadius: 40,
        padding: 20,
        margin: 20,
    },
    title: {
        fontSize: 18,
        color: Colors.TEXT_PRIMARY,
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
        backgroundColor: Colors.INPUT_BG,
        color: Colors.TEXT_PRIMARY,
    }
});
