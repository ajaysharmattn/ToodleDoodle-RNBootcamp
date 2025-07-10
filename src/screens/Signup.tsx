import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../utility/Navigator';
import { NavigatorScreenNames, Colors, AppStrings } from '../utility/Constants';
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
      <Text style={styles.title}>{AppStrings.REGISTER_SCREEN_TITLE}</Text>
      <TextInput
        style={styles.input}
        placeholder={AppStrings.ADD_TODO_INPUT_PLACEHOLDER}
        textContentType="telephoneNumber"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder={AppStrings.LOGIN_BUTTON_TEXT}
        textContentType="password"
        value={password}
        onChangeText={text => setPassword(text)}
        placeholderTextColor="#888"
      />
      <AppButton text={AppStrings.REGISTER_BUTTON_TEXT} onPress={handleUserSignup} />
      <AppButton text={AppStrings.REGISTER_LOGIN_SWITCH_TEXT} onPress={() => navigation.replace(NavigatorScreenNames.LOGIN)} />
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
    color: Colors.TEXT_PRIMARY,
    marginBottom: 20,
    textAlign: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: Colors.BORDER,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    backgroundColor: Colors.INPUT_BG,
    color: Colors.TEXT_PRIMARY,
  },
});
