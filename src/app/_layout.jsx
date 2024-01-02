import { useEffect } from "react";
import { Stack } from "expo-router"
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans';

import * as SplashScreen from 'expo-splash-screen';


export default function RootLayout() {
    const [fontLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        DMRegular: DMSans_400Regular,
        DMBold: DMSans_700Bold,
    })

    useEffect(() => {
        if (fontLoaded || fontError) {
            SplashScreen.hideAsync()
        }

    }, [fontLoaded, fontError])

    if (!fontLoaded && !fontError) return null

    return <Stack
        screenOptions={{}}
    >
        <Stack.Screen name="index" options={{ title: 'Advent Calendar' }} />
    </Stack>
}

