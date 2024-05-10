import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';

const SearchScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [receivedLocations, setReceivedLocations] = useState([]);

  useEffect(() => {
    getLocationAsync();
    fetchLocationData(); // Fetch location data from backend when component mounts
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setUserLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude
    });
  };

  const fetchLocationData = async () => {
    try {
      const response = await axios.get('https://api-test-1-n7x0.onrender.com/api/locations');
      const { data } = response;
      setReceivedLocations(data); // Set received locations state
    } catch (error) {
      console.error('Failed to fetch location data:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      // Submit location data to server
      await axios.post('https://api-test-1-n7x0.onrender.com/api/locations', { latitude: parseFloat(latitude), longitude: parseFloat(longitude) });

      // Update the list of received locations
      setReceivedLocations([...receivedLocations, { latitude: parseFloat(latitude), longitude: parseFloat(longitude) }]);

      // Clear input fields
      setLatitude('');
      setLongitude('');
    } catch (error) {
      console.error('Failed to submit location data:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation ? userLocation.latitude : 11.585261,
          longitude: userLocation ? userLocation.longitude : 104.916356,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Render markers for received locations */}
        {receivedLocations.map((location, index) => (
          <Marker key={index} coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
        ))}
        {/* Render marker for user's current location */}
        {userLocation && <Marker coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }} />}
      </MapView>
      {/* Input fields and buttons */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Latitude"
          style={styles.input}
          value={latitude}
          onChangeText={text => setLatitude(text)}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Longitude"
          style={styles.input}
          value={longitude}
          onChangeText={text => setLongitude(text)}
          keyboardType="numeric"
        />
        <Button title="Get Current Location" onPress={getLocationAsync} />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default SearchScreen;
