import { View } from 'react-native'

export default function AirBnBMap() {
    return (
        <View>
            <Stack.Screen options={{ title: 'Markdown Editor', }} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        padding: 10,
        margin: 10,
    },
})

