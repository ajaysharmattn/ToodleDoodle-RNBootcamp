import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import AddTodoScreen from '../screens/AddTodo';
import TodosScreen from '../screens/Todos';

export type RootStackParamList = {
  Home: undefined;
  AddTodo: undefined;
  Todos: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddTodo" component={AddTodoScreen} />
      <Stack.Screen name="Todos" component={TodosScreen} />
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
