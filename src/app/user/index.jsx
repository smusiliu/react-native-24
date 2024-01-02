import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const UserScreen = () => {
    return (
        <View style={styles.userScreen}>
            <Text>User Screen</Text>
        </View>
    );
};

export default UserScreen;


const styles = StyleSheet.create({
    userScreen: {
        fontFamily: 'Inter'
    }
})