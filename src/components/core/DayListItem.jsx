import { View, Text, StyleSheet } from 'react-native'

export default function DayListItem({ day }) {
    return (
        <View style={styles.box}>
            <Text style={styles.content}> {day} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: '#e0d7bf',
        margin: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    content: {
        fontSize: 70,
        color: '#523d2a',
    }

})

