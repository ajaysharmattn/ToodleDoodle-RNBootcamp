import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { AppStrings, Colors } from '../utility/Constants';
import { RootState } from "../utility/Store/Store";
import { useState } from "react";
import { updateUserDetail } from "../utility/Store/AppSlice";
import { setUserData } from "../utility/Store/UserSlice";
import useAuth from "../utility/useAuth";

export default function ProfileScreen() {
    const dispatch = useDispatch();
    const username = useSelector((state: RootState) => state.userReducer.username);
    const email = useSelector((state: RootState) => state.userReducer.email);
    const phone = useSelector((state: RootState) => state.userReducer.phone);

    const {logoutUserFunction} = useAuth();

    const [editUsername, setEditUsername] = useState(username);
    const [editEmail, setEditEmail] = useState(email);
    const [editing, setEditing] = useState(false);

    const handleSave = () => {
        dispatch(updateUserDetail({option: 'username', data: editUsername}));
        dispatch(updateUserDetail({option: 'email', data: editEmail}));
        dispatch(setUserData({
            phone: phone,
            email: editEmail,
            username: editUsername,}))
        setEditing(false);
        Alert.alert(AppStrings.PROFILE_UPDATED);
    };

    const handleLogout = () => {
        logoutUserFunction();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{AppStrings.PROFILE_SCREEN_TITLE}</Text>
            <View style={styles.infoRow}>
                <Text style={styles.label}>{AppStrings.PROFILE_USERNAME_LABEL}</Text>
                {editing ? (
                    <TextInput
                        style={styles.input}
                        value={editUsername}
                        onChangeText={setEditUsername}
                        autoCapitalize="none"
                    />
                ) : (
                    <Text style={styles.value}>{username || '-'}</Text>
                )}
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>{AppStrings.PROFILE_PHONE_LABEL}</Text>
                <Text style={styles.value}>{phone || '-'}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.label}>{AppStrings.PROFILE_EMAIL_LABEL}</Text>
                {editing ? (
                    <TextInput
                        style={styles.input}
                        value={editEmail}
                        onChangeText={setEditEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                ) : (
                    <Text style={styles.value}>{email || '-'}</Text>
                )}
            </View>
            <View>
                {editing ? (
                    <Button title="Save" onPress={handleSave} />
                ) : (
                    <Button title="Edit" onPress={() => setEditing(true)} />
                )}
            </View>
            <View>
                <Button title="Logout" onPress={handleLogout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND,
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 32,
        color: Colors.PROFILE_TITLE,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 18,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    label: {
        fontSize: 18,
        color: Colors.LABEL,
        fontWeight: '600',
        width: 100,
    },
    value: {
        fontSize: 18,
        color: Colors.VALUE,
        fontWeight: '400',
        flex: 1,
        textAlign: 'right',
    },
    input: {
        fontSize: 18,
        color: Colors.VALUE,
        backgroundColor: Colors.INPUT_BG,
        borderWidth: 1,
        borderColor: Colors.BORDER,
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        flex: 1,
        textAlign: 'right',
    },
});