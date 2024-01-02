import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'

export default function DayListItem({ day }) {
    return (
        <Link href={`/day${day}`} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.content}> {day} </Text>
            </Pressable>
        </Link>

    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: '#f9ede3',
        margin: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    content: {
        fontSize: 70,
        color: '#523d2a',
        fontFamily: 'DMBold'
    }

})

