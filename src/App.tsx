import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Navigator from './utility/Navigator';
import { TodoProvider } from './utility/todo-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TodoProvider>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigator />
      </View>
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
