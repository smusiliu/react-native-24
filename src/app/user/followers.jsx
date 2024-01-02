import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FollowersPage = () => {
    const followers = [
        { id: 1, username: 'follower1' },
        { id: 2, username: 'follower2' },
        { id: 3, username: 'follower3' },
        // Add more followers as needed
    ];

    const renderFollower = ({ item }) => (
        <View style={styles.followerContainer}>
            <Text style={styles.followerUsername}>{item.username}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Followers</Text>
            <FlatList
                data={followers}
                renderItem={renderFollower}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    followerContainer: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    followerUsername: {
        fontSize: 16,
    },
});

export default FollowersPage;
