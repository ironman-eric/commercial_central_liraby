import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { Book, listBooks } from '../../data/Book';

const ListBooks = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Book[]>();

  useEffect(() => {
    listBooks()
      .then(books => setData(books))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
  },
});

export default ListBooks;
