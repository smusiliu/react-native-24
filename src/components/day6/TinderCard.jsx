import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export const tinderCardWidth = Dimensions.get('screen').width * 0.8

export default function TinderCard({ user, numberOfCards, currentIndex }) {
    return (
        <View style={[styles.card, { zIndex: numberOfCards - currentIndex }]}>
            <Image
                source={{uri: `${user.image}`}}
                style={[StyleSheet.absoluteFillObject, styles.image]}
            />

            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={[StyleSheet.absoluteFillObject, styles.overlay]}
            />

            <View styles={styles.footer}>
                <Text style={styles.name}> {user.name} </Text>
                <Text style={styles.age}>{user.age}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: tinderCardWidth,
        position: 'absolute',
        aspectRatio: 1 / 1.67,
        justifyContent: 'flex-end',
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        borderRadius: 20,
    },

    overlay: {
        top: '50%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    footer: {
        padding: 20
    },
    name: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'DMBold',
        padding: 10
    },
})

