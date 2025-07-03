import { FlatList, StyleSheet, Text, View } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({ list }: { list: string[] }) {
  return (
    <FlatList
      style={styles.container}
      data={list}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <TodoItem item={item} />}
      contentContainerStyle={{ paddingBottom: 20 }}
      ListEmptyComponent={EmptyListComponent}
    />
  );
}

function EmptyListComponent() {
  return (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>
        No Todos available. Please add some!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6dcdc',
    borderRadius: 40,
    padding: 20,
  },
  emptyListContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyListText: {
    color: '#1b1616',
    fontSize: 16
  },
});
