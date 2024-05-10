import { Tabs } from 'expo-router';
import TabButton from '../../components/common/navigation/TabButton';
export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name='home'
                options={{
                    tabBarButton: (props) => (
                        <TabButton
                            {...props}
                            iconName={
                                props?.accessibilityState?.selected
                                    ? 'home'
                                    : 'home'
                            }
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='library'
                options={{
                    tabBarButton: (props) => (
                        <TabButton {...props} iconName={'library'} />
                    ),
                }}
            />
            <Tabs.Screen
                name='marketplace'
                options={{
                    tabBarButton: (props) => (
                        <TabButton {...props} iconName={'cart'} />
                    ),
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    tabBarButton: (props) => (
                        <TabButton {...props} iconName={'search'} />
                    ),
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    tabBarButton: (props) => (
                        <TabButton
                            {...props}
                            iconName={
                                props?.accessibilityState?.selected
                                    ? 'person'
                                    : 'person'
                            }
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
