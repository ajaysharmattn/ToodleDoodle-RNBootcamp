import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import AddTodoScreen from '../screens/AddTodo';
import TodosScreen from '../screens/Todos';
import { NavigatorScreenNames } from './Constants';

export type RootStackParamList = {
  [NavigatorScreenNames.HOME]: undefined;
  [NavigatorScreenNames.ADD_TODO]: undefined;
  [NavigatorScreenNames.TODOS]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigatorScreenNames.HOME} component={HomeScreen} />
      <Stack.Screen name={NavigatorScreenNames.ADD_TODO} component={AddTodoScreen} />
      <Stack.Screen name={NavigatorScreenNames.TODOS} component={TodosScreen} />
    </Stack.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
