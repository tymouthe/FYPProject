import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const Ingredients = () => {
    const [ingredients, setIngredients] = useState([{ ingredient: '', amount: '', number: '' }]);

    const addIngredient = () => {
        setIngredients([...ingredients, { ingredient: '', amount: '', number: '' }]);
    };

    const removeIngredient = (index) => {
        if (index > 0) {
            const newIngredients = [...ingredients];
            newIngredients.splice(index, 1);
            setIngredients(newIngredients);
        }
    };

    const handleChange = (index, key, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index][key] = value;
        setIngredients(newIngredients);
    };

    return (
        <View style={styles.container}>
            {ingredients.map((item, index) => (
                <View key={index} style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, styles.ingredientInput]}
                        onChangeText={(value) => handleChange(index, 'ingredient', value)}
                        value={item.ingredient}
                        placeholder="Ingredient"
                    />
                    <TextInput
                        style={[styles.input, styles.amountInput]}
                        onChangeText={(value) => handleChange(index, 'amount', value)}
                        value={item.amount}
                        placeholder="Amount"
                        keyboardType="numeric"
                    />
                    
                    {index > 0 && ( // Render remove button only if index is greater than 0
                        <TouchableOpacity onPress={() => removeIngredient(index)}>
                            <Text style={styles.removeText}>Remove</Text>
                        </TouchableOpacity>
                    )}
                </View>
            ))}
            <TouchableOpacity onPress={addIngredient}>
                <Text style={styles.addMoreText}>Add More</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        marginHorizontal: 10,
        borderColor: COLORS.borderGrey,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginBottom: SIZES.small,
    },
    inputContainer: {
        flexDirection: 'row', // Place items horizontally
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.borderGrey,
    },
    input: {
        flex: 1,
        marginRight: 5,
    },
    ingredientInput: {
        marginRight: 5,
    },
    amountInput: {
        marginRight: 5,
    },
    numberInput: {
        width: 60,
    },
    removeText: {
        color: 'red',
        marginLeft: -50,
    },
    addMoreText: {
        color: COLORS.gold,
        fontFamily: 'extrabold',
        alignSelf: 'center',
        marginVertical: 10,
    },
});

export default Ingredients;
