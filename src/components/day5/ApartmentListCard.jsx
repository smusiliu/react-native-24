import { View, Text, Image, StyleSheet } from 'react-native';

export const ApartmentListCard = ({ selectedApartment }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/apartment.jpg')}
                    style={styles.image}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}> {selectedApartment.title} </Text>
                <Text style={styles.description}>{selectedApartment.description}</Text>

                <View style={styles.footer}>
                    <Text style={styles.price}>${selectedApartment.price} per night</Text>
                    <Text style={styles.ratings}>
                        <Text style={{ color: 'gold'}}>&#9734;</Text> 
                        {selectedApartment.stars} ({selectedApartment.numberOfRatings})
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        bottom: -10,
        margin: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        // padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    imageContainer: {
        flex: 1.3,
        marginRight: 2,
    },
    image: {
        width: '100%',
        height: 155,
        borderRadius: 5,
    },
    contentContainer: {
        flex: 2,
        padding: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        fontFamily: 'DMBold'
    },
    description: {
        fontSize: 18,
        color: '#888',
        fontFamily: 'DMMedium'
    },
    footer: {
        marginTop: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    price: {
        fontSize: 17,
        fontFamily: 'DMBold',
        color: '#444'
    },
    ratings: {
        fontSize: 17,
        fontFamily: 'DMBold',
        color: '#444'
    },
});
