import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import LibraryCardView from './LibraryCardView';

const LibraryRow = () => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <LibraryCardView key={index} />
      ))}
    </ScrollView>
  );
};

export default LibraryRow;