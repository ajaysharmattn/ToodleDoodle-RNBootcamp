import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import AddTodoScreen from '../screens/AddTodo';
import TodosScreen from '../screens/Todos';
import ProfileScreen from '../screens/Profile';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import { NavigatorScreenNames } from './Constants';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import useAuth from './useAuth';

export type RootStackParamList = {
  [NavigatorScreenNames.HOME]: undefined;
  [NavigatorScreenNames.ADD_TODO]: undefined;
  [NavigatorScreenNames.TODOS]: undefined;
  [NavigatorScreenNames.PROFILE]: undefined;
};

export type AuthStackParamList = {
  [NavigatorScreenNames.LOGIN]: undefined;
  [NavigatorScreenNames.SIGNUP]: undefined;
}

const AppStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

function AppStackNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name={NavigatorScreenNames.HOME} component={HomeScreen} options={{headerLeft: HeaderLeft}} />
      <AppStack.Screen name={NavigatorScreenNames.ADD_TODO} component={AddTodoScreen} />
      <AppStack.Screen name={NavigatorScreenNames.TODOS} component={TodosScreen} />
      <AppStack.Screen name={NavigatorScreenNames.PROFILE} component={ProfileScreen} />
    </AppStack.Navigator>
  );
}

function HeaderLeft() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(NavigatorScreenNames.PROFILE)}>
      <Text style={headerLeftStyles.text}>Profile</Text>
    </TouchableOpacity>
  );
}

const headerLeftStyles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={NavigatorScreenNames.LOGIN} component={LoginScreen} options={{headerShown: false}}/>
      <AuthStack.Screen name={NavigatorScreenNames.SIGNUP} component={SignupScreen} options={{headerShown: false}}/>
    </AuthStack.Navigator>
  )
}

export default function Navigator() {
  const {checkIsAuthenticated} = useAuth();

  return (
    <NavigationContainer>
      {checkIsAuthenticated() ? <AppStackNavigator/> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
