import { View, Text, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

import Markdown from 'react-native-markdown-display';

export default function EditorScreen() {
    const markdownContents = `# Welcome to My Dummy Markdown

    ## Introduction
    
    This is a simple Markdown document to showcase various elements.
    
    ### Lists
    
    - Item 1
    - Item 2
      - Subitem 2.1
      - Subitem 2.2
    
    ### Code Block
    
    ```

    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />

            <Markdown>
                {markdownContents}
            </Markdown>
        </View>
    )
}


const styles = StyleSheet.create({

})


