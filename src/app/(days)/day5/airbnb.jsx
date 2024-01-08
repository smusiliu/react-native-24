import { useState, useRef, useMemo, useCallback } from 'react'
import { ScrollView, FlatList, View, Text, SafeAreaView, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { Stack } from 'expo-router'
import apartments from '../../../constants/apartments.json'
import { CustomMarker } from '../../../components/day5/CustomMarker'
import { ApartmentListCard } from '../../../components/day5/ApartmentListCard'
import BottomSheet, { BottomSheetFlatList, useGestureEventsHandlersDefault } from '@gorhom/bottom-sheet';
import { Gesture } from 'react-native-gesture-handler'
import { events } from '@onflow/fcl'


export default function AirbnbScreen() {
    const [selectedApartment, setSelectedApartment] = useState(null)
    const [mapRegion, setMapRegion] = useState({
        latitude: 42.336457,
        longitude: -71.985786,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const gestureHandler = () =>({
        handleOnStart: () => {},
        handleOnActive: () => {},
        handleOnEnd: () => {}
    })

    const snapPoints = useMemo(() => [80, '25%', '50%', '90%'], []);

    // callbacks
    // const handleSheetChanges = useCallback((index) => {
    //     console.log('handleSheetChanges', index);
    // }, []);

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen
                options={{ headerShown: false }}
            />
            <MapView
                style={styles.map}
                // initialRegion={{
                //     latitude: 42.336457,
                //     longitude: -71.985786,
                //     latitudeDelta: 0.0922,
                //     longitudeDelta: 0.0421,
                // }}
                region={mapRegion}
            >
                {apartments.map(apartment => (
                    <CustomMarker
                        key={apartment.id}
                        apartment={apartment}
                        onPress={() => setSelectedApartment(apartment)}
                    />
                ))}
            </MapView>

            {selectedApartment && (
                <ApartmentListCard selectedApartment={selectedApartment} containerStyle={{ position: 'absolute', bottom: snapPoints[0] }} />
            )}

            <BottomSheet
                // ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={(e) => console.log(e)}
                onAnimate={(e) => console.log(e)}
                gestureEventsHandlersHook={gestureHandler}
            >
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            fontFamily: 'DMBold',
                            textAlign: 'center',
                            fontSize: 20,
                            marginVertical: 10
                        }}> Over {apartments.length} places </Text>


                    <BottomSheetFlatList
                        contentContainerStyle={{ gap: 10, padding: 10 }}
                        data={apartments}
                        renderItem={({ item }) => (
                            <ApartmentListCard selectedApartment={item} />
                        )}
                    />
                </View>
            </BottomSheet>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'whitesmoke',
    },

    map: {
        height: '100%',
        width: '100%',
        fontFamily: 'DMBold'
    }
})

