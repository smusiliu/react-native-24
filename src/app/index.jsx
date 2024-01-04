import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';

import DayListItem from '../components/core/DayListItem';

const days = [... new Array(24)].map((value, idx) => idx + 1);

export default function HomeScreen() {
    
    return (
        <View style={styles.container}>
            <FlatList
                data={days}
                renderItem={({item}) => <DayListItem day={item} />}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />

            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

});


