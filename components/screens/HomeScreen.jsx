import React, { useState } from 'react';
import { SafeAreaView, RefreshControl } from 'react-native';
import { COLORS } from '../../constants/index';
import { View, FlatList } from 'react-native';
import styles from './home.style';
import Carousels from '../../components/home/Carousels';
import Heading from '../../components/home/Heading';
import SubHeader from '../../components/home/SubHeader';
import LibraryRow from '../../components/home/LibraryRow';
import SeeMoreText from '../../components/home/SeeMoreText';
import Heading2 from '../../components/home/Heading2';
import LibraryRow2 from '../../components/home/LibraryRow2';
import Heading3 from '../../components/home/Heading3';
import LibraryRow3 from '../../components/home/LibraryRow3';
import Heading4 from '../../components/home/Heading4';
import LibraryRow4 from '../../components/home/LibraryRow4';
import Heading5 from '../../components/home/Heading5';
import LibraryCardRow from '../../components/home/LibraryCardRow';

const HomeScreen = () => {
    const [refreshing, setRefreshing] = useState(false);

    // Example data, replace with your actual data
    const data = [
        { key: '1' },
        // Add more items as needed
    ];

    const renderItem = ({ item }) => (
        <View style={{
            flex: 1,
            backgroundColor: "#FAFAFA"
        }}>
            <Carousels />
            <Heading />
            <LibraryRow />
            <SeeMoreText />
            <Heading2 />
            <LibraryRow2 />
            <Heading3 />
            <LibraryRow3 />
            <Heading4 />
            <LibraryRow4 />
            <Heading5 />
            <LibraryCardRow />
        </View>
    );

    const onRefresh = () => {
        // Add your refresh logic here
        setRefreshing(true);
        // Simulate refreshing delay, replace with actual refresh logic
        setTimeout(() => {
            setRefreshing(false);
        }, 2000); // Example delay of 2000 milliseconds (2 seconds)
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>
            <SubHeader/>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor={COLORS.primary} // Customize the color of the refresh indicator
                        title="Refreshing..." // Customize the text displayed during refresh
                        titleColor={COLORS.primary} // Customize the color of the refresh text
                    />
                }
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
