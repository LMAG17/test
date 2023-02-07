import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactView() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ContactView</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
})