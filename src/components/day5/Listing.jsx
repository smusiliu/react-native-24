import { View, Text, Image, StyleSheet } from 'react-native';

export const Listing = ({selectedApartment}) => {
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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        bottom: 1,
        margin: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    imageContainer: {
        flex: 1,
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: 135,
        borderRadius: 5,
    },
    contentContainer: {
        flex: 2,
        
    },
    title: {
        fontSize: 23,
        marginBottom: 5,
        fontFamily: 'DMBold'
    },
    description: {
        fontSize: 17,
        color: '#888',
        fontFamily: 'DMMedium'
    },
});
