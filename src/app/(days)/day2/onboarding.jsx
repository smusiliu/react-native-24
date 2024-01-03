import { useState } from "react";

import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Stack, router } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';

import { onboardingData } from "../../../constants";
import { StatusBar } from "expo-status-bar";
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';


export default function OnboardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);
    const data = onboardingData[screenIndex];

    const isLastScreen = screenIndex === onboardingData.length - 1

    const handleContinue = () => {
        if (isLastScreen) {
            endOnboarding()

        } else {
            setScreenIndex(screenIndex + 1);
        }
    }

    const endOnboarding = () => {
        setScreenIndex(0)
        router.back()
    }

    const onSwipeBack = () => {
        const isFirstScreen = screenIndex == 0
        if (isFirstScreen) {
            endOnboarding()

        } else {
            setScreenIndex(screenIndex - 1);
        }
    }

    const swipeForward = Gesture.Fling()
        .direction(Directions.LEFT)
        .onEnd(handleContinue)


    const swipeBackward = Gesture.Fling()
        .direction(Directions.RIGHT)
        .onEnd(onSwipeBack)

    const swipes = Gesture.Simultaneous(swipeBackward, swipeForward)

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar
                style="light"
            />
            <GestureDetector gesture={swipes}>
                <View style={styles.pageContent}>
                    <View style={styles.screenIndicatorContainer}>
                        {onboardingData.map((data, idx) => <View
                            style={[styles.screenIndicator, { backgroundColor: idx == screenIndex ? '#cec202' : 'gray' }]}
                            key={idx}
                        />)}
                    </View>

                    <FontAwesome5
                        name={data.icon}
                        size={100}
                        color="black"
                        style={styles.image}
                    />

                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.description}>{data.description}</Text>
                    </View>

                    <View style={styles.buttonsRow}>
                        <Text onPress={() => endOnboarding()} style={styles.buttonText}>Skip</Text>
                        <Pressable onPress={() => handleContinue()} style={styles.button}>
                            {
                                screenIndex === 3 ? <Text style={styles.buttonText}>Enter</Text> :
                                    <Text style={styles.buttonText}>Continue</Text>
                            }
                            {/* <Text style={styles.buttonText}>Continue</Text> */}
                        </Pressable>
                    </View>
                </View>
            </GestureDetector>

        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    page: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#15141a',
    },
    pageContent: {
        padding: 30,
        flex: 1
    },
    screenIndicatorContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 30,
    },
    screenIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: 'gray',
        borderRadius: 15
    },

    image: {
        alignSelf: 'center',
        margin: 30,
        marginTop: 150,
        color: '#cec202'
    },
    contentContainer: {
        marginTop: 'auto',
    },
    title: {
        color: '#ededed',
        fontSize: 50,
        fontFamily: 'DMBold',
        textAlign: 'left',
        letterSpacing: 1.01,
        marginVertical: 20,
        lineHeight: 60
    },
    description: {
        color: 'gray',
        fontSize: 20,
        fontFamily: 'DMMedium',
        lineHeight: 28
    },
    buttonsRow: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25
    },
    button: {
        backgroundColor: '#302e38',
        borderRadius: 40,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: "#ededed",
        fontSize: 17,
        fontFamily: 'DMMedium',
        padding: 17,
        paddingHorizontal: 25,
    }
})

