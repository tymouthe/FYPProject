import { Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../../constants/index';
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import styles from './upload.style'
import CustomSwitch from '../uploadswitches/CustomSwitch';
import LibraryUForm from '../uploadswitches/LibraryUForm/LibraryUForm';
import MarketplaceUForm from '../uploadswitches/MarketplaceUForm/MarketplaceUForm';

const UploadScreen = () => {
  const navigation = useNavigation();

  const [switchesTab, setSwitchesTab] = useState(1);

  const onSelectSwitch = (value) => {
    setSwitchesTab(value);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.secContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}
            style={styles.backButton}
            accessibilityLabel="Navigate to Home"
          >
            <Ionicons name="arrow-back-outline" size={24} color={COLORS.gold} />
          </TouchableOpacity>

          <Text style={styles.safeText}>Create post</Text>
        </View>

        <ScrollView>
          <View style={{ marginVertical: SIZES.medium, marginHorizontal: 10 }}>
            <CustomSwitch
              selectionMode={1}
              option1="Library"
              option2="Marketplace"
              onSelectSwitch={onSelectSwitch}
            />
          </View>

          {switchesTab == 1 && <LibraryUForm />}
          {switchesTab == 2 && <MarketplaceUForm />}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UploadScreen;
