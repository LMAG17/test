import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Context, ContextContent } from '../Context';

export default function Screen2View() {

    const { setTitle }: ContextContent = useContext(Context);

    useFocusEffect(() => { if (setTitle) setTitle("Screen2View") })

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