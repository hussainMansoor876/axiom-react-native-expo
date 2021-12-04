import React from 'react'
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'

const Home = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: 'http://hussainmansoor.com' }}
            />
        </View>
    )
}

export default Home