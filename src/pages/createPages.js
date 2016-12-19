import React from 'react'
import { View, Text } from 'react-native'

import shopPage from './shop'

export default (store) => {
    return [
        shopPage(store),
        <View style={{ flex: 1 }}><Text>Hello 2</Text></View>
    ]
}