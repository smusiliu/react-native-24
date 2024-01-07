import { View, Text, StyleSheet } from "react-native"
import { Stack } from "expo-router"
import LottieView from 'lottie-react-native'


export default function SplashAnimation() {
    return (
        <View style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />

            <LottieView
                autoPlay
                // ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../../../../assets/lottie/zolar.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'DMBold'
    },
})

