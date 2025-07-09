import { FlatList, StyleSheet, Text, View } from 'react-native';
import TodoItem from './TodoItem';
import { AppStrings, Colors } from '../utility/Constants';

export default function TodoList({ list }: { list: string[] }) {
  return (
    <FlatList
      inverted={list.length > 0}
      style={styles.container}
      data={list}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <TodoItem item={item} />}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={EmptyListComponent}
    />
  );
}

function EmptyListComponent() {
  return (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>
        {AppStrings.EMPTY_LIST_MESSAGE}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    padding: 20,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20
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
