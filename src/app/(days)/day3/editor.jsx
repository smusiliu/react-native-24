import { View, Text, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

export default function EditorScreen() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />
            <Text>Here's the Editor</Text>
        </View>
    )
}


const styles = StyleSheet.create({

})


