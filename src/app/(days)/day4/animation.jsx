import { View, Text } from "react-native"


export default function SplashScreenAnimation() {
    return (
        <View style={styles.page}>
            <Text> Splash Screen Animation </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'whitesmoke',
    },
})