import { useState } from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { Stack } from 'expo-router';
import MarkdownDisplay from '../../../components/day3/MarkdownDisplay';
import { template } from '../../../constants';


const EditorScreen = () => {
    const [content, setContent] = useState(template)

    const [tab, setTab] = useState('edit')

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ title: 'Markdown Editor', }} />
            <View style={styles.tabsContainer}>
                <Pressable
                    onPress={() => setTab('edit')}
                    style={[styles.tab, { borderColor: tab == 'edit' ? '#aa38e8' : '#b0b0b0' }]}
                >
                    <Text style={styles.tabText}>Edit</Text>
                </Pressable>

                <Pressable
                    onPress={() => setTab('preview')}
                    style={[styles.tab, { borderColor: tab == 'preview' ? '#aa38e8' : '#b0b0b0' }]}
                >
                    <Text style={styles.tabText}>Preview</Text>
                </Pressable>
            </View>

            {tab == 'edit' ? (
                <TextInput
                    style={styles.input}
                    multiline
                    textAlignVertical='top'
                    onChangeText={setContent}
                    value={content}
                    numberOfLines={50}
                />)

                : (
                    <View style={styles.markdownContainer}>
                        <MarkdownDisplay>
                            {content}
                        </MarkdownDisplay>
                    </View>
                )}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        padding: 10,
        margin: 10,
    },

    input: {
        fontSize: 19,
        padding: 20,
        backgroundColor: 'white',
        fontFamily: 'DMMedium',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#dedede',
        borderRadius: 10,
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        paddingTop: 20,
        borderRadius: 10,
        fontSize: 18,
        fontFamily: 'DMMedium',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#dedede',
    },
    tabsContainer: {
        flexDirection: 'row',
        gap: 10,
        margin: 10,
    },
    tab: {
        flex: 1,
        borderWidth: 1.75,
        borderColor: '#b0b0b0',
        padding: 15,
        borderRadius: 6,
        marginVertical: 10,
    },
    tabText: {
        fontSize: 18,
        fontFamily: 'DMBold',
        alignSelf: 'center',
        color: '#333233'
    },

    markdownContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        fontFamily: 'DMMedium',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#dedede',
        borderRadius: 10,
    }
})


export default EditorScreen;

