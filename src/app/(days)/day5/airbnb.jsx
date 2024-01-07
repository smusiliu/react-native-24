import { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { Stack } from 'expo-router'
import apartments from '../../../constants/apartments.json'
import { CustomMarker } from '../../../components/day5/CustomMarker'
import { ApartmentListCard } from '../../../components/day5/ApartmentListCard'
import BottomSheet from '@gorhom/bottom-sheet';


export default function AirbnbScreen() {
    const [selectedApartment, setSelectedApartment] = useState(null)

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
                    <CustomMarker
                        apartment={apartment}
                        onPress={() => setSelectedApartment(apartment)}
                    />
                ))}
            </MapView>

            {selectedApartment && <ApartmentListCard selectedApartment={selectedApartment} />}

            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheet>
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

