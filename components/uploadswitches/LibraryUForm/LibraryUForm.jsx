import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import UploadHeading1 from './UploadHeader1';
import UploadPhoto from './UploadPhoto';
import RecipeTitle from './RecipeTitle';
import RecipeDescription from './RecipeDescription';
import Ingredients from './Ingredients';
import Materials from './Materials';
import Methods from './Methods';

const LibraryUForm = () => {

    return (
        <View>
            <UploadHeading1 />
            <UploadPhoto />
            <RecipeTitle />
            <RecipeDescription />
            <Ingredients />
            <Materials />
            <Methods />
        </View>
    );
};

export default LibraryUForm;
