import { useFocusEffect } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context, ContextContent } from '../Context';

export default function ContactView() {

    const { setTitle }: ContextContent = useContext(Context);

    useFocusEffect(() => { if (setTitle) setTitle("Contact") })
    
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