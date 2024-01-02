import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

const days = [... new Array(24)].map((value, idx) => idx + 1);

export default function App() {
    return (
        <View style={styles.container}>
            <FlatList
                data={days}
                renderItem={({item}) => <DayListItem day={item} />}
                numColumns={2}
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


