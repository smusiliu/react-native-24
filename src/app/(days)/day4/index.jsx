import { Button, SafeAreaView, Text, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";
import MarkdownDisplay from "../../../components/day3/MarkdownDisplay";

export default function DayDetailsScreen() {
    const msg = `# Spash Screen Animation`
    
    return (
        <SafeAreaView egdes={['bottom']} style={{ flex: 1, padding: 20}}>
            <Stack.Screen options={{ title: "Day 4" }} />
            <MarkdownDisplay>
                {msg}
            </MarkdownDisplay>

            <Link href="/day4/animation" asChild>
                <Button title="Go to Editor" />
            </Link>
        </SafeAreaView>
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
        // width: 250,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 87,
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

