import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../utility/Navigator";
import { NavigatorScreenNames, Colors } from "../utility/Constants";
import { AppButton } from "../components/AppButton";
import useAuth from "../utility/useAuth";

type LoginScreenNavigationProps = NativeStackScreenProps<AuthStackParamList, NavigatorScreenNames.LOGIN>;

export default function LoginScreen({navigation}: LoginScreenNavigationProps) {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");;
    const {loginUserFunction} = useAuth();

    const handleLogin = () => {
        if (!phone || !password) {
            Alert.alert("Error", "Please enter both phone and password.");
            return;
        }
        loginUserFunction({ phone, password })
        setPhone("");
        setPassword("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#888"
            />
            <AppButton text="Login" onPress={handleLogin} />
            <AppButton text="Don't have an account? Register" onPress={()=>navigation.replace(NavigatorScreenNames.SIGNUP)} />
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
        color: '#1b1616',
        marginBottom: 24,
        padding: 10,
    },
    input: {
        width: "100%",
        height: 48,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 16,
        paddingHorizontal: 18,
        fontSize: 16,
        backgroundColor: '#f7f5fa',
        color: '#1b1616',
    },
    buttonWrapper: {
        width: '100%',
        marginVertical: 6,
        borderRadius: 20,
        overflow: 'hidden',
    },
});