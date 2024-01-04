import { Button, View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";

import { Link } from "expo-router";

export default function DayDetailsScreen() {
    
    return (
        <View>
            <Stack.Screen options={{ title: "Day 3" }} />
            <Text style={styles.title}> Day 3 </Text>

            <Link href="/day3/editor" asChild>
                <Button style={styles.button} title="Go to Editor" />
            </Link>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontFamily: 'DMBold',
        textAlign: 'center',
        margin: 15
    },

    button: {
        width: 250,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'DMBold'
    },
})

