import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import LibraryCardView from './LibraryCardView4';

const LibraryRow4 = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <LibraryCardView key={index} />
      ))}
    </ScrollView>
  );
};

export default LibraryRow4;