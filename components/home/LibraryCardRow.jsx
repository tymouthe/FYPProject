import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'
import LibraryCardRowView from './LibraryCardRowView';

const LibraryCardRow = () => {
  const librarycardrow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Custom function to render two products per row
  const renderLibraryCardRow= ({ item, index }) => {
    // Check if it's an even index
    if (index % 2 === 0) {
      // Render two products side by side
      return (
        <View style={{ flexDirection: 'row', marginBottom: 30, marginTop: -40 }}>
          <LibraryCardRowView />
          {/* Render second product only if available */}
          {librarycardrow[index + 1] && <LibraryCardRowView />}
        </View>
      );
    }
    // For odd indexes, return an empty view
    return <View />;
  };

  return (
    <View style={{ marginTop: 50, marginBottom: 10 }}>
      <FlatList
        data={librarycardrow}
        renderItem={renderLibraryCardRow}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default LibraryCardRow;