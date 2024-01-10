import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import TinderCard from '../../../components/day6/TinderCard';

export default function TinderScreen() {

    const users = [
        {
            id: 1,
            name: 'John',
            age: 25,
            image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { id: 
            2, 
            name: 'Emma', 
            age: 23, 
            image: 'https://images.pexels.com/photos/4612159/pexels-photo-4612159.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 3, 
            name: 'Michael', 
            age: 27, image: 'https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 4, name: 'Rose', age: 27, image: 'https://images.pexels.com/photos/9956077/pexels-photo-9956077.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    ]


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Stack.Screen options={{ headerShown: false }} />
            {users.map((user, index) => (
                <TinderCard
                    user={user}
                    key={user.id}
                    numberOfCards={users.length}
                    currentIndex={index}
                />
            ))}

        </View>

    );
};

