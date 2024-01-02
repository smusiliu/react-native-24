import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans';

import * as SplashScreen from 'expo-splash-screen';

import DayListItem from '../components/core/DayListItem';

const days = [... new Array(24)].map((value, idx) => idx + 1);

export default function HomeScreen() {
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
    
    return (
        <View style={styles.container}>
            <FlatList
                data={days}
                renderItem={({item}) => <DayListItem day={item} />}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />

            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

});


