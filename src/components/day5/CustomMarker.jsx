import { View, Text, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps'


export const CustomMarker = ({ apartment, onPress }) => {
    return (
        <Marker
            key={apartment.id}
            coordinate={{
                latitude: apartment.latitude,
                longitude: apartment.longitude,
            }}
            onPress={onPress}
            // title={apartment.title}
            // description={apartment.description}
        >
            <View
                style={{
                    display: 'relative',
                    zIndex: 10000,
                    backgroundColor: 'white',
                    // padding: 5,
                    paddingHorizontal: 10,
                    // paddingVertical: 20,
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 20
                }}>
                <Text style={{ fontFamily: 'DMBold' }}>${apartment.price}</Text>
            </View>
        </Marker>
    );
};

