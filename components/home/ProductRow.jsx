import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'
import ProductCardView from './ProductCardView';

const ProductRow = () => {
  const products = [1, 2, 3, 4,5,6];

  // Custom function to render two products per row
  const renderProductRow = ({ item, index }) => {
    // Check if it's an even index
    if (index % 2 === 0) {
      // Render two products side by side
      return (
        <View style={{ flexDirection: 'row', marginBottom: 50 }}>
          <ProductCardView />
          {/* Render second product only if available */}
          {products[index + 1] && <ProductCardView />}
        </View>
      );
    }
    // For odd indexes, return an empty view
    return <View />;
  };

  return (
    <View style={{ marginTop: 50 }}>
      <FlatList
        data={products}
        renderItem={renderProductRow}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ProductRow;