import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

const DayDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Day 1' }} />
            <Text style={styles.title}>Day 1 Screen </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    title: {
        fontSize: 35,
        fontFamily: 'DMBold',
        textAlign: 'center',
        marginTop: 15
    },
});

export default DayDetailsScreen;


