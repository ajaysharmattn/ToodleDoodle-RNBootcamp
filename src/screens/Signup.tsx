import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../utility/Navigator';
import { NavigatorScreenNames, Colors } from '../utility/Constants';
import { AppButton } from '../components/AppButton';
import useAuth from '../utility/useAuth';

type SignupScreenNavigationProps = NativeStackScreenProps<AuthStackParamList, NavigatorScreenNames.SIGNUP>;

export default function SignupScreen({navigation}: SignupScreenNavigationProps) {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {registerUserFunction} = useAuth();

  const handleUserSignup = () => {
    registerUserFunction({phone: phoneNumber, password});
    setPhoneNumber('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        textContentType="telephoneNumber"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        textContentType="password"
        value={password}
        onChangeText={text => setPassword(text)}
        placeholderTextColor="#888"
      />
      <AppButton text="Register" onPress={handleUserSignup} />
      <AppButton text="Already have an account? Login" onPress={() => navigation.replace(NavigatorScreenNames.LOGIN)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    margin: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1b1616',
    marginBottom: 20,
    textAlign: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    backgroundColor: '#f7f5fa',
    color: '#1b1616',
  },
});
