import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { Stack } from 'expo-router'
import apartments from '../../../constants/apartments.json'
import { CustomMarker } from '../../../components/day5/CustomMarker'
import { Listing } from '../../../components/day5/Listing'


export default function AirbnbScreen() {
    console.log(apartments)

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen
                options={{ headerShown: false }}
            />
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 42.203217,
                    longitude: -72.625481,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {apartments.map(apartment => (
                    <CustomMarker apartments={apartments} />
                ))}
            </MapView>

            <Listing selectedApartment={apartments[0]} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        // padding: 10,
        // margin: 10,
    },
    map: {
        height: '100%',
        width: '100%',
        fontFamily: 'DMBold'
    }
})

