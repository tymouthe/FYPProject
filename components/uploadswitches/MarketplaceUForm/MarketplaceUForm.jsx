import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ProductDetail from './ProductDetailsHead';
import ProductDetailsHead from './ProductDetailsHead';
import UploadPhotoMarket from './UploadPhotoMarket';
import ProductTitle from './ProductTitle';
import Price from './Price';
import ProductDescription from './ProductDescription';
import Location from './Location';
import ContactHead from './ContactHead';
import ContactName from './ContactName';
import ContactNumber from './ContactNumber';

const MarketplaceUForm = () => {

    return (
        <View>
            <ProductDetailsHead />
            <UploadPhotoMarket />
            <ProductTitle />
            <Price />
            <ProductDescription />
            <Location />
            <ContactHead />
            <ContactName />
            <ContactNumber />
        </View>
    );
};

export default MarketplaceUForm;