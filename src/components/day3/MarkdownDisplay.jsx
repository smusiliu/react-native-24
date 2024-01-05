import { Children } from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import Markdown from 'react-native-markdown-display';


const MarkdownDisplay = ({ children }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior='automatic'>
            <Markdown style={markdownStyles}>
                { children }
            </Markdown>
        </ScrollView>
    )
}

const markdownStyles = StyleSheet.create({
  
    body: {
        marginTop: 2,
        fontFamily: 'DMMedium',
        fontSize: 20,
        color: '#302e38',
    },
    heading1: {
        fontSize: 34,
        marginBottom: 10,
        fontFamily: 'DMBold',
    },
    heading2: {
        fontSize: 31,
        fontFamily: 'DMBold',
        marginTop: 10,
        marginBottom: 10,
    },
    heading3: {
        fontSize: 28,
        fontFamily: 'DMBold',
        marginTop: 20,
    },
    heading4: {
        fontSize: 25,
        fontFamily: 'DMBold',
        marginTop: 20,
        marginBottom: 10,
        marginBottom: 10,
    }
})


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f7f3f2',
        // justifyContent: 'center',
        padding: 20
    }
})


export default MarkdownDisplay