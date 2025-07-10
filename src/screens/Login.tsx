import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import { AppButton } from "../components/AppButton";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../utility/Navigator';
import { NavigatorScreenNames, Colors, AppStrings } from '../utility/Constants';
import useAuth from '../utility/useAuth';

type LoginScreenNavigationProps = NativeStackScreenProps<AuthStackParamList, NavigatorScreenNames.LOGIN>;

export default function LoginScreen({navigation}: LoginScreenNavigationProps) {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");;
    const {loginUserFunction} = useAuth();

    const handleLogin = () => {
        if (!phone || !password) {
            Alert.alert(AppStrings.LOGIN_ERROR_TITLE, AppStrings.LOGIN_ERROR_MESSAGE);
            return;
        }
        loginUserFunction({ phone, password })
        setPhone("");
        setPassword("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{AppStrings.LOGIN_SCREEN_TITLE}</Text>
            <TextInput
                style={styles.input}
                placeholder={AppStrings.ADD_TODO_INPUT_PLACEHOLDER}
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder={AppStrings.LOGIN_BUTTON_TEXT}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#888"
            />
            <AppButton text={AppStrings.LOGIN_BUTTON_TEXT} onPress={handleLogin} />
            <AppButton text={AppStrings.LOGIN_REGISTER_SWITCH_TEXT} onPress={()=>navigation.replace(NavigatorScreenNames.SIGNUP)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.PRIMARY,
        borderRadius: 40,
        margin: 20,
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: Colors.TEXT_PRIMARY,
        marginBottom: 24,
        padding: 10,
    },
    input: {
        width: "100%",
        height: 48,
        borderColor: Colors.BORDER,
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 16,
        paddingHorizontal: 18,
        fontSize: 16,
        backgroundColor: Colors.INPUT_BG,
        color: '#1b1616',
    },
    buttonWrapper: {
        width: '100%',
        marginVertical: 6,
        borderRadius: 20,
        overflow: 'hidden',
    },
});