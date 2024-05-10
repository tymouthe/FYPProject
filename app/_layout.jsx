import React from 'react'
import { useEffect } from 'react';
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootLayoutNav from "./RootLayoutNav"; // Assuming this is where your RootLayoutNav component is defined

export {
    ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
    initialRouteName: "(tabs)",
};

export default function RootLayout() {
    const [loaded, error] = useFonts({
        regular: require("../assets/fonts/Inter-Regular.ttf"),
        light: require("../assets/fonts/Inter-Light.ttf"),
        medium: require("../assets/fonts/Inter-Medium.ttf"),
        extrabold: require("../assets/fonts/Inter-ExtraBold.ttf"),
        bold: require("../assets/fonts/Inter-Bold.ttf"),
        semibold: require("../assets/fonts/Inter-SemiBold.ttf"),
        KhBattambang: require("../assets/fonts/Kh-Battambang.otf"),
        KhBaphnomiChannli:  require("../assets/fonts/KhBaphnomiChannli.otf"),
        SFPro: require("../assets/fonts/SFProDisplay-Semibold.otf"),
    });

    useEffect(() => {
        if (!loaded) {
            SplashScreen.preventAutoHideAsync();
        } else {
            SplashScreen.hideAsync();
        }
        if (error) throw error;
    }, [error, loaded]);
    
    return <>{loaded && <RootLayoutNav />}</>;
}
