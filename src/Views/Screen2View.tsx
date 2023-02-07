import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Screen2View() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Screen2View</Text>
            <Button
                title='Go back'
                onPress={() => navigation.goBack()}
            />
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