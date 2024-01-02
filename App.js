import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

import * as SplashScreen from 'expo-splash-screen';


import DayListItem from './src/components/core/DayListItem';

const days = [... new Array(24)].map((value, idx) => idx + 1);

export default function App() {
    const [fontLoaded, fontError] = useFonts({
        Inter: Inter_900Black
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


